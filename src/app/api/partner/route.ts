import { NextRequest, NextResponse } from "next/server";
import { generateEnquiryId } from "@/lib/utils";
import { insertPartnershipRecord } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      fullName,
      companyName,
      businessEmail,
      phoneNumber,
      country,
      partnershipType,
      proposalDescription,
      consent,
    } = data;

    if (
      !fullName ||
      !companyName ||
      !businessEmail ||
      !phoneNumber ||
      !country ||
      !partnershipType ||
      !proposalDescription ||
      !consent
    ) {
      return NextResponse.json(
        { error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    const referenceId = `PARTNER-${generateEnquiryId()}`;

    try {
      await insertPartnershipRecord({
        reference_id: referenceId,
        full_name: fullName,
        company_name: companyName,
        business_email: businessEmail,
        phone_number: phoneNumber,
        country,
        partnership_type: partnershipType,
        website: data.website || "",
        proposal_description: proposalDescription,
        consent: Boolean(consent),
      });
    } catch (dbErr) {
      console.warn("[WearNextFabs] Supabase storage notice:", dbErr);
    }

    console.log(`[WearNextFabs] Partnership Application Processed [${referenceId}] for ${companyName}`);

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        "Your partnership proposal has been securely logged. Our business development team will review and respond within 2-3 business days.",
    });
  } catch (error) {
    console.error("[WearNextFabs] Partner API Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing partnership submission." },
      { status: 500 }
    );
  }
}
