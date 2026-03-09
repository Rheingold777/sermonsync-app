import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const fromNumber = process.env.TWILIO_PHONE_NUMBER;

export async function POST(request: Request) {
  try {
    const { to, message, language } = await request.json();

    if (!to || !message) {
      return NextResponse.json(
        { error: "Phone number and message are required" },
        { status: 400 }
      );
    }

    // Send SMS via Twilio
    const result = await client.messages.create({
      body: message,
      from: fromNumber,
      to: to,
    });

    return NextResponse.json({
      success: true,
      sid: result.sid,
      status: result.status,
    });

  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

// Webhook for delivery status updates
export async function PUT(request: Request) {
  try {
    const data = await request.formData();
    const messageSid = data.get("MessageSid") as string;
    const messageStatus = data.get("MessageStatus") as string;
    
    // TODO: Update message log in database
    console.log(`Message ${messageSid} status: ${messageStatus}`);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
