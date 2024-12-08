"use client";

import Image from "next/image";
import Link from "next/link";

const SuggestedVideos = ({ videos }) => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">You may like</h2>
      <div className="space-y-4">
        {videos.map((video, index) => (
          <Link key={index} href={`/videos/${video.videoId}`}>
            <div className="flex items-start space-x-4" key={index}>
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={120}
                height={80}
                className="w-30 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.channelTitle}</p>
                <p className="text-sm text-gray-400">{video.views}M</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SuggestedVideos;
