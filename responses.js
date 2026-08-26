// Cloudflare Pages Function — handles GET /api/responses
//
// Returns every submitted RSVP response, but only if the request includes
// the correct admin password in the X-Admin-Password header. The real
// password lives in the ADMIN_PASSWORD environment variable set in the
// Cloudflare Pages dashboard (Settings -> Environment variables) — it is
// never stored in the site's own code, so it doesn't show up if someone
// looks at the page source.
//
// Requires a D1 database bound to this Pages project as "DB" (see schema.sql).

export async function onRequestGet(context) {
  const { request, env } = context;

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
