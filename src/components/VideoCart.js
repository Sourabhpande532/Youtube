import React from "react";

const VideoCart = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;

  return (
    <div>
      <img alt='video' src={snippet.thumbnails.medium.url} />
      <ul>
        <li>{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCart;
