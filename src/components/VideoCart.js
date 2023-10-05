import React from "react";

const VideoCart = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg border hover:border-blue-500 hover:scale-105 transition-transform">
      <div className="relative">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Watch Now
          </button>
        </div>
      </div>
      <ul className="mt-2">
        <li className=" font-semibold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-500">
      <VideoCart info={info} />
    </div>
  );
};

export default VideoCart;

