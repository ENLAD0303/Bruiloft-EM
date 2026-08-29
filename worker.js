// One Worker script that serves the wedding site's static files (via env.ASSETS)
// AND handles the two API routes (/api/rsvp, /api/responses) using the D1
// database bound as "DB". This replaces the older functions/api/*.js approach,
// because the current Cloudflare dashboard's Git-import flow does not reliably
// auto-detect the classic Pages "functions/" directory convention anymore --
// an explicit wrangler.jsonc + "main" worker script is the dependable path.

import { EmailMessage } from "cloudflare:email";

function isValidCode(code) {
  return typeof code === "string" && code.length > 0 && code.length < 200;
}

async function handleRsvpGet(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!isValidCode(code)) {
    return new Response(JSON.stringify({ error: "invalid code" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const row = await env.DB.prepare("SELECT * FROM responses WHERE code = ?").bind(code).first();

  if (!row) {
    return new Response(JSON.stringify({ response: null }), {
      headers: { "content-type": "application/json" }
    });
  }

  const response = {
    code: row.code,
    attendance: JSON.parse(row.attendance || "{}"),
    aantal: row.aantal,
    diet: row.diet || "",
    bericht: row.bericht || "",
    honeymoon: row.honeymoon || "",
    song: row.song || "",
    submittedAt: row.submittedAt
  };

  return new Response(JSON.stringify({ response }), {
    headers: { "content-type": "application/json" }
  });
}

async function handleRsvpPost(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const code = body && body.code;
  if (!isValidCode(code)) {
    return new Response(JSON.stringify({ error: "invalid code" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const attendance = JSON.stringify(body.attendance || {});
  const aantal = parseInt(body.aantal, 10) || 0;
  const diet = String(body.diet || "").slice(0, 500);
  const bericht = String(body.bericht || "").slice(0, 2000);
  const honeymoon = String(body.honeymoon || "").slice(0, 500);
  const song = String(body.song || "").slice(0, 500);
  const submittedAt = Number(body.submittedAt) || Date.now();

  await env.DB.prepare(
    `INSERT INTO responses (code, attendance, aantal, diet, bericht, honeymoon, song, submittedAt)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(code) DO UPDATE SET
       attendance = excluded.attendance,
       aantal = excluded.aantal,
       diet = excluded.diet,
       bericht = excluded.bericht,
       honeymoon = excluded.honeymoon,
       song = excluded.song,
       submittedAt = excluded.submittedAt`
  ).bind(code, attendance, aantal, diet, bericht, honeymoon, song, submittedAt).run();

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" }
  });
}

async function handleResponsesGet(request, env) {
  const supplied = request.headers.get("X-Admin-Password") || "";
  const expected = env.ADMIN_PASSWORD || "";

  if (!expected || supplied !== expected) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" }
    });
  }

  const { results } = await env.DB.prepare(
    "SELECT * FROM responses ORDER BY submittedAt DESC"
  ).all();

  const responses = (results || []).map(function (row) {
    return {
      code: row.code,
      attendance: JSON.parse(row.attendance || "{}"),
      aantal: row.aantal,
      diet: row.diet || "",
      bericht: row.bericht || "",
      honeymoon: row.honeymoon || "",
      song: row.song || "",
      submittedAt: row.submittedAt
    };
  });

  return new Response(JSON.stringify({ responses }), {
    headers: { "content-type": "application/json" }
  });
}

function sanitizeHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim().slice(0, 200);
}

async function handleContactPost(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const naam = sanitizeHeader(body && body.naam) || "Onbekende gast";
  const email = String((body && body.email) || "").trim();
  const telefoon = sanitizeHeader(body && body.telefoon) || "(niet ingevuld)";
  const bericht = String((body && body.bericht) || "").trim().slice(0, 3000);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk || !bericht) {
    return new Response(JSON.stringify({ error: "invalid input" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const subject = "Bericht via de website: " + naam;
  const plainBody = [
    "Naam: " + naam,
    "E-mail: " + email,
    "Telefoonnummer: " + telefoon,
    "",
    "Bericht:",
    bericht
  ].join("\n");

  const raw =
    "From: Bruiloft contactformulier <contactformulier@estherenmartijn.com>\r\n" +
    "To: e.m.ceremoniemeesters27@gmail.com\r\n" +
    "Reply-To: " + sanitizeHeader(email) + "\r\n" +
    "Subject: " + subject + "\r\n" +
    "Content-Type: text/plain; charset=UTF-8\r\n" +
    "MIME-Version: 1.0\r\n" +
    "\r\n" +
    plainBody;

  try {
    const msg = new EmailMessage(
      "contactformulier@estherenmartijn.com",
      "e.m.ceremoniemeesters27@gmail.com",
      raw
    );
    await env.SEND_EMAIL.send(msg);
  } catch (e) {
    return new Response(JSON.stringify({ error: "send failed" }), {
      status: 502,
      headers: { "content-type": "application/json" }
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    
    if (url.pathname === "/api/rsvp") {
      if (request.method === "GET") return handleRsvpGet(request, env);
      if (request.method === "POST") return handleRsvpPost(request, env);
      return new Response("Method not allowed", { status: 405 });
    }

        if (url.pathname === "/api/responses" && request.method === "GET") {
      return handleResponsesGet(request, env);
    }

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContactPost(request, env);
    }

    // Everything else: hand off to the static site files (index.html, style.css, script.js).
    return env.ASSETS.fetch(request);
  }
};
