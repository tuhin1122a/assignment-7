import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ src, title, streamer, id }) => {
  return (
    <>
      <Link href={`/videos/${id}`}>
        <div className="rounded-lg overflow-hidden bg-color-gray">
          <Image
            src={src}
            alt={title}
            width={320}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-2">
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-400">{streamer}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
