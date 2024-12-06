import videos from "@/app/data/videos";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const video = videos.find((v) => v.videoId === id);

  if (!video) {
    return new Response("Video not found", { status: 404 });
  }

  return NextResponse.json(video);
}

export async function PATCH(req, { params }) {
  const { id } = params;

  try {
    // Parse the incoming object data
    const updates = await req.json();

    // Validate that only 'title' and 'description' are being updated
    const allowedFields = ["title", "description"];
    const invalidFields = Object.keys(updates).filter(
      (field) => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
      return new Response(
        JSON.stringify({
          error: `Invalid field(s) provided: ${invalidFields.join(", ")}`,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Find the video by ID
    const videoIndex = videos.findIndex((video) => video.videoId === id);

    if (videoIndex === -1) {
      return new Response(JSON.stringify({ error: "Video not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Update the video object
    videos[videoIndex] = {
      ...videos[videoIndex],
      ...updates, // Apply updates
    };

    // Return the updated video object
    return new Response(
      JSON.stringify({
        message: "Video updated successfully!",
        video: videos[videoIndex],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    // Handle unexpected errors
    return new Response(
      JSON.stringify({
        error: "Something went wrong",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
