import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

const Shimmer = () => {
    return (
      <div className='flex items-center p-3'>
        <div className='w-[10rem] h-[6rem] bg-gray-300 rounded-xl animate-pulse'></div>
        <div className='ml-3 mb-4'>
          <div className='w-40 h-4 bg-gray-300 rounded animate-pulse mb-1'></div>
          <div className='w-20 h-4 bg-gray-300 rounded animate-pulse mb-1'></div>
          <div className='w-14 h-4 bg-gray-300 rounded animate-pulse mb-1'></div>
          <div className='w-8 h-4 bg-gray-300 rounded animate-pulse'></div>
        </div>
      </div>
    );
  };

const VideoSuggestion = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    showRelatedVideo();
  }, []);

  const showRelatedVideo = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      const json = await response.json();
      console.log(json.items);
      setVideo(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <div className='mb-6'>
      <h2 className='text-xl font-bold mb-4'>Video Suggestions</h2>
      <ul className='max-h-[122.8rem] overflow-y-auto border rounded-lg bg-gray-100'>
        {video && video.length > 0 ? (
          video.map((video) => (
            <li key={video.id}>
              <a
                href={`watch?v=${video.id}`}
                rel='noopener noreferrer'
                className='flex items-center p-3 hover:bg-gray-300 hover:rounded-2xl'>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt=''
                  className='w-25 h-[6rem] object-cover rounded'
                />
                <div className='ml-3'>
                  <p className='text-sm font-bold text-gray-800'>
                    {video.snippet.title}
                  </p>
                  <p className='text-sm text-gray-600'>
                    {video.snippet.channelTitle}
                  </p>
                </div>
              </a>
            </li>
          ))
        ) : (
          // If no video have been loaded yet, show a shimmer effect to indicate that data is loading
          <div className='p-3 text-gray-600'>
            {Array.from({ length: 20 }).map((_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        )}
      </ul>
    </div>
  )
};

export default VideoSuggestion;
