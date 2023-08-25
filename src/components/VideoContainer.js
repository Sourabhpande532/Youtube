import React, { useEffect, useState } from "react";
import VideoCart, { AdVideoCard } from "./VideoCart";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  // Early Return 
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className='flex flex-wrap'>
     {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCart key={video.id} info={video} />
        </Link>
      ))}
      {/*<VideoCart info={videos[0]} /> 
       @NOTE: Always Demo with one*/}
    </div>
  );
};

export default VideoContainer;
