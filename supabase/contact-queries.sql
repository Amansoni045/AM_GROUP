-- Contact / consultation form submissions
CREATE TABLE IF NOT EXISTS contact_queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  service TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_queries_created ON contact_queries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_queries_status ON contact_queries(status);

ALTER TABLE contact_queries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public submit query" ON contact_queries;
CREATE POLICY "Public submit query" ON contact_queries
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Auth read queries" ON contact_queries;
CREATE POLICY "Auth read queries" ON contact_queries
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Auth update queries" ON contact_queries;
CREATE POLICY "Auth update queries" ON contact_queries
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Auth delete queries" ON contact_queries;
CREATE POLICY "Auth delete queries" ON contact_queries
  FOR DELETE TO authenticated USING (true);
