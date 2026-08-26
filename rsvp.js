// Cloudflare Pages Function — handles GET/POST /api/rsvp
//
// GET  /api/rsvp?code=xxx   -> { response: {...} | null }
//   Used to prefill the RSVP form when a guest who already responded
//   identifies themselves again.
//
// POST /api/rsvp            -> { ok: true }
//   Body (JSON): { code, attendance, aantal, diet, bericht, honeymoon, song, submittedAt }
//   Saves (or overwrites) that guest's response in the D1 database.
//
// Requires a D1 database bound to this Pages project as "DB" (see schema.sql
// for the table it expects), and reachable at env.DB.

function isValidCode(code) {
  return typeof code === "string" && code.length > 0 && code.length < 200;
}

export async function onRequestGet(context) {
  const { request, env } = context;
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

export async function onRequestPost(context) {
  const { request, env } = context;

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
