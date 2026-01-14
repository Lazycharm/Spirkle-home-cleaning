# Bloom & Broom - Home Cleaning Service Website

A modern, responsive Next.js website for a home cleaning service business with a fully integrated admin dashboard powered by Supabase.

## Features

- 🏠 **Modern Landing Page** - Beautiful, responsive design with smooth animations
- 📱 **Mobile-First** - Optimized for all devices
- 🎨 **Admin Dashboard** - Full content management system at `/admin`
- 💾 **Supabase Integration** - All content stored in Supabase database
- 🚀 **Netlify Ready** - Pre-configured for Netlify deployment
- ⚡ **Fast Performance** - Built with Next.js 16 and optimized for speed

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Spirkle-home-cleaning
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Supabase**
   - Follow the detailed guide in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
   - Create a Supabase project
   - Run the database migrations
   - Seed initial data

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Website: http://localhost:3000
   - Admin Dashboard: http://localhost:3000/admin

## Project Structure

```
├── app/
│   ├── admin/              # Admin dashboard pages
│   ├── api/                 # API routes for Supabase
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── admin/              # Admin form components
│   ├── ui/                 # Reusable UI components
│   └── [sections]/         # Page section components
├── config/                 # Default config files (fallback)
├── lib/
│   ├── supabase/          # Supabase client utilities
│   ├── hooks/             # Custom React hooks
│   └── data-fetcher.ts    # Data fetching utilities
├── supabase/
│   ├── migrations/        # Database migrations
│   └── seed.sql          # Initial data seeding
└── public/                # Static assets

```

## Admin Dashboard

The admin dashboard allows you to manage all website content:

- **Site Configuration** - Business info, hero section, SEO
- **Services** - Cleaning packages and pricing
- **Pricing Plans** - Recurring plans and discounts
- **Add-ons** - Optional services
- **Contact** - WhatsApp, hours, service area
- **FAQ** - Frequently asked questions
- **Testimonials** - Customer reviews
- **How It Works** - Booking process steps
- **Trust & Safety** - Trust points and features

Access the admin at `/admin` - all changes are automatically saved to Supabase.

## Deployment

### Netlify Deployment

1. **Push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Netlify will auto-detect Next.js settings

3. **Configure Environment Variables**
   - Go to Site settings → Environment variables
   - Add all variables from `.env.example`
   - Set `NEXT_PUBLIC_SITE_URL` to your Netlify URL

4. **Deploy**
   - Netlify will automatically build and deploy
   - Your site will be live at `https://your-site.netlify.app`

### Environment Variables for Production

Make sure to set these in Netlify:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)
- `NEXT_PUBLIC_SITE_URL` (your Netlify URL)

## Database Schema

The Supabase database includes the following tables:

- `site_config` - Key-value config storage
- `services` - Cleaning service packages
- `pricing_plans` - Recurring pricing plans
- `addons` - Add-on services
- `faqs` - Frequently asked questions
- `testimonials` - Customer testimonials
- `how_it_works` - Booking process steps
- `trust_points` - Trust and safety features

See `supabase/migrations/001_initial_schema.sql` for the full schema.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Content Types

1. Create a new table in Supabase
2. Add migration in `supabase/migrations/`
3. Create API route in `app/api/[type]/route.ts`
4. Create admin form in `components/admin/[type]-form.tsx`
5. Add to admin dashboard tabs

## Security Notes

⚠️ **Important Security Considerations:**

1. **Service Role Key**: Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code
2. **RLS Policies**: Current setup allows public read access. For production, add proper authentication
3. **Environment Variables**: Never commit `.env.local` to git
4. **Admin Access**: Consider adding authentication to `/admin` route

## Troubleshooting

### Database Connection Issues
- Verify Supabase credentials in `.env.local`
- Check that migrations have been run
- Verify RLS policies allow access

### API Route Errors
- Check browser console for errors
- Verify environment variables are set
- Check Supabase dashboard logs

### Build Errors
- Ensure all dependencies are installed
- Check Node.js version (18+)
- Verify TypeScript types are correct

## Support

For issues or questions:
- Check [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for database setup
- Review API routes in `app/api/`
- Check Supabase documentation: https://supabase.com/docs
- Check Next.js documentation: https://nextjs.org/docs

## License

This project is private and proprietary.
