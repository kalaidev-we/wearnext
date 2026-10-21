import { NextRequest, NextResponse } from "next/server";
import { generateEnquiryId } from "@/lib/utils";
import { insertContactRecord } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, email, phone, subject, message, consent } = data;

    if (!name || !email || !subject || !message || !consent) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const referenceId = `CONTACT-${generateEnquiryId()}`;

    try {
      await insertContactRecord({
        reference_id: referenceId,
        name,
        email,
        phone: phone || "",
        subject,
        message,
        consent: Boolean(consent),
      });
    } catch (dbErr) {
      console.warn("[WearNextFabs] Supabase contact storage notice:", dbErr);
    }

    console.log(`[WearNextFabs] Contact Form Message Processed [${referenceId}] from ${name} (${email})`);

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        "Thank you for contacting WearNextFabs. Your message has been received and our team will get back to you shortly.",
    });
  } catch (error) {
    console.error("[WearNextFabs] Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while sending your message." },
      { status: 500 }
    );
  }
}
