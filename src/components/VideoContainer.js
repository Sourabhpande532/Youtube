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
      if (!data.ok) {
        throw new Error(`API request failed with status: ${data.status}`);
      }
      const json = await data.json();
      console.log(json.items);
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  return (
    <div>
      <h1>
      <VideoCart info={videos[0]}/>
      </h1>
    </div>
  );
};

export default VideoContainer;
