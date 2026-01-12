-- Seed data for initial setup
-- This will populate the database with default values from config files

-- Insert default services
INSERT INTO services (id, title, price, duration, image, features, order_index) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Studio Apartment', 'AED 80', '1-2 hours', 'clean-modern-studio-apartment-bright-interior-mini.jpg', ARRAY['Full floor mopping & vacuuming', 'Kitchen cleaning & countertops', 'Bathroom deep clean', 'Dusting all surfaces', 'Trash removal'], 0),
  ('00000000-0000-0000-0000-000000000002', '1 Bedroom Apartment', 'AED 120', '2-3 hours', 'clean-one-bedroom-apartment-modern-living-room-bri.jpg', ARRAY['All rooms floor cleaning', 'Kitchen deep clean', 'Bathroom sanitization', 'Dusting & surface wipe', 'Bed making', 'Trash removal'], 1),
  ('00000000-0000-0000-0000-000000000003', '2 Bedroom Apartment', 'AED 160', '3-4 hours', 'clean-two-bedroom-apartment-spacious-modern-interi.jpg', ARRAY['All rooms floor cleaning', 'Kitchen deep clean', 'All bathrooms sanitized', 'Dusting all surfaces', 'Bed making', 'Trash removal'], 2)
ON CONFLICT (id) DO NOTHING;

-- Insert default pricing plans
INSERT INTO pricing_plans (id, title, frequency, discount, description, highlight, badge, order_index) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Weekly Plan', '4 visits/month', '15% OFF', 'Best for busy professionals who want a consistently clean home', false, NULL, 0),
  ('00000000-0000-0000-0000-000000000002', 'Bi-Weekly Plan', '2 visits/month', '10% OFF', 'Perfect balance of cleanliness and value for most families', true, 'Best Value', 1),
  ('00000000-0000-0000-0000-000000000003', 'Monthly Plan', '1 visit/month', '5% OFF', 'Great for maintaining a tidy home with occasional deep cleans', false, NULL, 2)
ON CONFLICT (id) DO NOTHING;

-- Insert default addons
INSERT INTO addons (id, title, price, description, icon_name, order_index) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Fridge Cleaning', '+AED 30', 'Deep clean inside & out', 'Refrigerator', 0),
  ('00000000-0000-0000-0000-000000000002', 'Oven Cleaning', '+AED 40', 'Remove grease & buildup', 'Flame', 1),
  ('00000000-0000-0000-0000-000000000003', 'Balcony Cleaning', '+AED 25', 'Sweep, mop & organize', 'Sun', 2),
  ('00000000-0000-0000-0000-000000000004', 'Ironing Service', '+AED 35', 'Up to 10 garments', 'Shirt', 3)
ON CONFLICT (id) DO NOTHING;

-- Insert default FAQs
INSERT INTO faqs (id, question, answer, order_index) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Do I need to be home during the cleaning?', 'No, you don''t have to be home. Many of our clients give us access and we clean while they''re at work. We take security very seriously and can discuss key handover arrangements.', 0),
  ('00000000-0000-0000-0000-000000000002', 'Do you bring your own cleaning supplies?', 'Yes! We bring all necessary cleaning products and equipment. We use safe, eco-friendly products. If you prefer us to use specific products you have at home, just let us know.', 1),
  ('00000000-0000-0000-0000-000000000003', 'How do I pay for the cleaning service?', 'We accept cash payment after the service is completed. We also accept bank transfers. Payment is due after you''re satisfied with the cleaning.', 2),
  ('00000000-0000-0000-0000-000000000004', 'Can I reschedule or cancel my booking?', 'Yes, we understand plans change. Please let us know at least 24 hours in advance via WhatsApp, and we''ll reschedule at no extra charge.', 3),
  ('00000000-0000-0000-0000-000000000005', 'Are monthly plans discounted?', 'Yes! Our recurring plans offer savings of 5-15% depending on frequency. Weekly plans get the biggest discount. Plus, you get the same trusted cleaner every visit.', 4),
  ('00000000-0000-0000-0000-000000000006', 'What areas do you service?', 'We primarily serve City Tower and nearby buildings in Ajman. If you''re in the area, send us a message and we''ll confirm if we can reach you.', 5)
ON CONFLICT (id) DO NOTHING;

