import React, { useEffect, useState } from "react";
import VideoCart, { AdVideoCard } from "./VideoCart";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      // console.log(json);
      console.log(json.items);
      setVideos(json.items);
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching videos:", error);
      setIsLoading(false);
    }
  };

  // Early Return
  if (isLoading) {
    return <Shimmer/>;
  }

  if(!Array.isArray(videos) || videos.length === 0){
    return <div>No Video Available</div>
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {videos[0] && <AdVideoCard info={videos[0]} />}
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
