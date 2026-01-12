# Supabase Setup Guide

This guide will help you set up Supabase for your admin dashboard and connect it to your Next.js application.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Node.js installed
- Your project cloned locally

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Fill in your project details:
   - Name: `sparkle-clean` (or your preferred name)
   - Database Password: (save this securely)
   - Region: Choose closest to your users
4. Wait for the project to be created (takes ~2 minutes)

## Step 2: Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")
   - **service_role key** (under "Project API keys" - keep this secret!)

## Step 3: Run Database Migrations

### Option A: Using Supabase Dashboard (Recommended)

1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New Query**
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Click **Run** (or press Ctrl+Enter)
5. Wait for the migration to complete

### Option B: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

## Step 4: Seed Initial Data

1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New Query**
3. Copy and paste the contents of `supabase/seed.sql`
4. Click **Run**
5. Verify data was inserted by checking the tables

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Important**: Never commit `.env.local` to git!

## Step 6: Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/admin`
3. Try editing and saving some content
4. Check your Supabase dashboard → **Table Editor** to verify data is being saved

## Step 7: Configure Netlify Deployment

### Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variables:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (keep secret!)
   - `NEXT_PUBLIC_SITE_URL` - Your Netlify site URL (e.g., `https://your-site.netlify.app`)

### Build Settings

Netlify should automatically detect Next.js from `netlify.toml`. If not:

1. Go to **Site settings** → **Build & deploy**
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `.next`

## Security Notes

⚠️ **Important Security Considerations:**

1. **Service Role Key**: The `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security (RLS). Only use it in server-side API routes with proper authentication.

2. **RLS Policies**: The current setup allows public read access and authenticated write access. For production:
   - Add proper authentication (e.g., Supabase Auth)
   - Restrict write access to admin users only
   - Consider using API keys or JWT tokens for admin operations

3. **Environment Variables**: Never expose your service role key in client-side code or commit it to git.

## Troubleshooting

### Database Connection Issues

- Verify your Supabase URL and keys are correct
- Check that your Supabase project is active
- Ensure migrations have been run successfully

### API Route Errors

- Check browser console for errors
- Verify environment variables are set correctly
- Check Supabase dashboard → **Logs** for database errors

### Data Not Appearing

- Verify seed data was inserted correctly
- Check that RLS policies allow read access
- Verify API routes are returning data correctly

## Next Steps

1. **Add Authentication**: Implement Supabase Auth for admin access
2. **Add Image Upload**: Set up Supabase Storage for image uploads
3. **Add Analytics**: Track admin usage and content changes
4. **Backup Strategy**: Set up regular database backups in Supabase

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Check Next.js documentation: https://nextjs.org/docs
- Review the API routes in `app/api/` directory
