import logo from "@/app/public/assets/avatar.png";
import Image from "next/image";
import getVideos from "./../../getVideo";
import MainVideo from "./components/MainVideo";
import SuggestedVideos from "./components/SuggestedVideos";

const videos = await getVideos();

export default function Home({ params }) {
  const { id } = params;
  const foundVideo = videos.find((v) => v.videoId === id);
  const suggestions = videos.filter((v) => v.videoId !== id);

  return (
    <div className="bg-color-bg text-white font-exo container mx-auto px-4 py-4">
      <main className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <MainVideo videoId={foundVideo.videoId} />
          <h1 className="text-2xl font-bold mt-4">{foundVideo.title}</h1>
          <div class="flex items-center space-x-4 mt-2">
            <Image
              height={100}
              width={100}
              src={logo}
              alt="Avatar"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="font-semibold">{foundVideo.channelTitle}</p>
            </div>
            <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
              Subscribe
            </button>
          </div>
        </div>
        <div className="lg:w-1/4">
          <SuggestedVideos videos={suggestions} />
        </div>
      </main>
    </div>
  );
}
