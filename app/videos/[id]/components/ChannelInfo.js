import Image from "next/image";

export default function ChannelInfo({ channel }) {
  return (
    <div className="flex items-center space-x-4 mt-2">
      <Image
        height={100}
        width={100}
        src="/assets/avatar.png" // Use a placeholder avatar for now
        alt="Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-semibold">{channel}</p>
      </div>
      <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
        Subscribe
      </button>
    </div>
  );
}
