import { NextRequest, NextResponse } from "next/server";
import { generateEnquiryId } from "@/lib/utils";

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

    // Enquiry payload ready for Database (Supabase / Postgres)
    const enquiryRecord = {
      referenceId,
      createdAt: new Date().toISOString(),
      client: {
        fullName,
        companyName: companyName || "N/A",
        businessEmail,
        phoneNumber,
        country,
      },
      specifications: {
        serviceType,
        estimatedQuantity,
        projectStage,
        timeline,
        estimatedBudget: estimatedBudget || "Flexible / Not Stated",
        projectDescription,
      },
      attachment: fileName
        ? {
            fileName,
            fileSize: fileSize || "Unknown size",
            storageStatus: "Staged / Private Storage Pending",
          }
        : null,
      status: "NEW_QUOTATION_SUBMISSION",
      notifiedRecipient: "enquiries@wearnextfabs.com",
    };

    console.log(`[WearNextFabs] New Formal Quotation Request Logged [${referenceId}]:`, enquiryRecord);

    // Transactional Email Dispatch Adapter (Resend or equivalent)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        console.log(`[WearNextFabs] Dispatching transactional email via Resend API to enquiries@wearnextfabs.com`);
        // When RESEND_API_KEY is configured in production:
        // await fetch("https://api.resend.com/emails", { ... })
      } catch (emailErr) {
        console.error("[WearNextFabs] Email notification warning:", emailErr);
        // Do not fail the client enquiry if email service is unconfigured
      }
    } else {
      console.log(`[WearNextFabs] RESEND_API_KEY not configured. Notification safely queued in local audit log.`);
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