-- Insert default testimonials
INSERT INTO testimonials (id, name, location, avatar, text, order_index) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Amina K.', 'City Tower, Floor 12', 'professional-woman-portrait-smiling-arab.jpg', 'They treat my home like their own. So professional and thorough every single time. Highly recommend!', 0),
  ('00000000-0000-0000-0000-000000000002', 'Mohammed R.', 'City Tower, Floor 8', 'professional-man-portrait-smiling-arab-businessman.jpg', 'As a busy professional, having a reliable cleaning service is essential. Sparkle Clean never disappoints.', 1),
  ('00000000-0000-0000-0000-000000000003', 'Fatima A.', 'Nearby Building', 'professional-woman-portrait-hijab-smiling-friendly.jpg', 'I love that I can request a female cleaner. They''re always on time and my apartment looks amazing after.', 2)
ON CONFLICT (id) DO NOTHING;

-- Insert default how it works steps
INSERT INTO how_it_works (id, title, description, icon_name, order_index) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Scan QR or Visit Website', 'Use our QR code or visit our website to see services and pricing', 'QrCode', 0),
  ('00000000-0000-0000-0000-000000000002', 'Book via WhatsApp', 'Send us a message with your apartment details and preferred time', 'MessageCircle', 1),
  ('00000000-0000-0000-0000-000000000003', 'Relax While We Clean', 'Our trusted team arrives on time and leaves your home sparkling', 'Sparkles', 2)
ON CONFLICT (id) DO NOTHING;

-- Insert default trust points
INSERT INTO trust_points (id, title, description, icon_name, order_index) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Female Cleaner Available', 'Request a female cleaner for your comfort and peace of mind', 'UserCheck', 0),
  ('00000000-0000-0000-0000-000000000002', 'Family-Run Business', 'We''re a husband and wife team who care about our community', 'Users', 1),
  ('00000000-0000-0000-0000-000000000003', 'Respect for Privacy', 'Your belongings and personal space are always treated with care', 'Lock', 2),
  ('00000000-0000-0000-0000-000000000004', 'Safe Cleaning Products', 'We use eco-friendly, non-toxic products safe for families and pets', 'Leaf', 3),
  ('00000000-0000-0000-0000-000000000005', 'Satisfaction Guaranteed', 'Not happy? We''ll re-clean for free or refund your payment', 'ShieldCheck', 4),
  ('00000000-0000-0000-0000-000000000006', 'Trusted by Neighbors', 'Proudly serving City Tower residents with care and dedication', 'Heart', 5)
ON CONFLICT (id) DO NOTHING;

-- Insert default site config
INSERT INTO site_config (key, value) VALUES
  ('site', '{
    "businessName": "Sparkle Clean",
    "tagline": "Your trusted, family-run apartment cleaning service",
    "location": {
      "city": "Ajman",
      "area": "City Tower",
      "fullAddress": "City Tower, Ajman, UAE",
      "serviceArea": "City Tower & Nearby Buildings"
    },
    "hero": {
      "title": "Premium Apartment Cleaning in",
      "titleHighlight": "City Tower, Ajman",
      "description": "Your trusted, family-run cleaning service. We bring sparkle to your home with care, respect, and attention to every detail.",
      "badge": {
        "text": "Serving City Tower & Nearby Buildings",
        "show": true
      },
      "stats": [
        {"value": "500+", "label": "Happy Homes"},
        {"value": "5 Star", "label": "Rating"},
        {"value": "2 Years", "label": "Experience"}
      ],
      "cta": {
        "primary": {"text": "Book on WhatsApp"},
        "secondary": {"text": "See Pricing", "href": "#pricing"}
      }
    },
    "seo": {
      "title": "Sparkle Clean Ajman | Trusted Apartment Cleaning in City Tower",
      "description": "Professional, family-run apartment cleaning service in City Tower, Ajman. Reliable, female-friendly, and satisfaction guaranteed. Book via WhatsApp today!"
    }
  }'::jsonb),
  ('contact', '{
    "whatsapp": {
      "number": "971XXXXXXXXX",
      "defaultMessage": "Hello! I''d like to book a cleaning service.",
      "displayNumber": "+971 XX XXX XXXX"
    },
    "hours": {
      "weekdays": "Sat–Thu: 8AM–8PM",
      "display": "8:00 AM - 8:00 PM"
    },
    "serviceArea": {
      "primary": "City Tower & Nearby, Ajman",
      "description": "We primarily serve City Tower and nearby buildings in Ajman."
    },
    "contactSection": {
      "title": "Get In Touch",
      "description": "Ready to book or have questions? We''re here to help!",
      "trustMessage": "We''re your neighbors — based right here in City Tower. We understand your needs and treat every home like our own.",
      "cta": {"text": "Message Us Now"}
    }
  }'::jsonb)
ON CONFLICT (key) DO NOTHING;
