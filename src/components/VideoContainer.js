import React, { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  if (videos.length === 0) {
    return null;
  }

  return (

    <div className="flex flex-wrap">
      {videos.map(video => <VideoCart key={video.id} info={video} />)}
      {/*<VideoCart info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;



