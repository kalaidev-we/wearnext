import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;

export async function insertQuotationRecord(record: {
  reference_id: string;
  service_type: string;
  estimated_quantity: string;
  project_stage: string;
  timeline: string;
  full_name: string;
  company_name?: string;
  business_email: string;
  phone_number: string;
  country: string;
  estimated_budget?: string;
  project_description: string;
  attachment_name?: string;
  attachment_size?: string;
  consent: boolean;
}) {
  if (!supabase) {
    console.log("[Supabase] Credentials not configured in .env.local; skipping remote database insert.");
    return { success: true, simulated: true };
  }

  const { data, error } = await supabase.from("quotations").insert([record]).select();

  if (error) {
    console.error("[Supabase] Quotation insert error:", error);
    throw error;
  }

  return { success: true, data };
}

export async function insertPartnershipRecord(record: {
  reference_id: string;
  full_name: string;
  company_name: string;
  business_email: string;
  phone_number: string;
  country: string;
  partnership_type: string;
  website?: string;
  proposal_description: string;
  consent: boolean;
}) {
  if (!supabase) {
    console.log("[Supabase] Credentials not configured in .env.local; skipping remote database insert.");
    return { success: true, simulated: true };
  }

  const { data, error } = await supabase.from("partnerships").insert([record]).select();

  if (error) {
    console.error("[Supabase] Partnership insert error:", error);
    throw error;
  }

  return { success: true, data };
}

export async function insertContactRecord(record: {
  reference_id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  consent: boolean;
}) {
  if (!supabase) {
    console.log("[Supabase] Credentials not configured in .env.local; skipping remote database insert.");
    return { success: true, simulated: true };
  }

  const { data, error } = await supabase.from("contact_inquiries").insert([record]).select();

  if (error) {
    console.error("[Supabase] Contact inquiry insert error:", error);
    throw error;
  }

  return { success: true, data };
}
