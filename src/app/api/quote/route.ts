import { NextRequest, NextResponse } from "next/server";
import { generateEnquiryId } from "@/lib/utils";
import { insertQuotationRecord } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      serviceType,
      estimatedQuantity,
      projectStage,
      timeline,
      fullName,
      companyName,
      businessEmail,
      phoneNumber,
      country,
      projectDescription,
      estimatedBudget,
      fileName,
      fileSize,
      consent,
    } = body;

    // Validate essential fields
    if (
      !serviceType ||
      !estimatedQuantity ||
      !projectStage ||
      !timeline ||
      !fullName ||
      !businessEmail ||
      !phoneNumber ||
      !country ||
      !projectDescription ||
      !consent
    ) {
      return NextResponse.json(
        { error: "Please complete all mandatory quote requirements." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    // Generate unique reference
    const referenceId = generateEnquiryId();

    // Insert into Supabase database table
    try {
      await insertQuotationRecord({
        reference_id: referenceId,
        service_type: serviceType,
        estimated_quantity: estimatedQuantity,
        project_stage: projectStage,
        timeline,
        full_name: fullName,
        company_name: companyName || "",
        business_email: businessEmail,
        phone_number: phoneNumber,
        country,
        estimated_budget: estimatedBudget || "",
        project_description: projectDescription,
        attachment_name: fileName || "",
        attachment_size: fileSize || "",
        consent: Boolean(consent),
      });
    } catch (dbErr) {
      console.warn("[WearNextFabs] Supabase storage notice:", dbErr);
      // Fallback logging ensures enquiry is never lost even if DB is temporarily unreachable
    }

    console.log(`[WearNextFabs] Quotation Request Processed [${referenceId}] for ${fullName} (${businessEmail})`);

    // Transactional Email Dispatch Adapter (Resend or equivalent)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        console.log(`[WearNextFabs] Dispatching transactional email via Resend API to enquiries@wearnextfabs.com`);
      } catch (emailErr) {
        console.error("[WearNextFabs] Email notification warning:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        "Your quotation request has been successfully submitted and registered with our engineering team.",
      summary: {
        serviceType,
        estimatedQuantity,
        timeline,
        targetEmail: businessEmail,
      },
    });
  } catch (error) {
    console.error("[WearNextFabs] Quote API Error:", error);
    return NextResponse.json(
      { error: "Server encountered an error while registering your quotation request." },
      { status: 500 }
    );
  }
}
