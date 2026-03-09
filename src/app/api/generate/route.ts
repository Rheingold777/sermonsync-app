import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { notes, pastorName, churchName } = await request.json();

    if (!notes) {
      return NextResponse.json(
        { error: "Sermon notes are required" },
        { status: 400 }
      );
    }

    // Generate English recap
    const englishResponse = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `You are helping ${pastorName || "a pastor"} from ${churchName || "their church"} write a personal text message to their congregation.

Based on these sermon notes, write a warm, personal recap that:
- Sounds like it's coming directly from the pastor
- Is 2-3 short paragraphs (under 400 characters for SMS)
- Includes one key takeaway or action item
- Feels personal, not corporate
- Ends with encouragement
- Do NOT include "Reply STOP to unsubscribe" or similar

Sermon Notes:
${notes}

Write the recap as if the pastor is texting their congregation Monday morning. Start with "Good morning" or similar greeting.`
        }
      ],
    });

    const recapEn = englishResponse.content[0].type === "text" 
      ? englishResponse.content[0].text 
      : "";

    // Generate Spanish recap
    const spanishResponse = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `Translate this church text message recap into Spanish. Keep the same warm, personal tone. Keep it under 400 characters. Do NOT add "Responde STOP para cancelar" or similar.

${recapEn}`
        }
      ],
    });

    const recapEs = spanishResponse.content[0].type === "text"
      ? spanishResponse.content[0].text
      : "";

    return NextResponse.json({
      recap_en: recapEn,
      recap_es: recapEs,
    });

  } catch (error) {
    console.error("Error generating recap:", error);
    return NextResponse.json(
      { error: "Failed to generate recap" },
      { status: 500 }
    );
  }
}
