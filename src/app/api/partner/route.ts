import { NextRequest, NextResponse } from "next/server";
import { generateEnquiryId } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
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

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    // Generate unique partnership reference ID
    const referenceId = `PARTNER-${generateEnquiryId()}`;

    // Log structured submission (Ready to connect to Supabase/PostgreSQL/Resend)
    console.log(`[WearNextFabs] Partnership Application Received [${referenceId}]:`, {
      fullName,
      companyName,
      businessEmail,
      phoneNumber,
      country,
      partnershipType,
      website: data.website || "N/A",
      proposalDescription,
      timestamp: new Date().toISOString(),
    });

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
