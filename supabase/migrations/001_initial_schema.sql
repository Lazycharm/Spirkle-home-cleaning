-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Site Config Table (for key-value configs like site, contact)
CREATE TABLE IF NOT EXISTS site_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  price TEXT NOT NULL,
  duration TEXT NOT NULL,
  image TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pricing Plans Table
CREATE TABLE IF NOT EXISTS pricing_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  frequency TEXT NOT NULL,
  discount TEXT NOT NULL,
  description TEXT NOT NULL,
  highlight BOOLEAN DEFAULT FALSE,
  badge TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Addons Table
CREATE TABLE IF NOT EXISTS addons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- FAQs Table
CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  avatar TEXT NOT NULL,
  text TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- How It Works Table
CREATE TABLE IF NOT EXISTS how_it_works (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trust Points Table
CREATE TABLE IF NOT EXISTS trust_points (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_site_config_key ON site_config(key);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(order_index);
CREATE INDEX IF NOT EXISTS idx_pricing_plans_order ON pricing_plans(order_index);
CREATE INDEX IF NOT EXISTS idx_addons_order ON addons(order_index);
CREATE INDEX IF NOT EXISTS idx_faqs_order ON faqs(order_index);
CREATE INDEX IF NOT EXISTS idx_testimonials_order ON testimonials(order_index);
CREATE INDEX IF NOT EXISTS idx_how_it_works_order ON how_it_works(order_index);
CREATE INDEX IF NOT EXISTS idx_trust_points_order ON trust_points(order_index);

-- Enable Row Level Security (RLS)
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE addons ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE how_it_works ENABLE ROW LEVEL SECURITY;
ALTER TABLE trust_points ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access" ON site_config FOR SELECT USING (true);
CREATE POLICY "Public read access" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access" ON pricing_plans FOR SELECT USING (true);
CREATE POLICY "Public read access" ON addons FOR SELECT USING (true);
CREATE POLICY "Public read access" ON faqs FOR SELECT USING (true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read access" ON how_it_works FOR SELECT USING (true);
CREATE POLICY "Public read access" ON trust_points FOR SELECT USING (true);

-- Create policies for authenticated write access (you can restrict this further)
-- For now, allowing all authenticated users - you should add proper auth later
CREATE POLICY "Authenticated write access" ON site_config FOR ALL USING (true);
CREATE POLICY "Authenticated write access" ON services FOR ALL USING (true);
CREATE POLICY "Authenticated write access" ON pricing_plans FOR ALL USING (true);
CREATE POLICY "Authenticated write access" ON addons FOR ALL USING (true);
CREATE POLICY "Authenticated write access" ON faqs FOR ALL USING (true);
CREATE POLICY "Authenticated write access" ON testimonials FOR ALL USING (true);
CREATE POLICY "Authenticated write access" ON how_it_works FOR ALL USING (true);
CREATE POLICY "Authenticated write access" ON trust_points FOR ALL USING (true);
