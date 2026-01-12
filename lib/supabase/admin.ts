/**
 * Admin Supabase Client
 * Uses service role key for admin operations (bypasses RLS)
 * Only use this in server-side API routes with proper authentication
 */

import { createClient } from "@supabase/supabase-js"

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable")
}

export const adminClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
