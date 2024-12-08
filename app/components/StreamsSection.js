import getVideos from "@/app/getVideo";
import VideoCard from "./VideoCard";
const allVideos = await getVideos();

const StreamsSection = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allVideos.length > 0 ? (
          allVideos.map((video) => (
            <VideoCard
              key={video.videoId}
              src={video.thumbnail}
              title={video.title}
              streamer={video.channelTitle}
              id={video.videoId}
            />
          ))
        ) : (
          <p className="col-span-4 text-gray-400">No videos found.</p>
        )}
      </div>
    </section>
  );
};

export default StreamsSection;
