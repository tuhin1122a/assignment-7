import videos from "@/app/data/videos";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; // Generate unique IDs

export async function GET(req) {
  return NextResponse.json(videos);
}

export async function POST(req) {
  try {
    // Read request body as text and parse into JSON
    const bodyText = await req.text();
    let newVideo;

    try {
      // Attempt to parse the text into JSON
      newVideo = JSON.parse(bodyText);
    } catch {
      // If parsing fails, assume form-encoded or plain-text
      const params = new URLSearchParams(bodyText);
      newVideo = Object.fromEntries(params.entries());
    }

    // Validate required fields
    if (!newVideo.title || !newVideo.description) {
      return new Response(JSON.stringify({ error: "Invalid data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Generate a unique ID and add metadata
    newVideo.videoId = uuidv4();
    newVideo.publishTime = new Date().toISOString();

    // Add the new video to the list
    videos.push(newVideo);

    // Respond with status 201 and the new video data
    return new Response(
      JSON.stringify({ message: "Video added successfully!", video: newVideo }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle unexpected errors
    return new Response(
      JSON.stringify({ error: "Something went wrong", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
