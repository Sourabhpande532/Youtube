import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import Shimmer from "./Shimmer";

const Result = () => {
  /* DEMONSTRATE ON UI */
  const [searchResultVideo, setSearchResultVideo] = useState([]);

  /* CHECK QUERRY STRING CURRENT POSITION ON URL THAT YOU SEARCH */
  const [searchQuerryViaSearchBar] = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  /* USE EFFECT FOR PRELOAD DATA */
  useEffect(() => {
    getSearchResultVideo();
  }, [searchQuerryViaSearchBar]);

  /*API : BRING FOR DEMONSTRATE ON UI*/
  const getSearchQueryUrlApi = (query) => {
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${GOOGLE_API_KEY}`;
  };

  /* CALL FUNCTION */
  const getSearchResultVideo = async () => {
    try {
      const data = await fetch(getSearchQueryUrlApi(searchQuerryViaSearchBar));
      const json = await data.json();
      console.log(json);
      // console.log(json.items);
      setSearchResultVideo(json.items);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className='flex flex-wrap mx-auto items-center justify-center h-screen overflow-y-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6'>
        {searchResultVideo && searchResultVideo.length > 0 ? (
          searchResultVideo.map((video) => {
            const { title, description, thumbnails, channelTitle, statistics } =
              video.snippet;
            return (
              <Link
                to={`/watch?v=${video?.id?.videoId}`}
                key={video?.id?.videoId}
                className='max-w-[18rem] rounded-xl overflow-hidden shadow-2xl m-4 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'>
                <div className='relative'>
                  <img
                    className='w-full h-40 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105'
                    src={thumbnails.medium.url}
                    alt={title}
                  />
                  <div className='absolute inset-0 bg-gray-800 opacity-25 hover:opacity-0 transition-opacity duration-500 ease-in-out'></div>
                  <div className='absolute inset-0 flex items-center justify-center text-white font-bold text- uppercase opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                    <span className=' cursor-pointer'>
                      <i className='fa-solid fa-play'></i> Play Video
                    </span>
                  </div>
                </div>
                <div className='px-4 py-2'>
                  <div className='font-bold text-base mb-1 truncate'>
                    {title}
                  </div>
                  <p className='text-gray-600 text-sm mb-2 truncate'>
                    {description}
                  </p>
                  <div className='flex items-center'>
                    <img
                      className='w-8 h-8 rounded-full mr-2'
                      src={thumbnails.default.url}
                      alt=''
                    />
                    <div className='text-sm'>
                      <p className='text-gray-900 leading-none mb-1 truncate'>
                        {channelTitle}
                      </p>
                      <p className='text-gray-600 truncate'>
                        {statistics?.subscriberCount} subscribers
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div> No Result found </div>
        )}
      </div>
    </div>
  );
};

export default Result;
