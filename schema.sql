-- Run this once in the Cloudflare D1 dashboard console (or via `wrangler d1 execute`)
-- to create the table that stores RSVP responses.

CREATE TABLE IF NOT EXISTS responses (
  code TEXT PRIMARY KEY,
  attendance TEXT NOT NULL,
  aantal INTEGER NOT NULL DEFAULT 0,
  diet TEXT,
  bericht TEXT,
  honeymoon TEXT,
  song TEXT,
  submittedAt INTEGER
);
