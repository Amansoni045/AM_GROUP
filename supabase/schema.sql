-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query)

-- Categories (Leadership + Departments)
CREATE TABLE IF NOT EXISTS team_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  is_leadership BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Team members
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES team_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  profile_image_url TEXT,
  cloudinary_public_id TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_team_members_category ON team_members(category_id);
CREATE INDEX IF NOT EXISTS idx_team_categories_sort ON team_categories(sort_order);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS team_categories_updated_at ON team_categories;
CREATE TRIGGER team_categories_updated_at
  BEFORE UPDATE ON team_categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS team_members_updated_at ON team_members;
CREATE TRIGGER team_members_updated_at
  BEFORE UPDATE ON team_members
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security
ALTER TABLE team_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read categories" ON team_categories;
CREATE POLICY "Public read categories" ON team_categories
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read members" ON team_members;
CREATE POLICY "Public read members" ON team_members
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Auth insert categories" ON team_categories;
CREATE POLICY "Auth insert categories" ON team_categories
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Auth update categories" ON team_categories;
CREATE POLICY "Auth update categories" ON team_categories
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Auth delete categories" ON team_categories;
CREATE POLICY "Auth delete categories" ON team_categories
  FOR DELETE TO authenticated USING (true);

DROP POLICY IF EXISTS "Auth insert members" ON team_members;
CREATE POLICY "Auth insert members" ON team_members
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Auth update members" ON team_members;
CREATE POLICY "Auth update members" ON team_members
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Auth delete members" ON team_members;
CREATE POLICY "Auth delete members" ON team_members
  FOR DELETE TO authenticated USING (true);

-- Seed data (from original team.json)
INSERT INTO team_categories (name, is_leadership, sort_order) VALUES
  ('Leadership', true, 0),
  ('AM Consulting', false, 1),
  ('AM Accounting', false, 2),
  ('AM Design', false, 3),
  ('AM Technology', false, 4)
ON CONFLICT DO NOTHING;

-- Leadership members
INSERT INTO team_members (category_id, name, role, sort_order)
SELECT c.id, m.name, m.role, m.sort_order
FROM team_categories c,
(VALUES
  ('Ravi Mehta', 'CEO - Managing Partner', 0),
  ('Deepali Mehta', 'Partner and Executive Director', 1),
  ('Dr. Raed Sarhan', 'Executive Director', 2),
  ('Chandresh H. Mehta', 'Executive Director', 3)
) AS m(name, role, sort_order)
WHERE c.name = 'Leadership' AND c.is_leadership = true
AND NOT EXISTS (SELECT 1 FROM team_members tm JOIN team_categories tc ON tm.category_id = tc.id WHERE tc.is_leadership = true);

-- AM Consulting
INSERT INTO team_members (category_id, name, role, sort_order)
SELECT c.id, m.name, m.role, m.sort_order
FROM team_categories c,
(VALUES
  ('Shwetank Bhushan', 'Director of Advisory', 0),
  ('Asitava Bose', 'Director - Consulting', 1),
  ('Maryam Almajed', 'Account Analyst', 2),
  ('Akash Mahajan', 'Financial Consultant', 3),
  ('Rose Maria Biju', 'Consultant', 4)
) AS m(name, role, sort_order)
WHERE c.name = 'AM Consulting'
AND NOT EXISTS (SELECT 1 FROM team_members tm JOIN team_categories tc ON tm.category_id = tc.id WHERE tc.name = 'AM Consulting');

-- AM Accounting
INSERT INTO team_members (category_id, name, role, sort_order)
SELECT c.id, m.name, m.role, m.sort_order
FROM team_categories c,
(VALUES
  ('Anchu Prakash', 'Manager - Finance & Operations', 0),
  ('Anima Jagdeesh', 'Financial Manager', 1),
  ('Abdul Niyas Thodi', 'Senior Accountant', 2),
  ('Shafeek Alingal', 'Senior Accountant', 3),
  ('Thrishna Radhakrishnan', 'Accountant', 4),
  ('Lekshmi Krishnan', 'Accountant', 5),
  ('Komal Parekh', 'Accountant', 6),
  ('Anju Augustine', 'Accountant', 7),
  ('Preeti Mishra', 'Office Administrator', 8)
) AS m(name, role, sort_order)
WHERE c.name = 'AM Accounting'
AND NOT EXISTS (SELECT 1 FROM team_members tm JOIN team_categories tc ON tm.category_id = tc.id WHERE tc.name = 'AM Accounting');

-- AM Design
INSERT INTO team_members (category_id, name, role, sort_order)
SELECT c.id, m.name, m.role, m.sort_order
FROM team_categories c,
(VALUES
  ('Mohamed Abdulameer', 'Graphic Designer', 0),
  ('Shreyas Rasane', 'Graphic Designer', 1)
) AS m(name, role, sort_order)
WHERE c.name = 'AM Design'
AND NOT EXISTS (SELECT 1 FROM team_members tm JOIN team_categories tc ON tm.category_id = tc.id WHERE tc.name = 'AM Design');

-- AM Technology
INSERT INTO team_members (category_id, name, role, sort_order)
SELECT c.id, m.name, m.role, m.sort_order
FROM team_categories c,
(VALUES
  ('Aditi Upadhyay', 'Sr. Manager, Data Analyst', 0),
  ('Sampath Raj', 'Sr. Executive Data Analyst', 1),
  ('Chandanam Golvi', 'Sr. Executive - Developer', 2),
  ('Diya Gupta', 'Data Analyst Executive', 3)
) AS m(name, role, sort_order)
WHERE c.name = 'AM Technology'
AND NOT EXISTS (SELECT 1 FROM team_members tm JOIN team_categories tc ON tm.category_id = tc.id WHERE tc.name = 'AM Technology');
