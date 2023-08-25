import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  // Close Menu
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <div className=''>
        <iframe
          width='1011'
          height='500'
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
      </div>
      <CommentContainer/>
    </div>
  );
};

export default WatchPage;

/* 
 0---------------------NEW-------------------0

 -🎯How we CAN build this WatchPage first read URL Id that will helps us to maintaine page 
 -🎯Why at Beggner Leval my params are empty if if console.log(params)
 -🎯don't you've Question why because it's has not "/"(slash) something this are search params not normal params How do i find out take reff of below

 REF:->🔗✈️https://reactrouter.com/en/main/hooks/use-search-params

 -🎯We've to use this as a useState 
 -🎯while log you'll get URLSearchParams this is browser Native URL Search params
 -🎯with the help of you can querry by searchItem after(?) .get .post like that e.g console.log(searchParams.get()) it'll help you to search what is key over there video key after Question mark ? for that go to 🗃️VideoContainer.js see this Link section 
 ""<Link to={"/watch?🔻v=" + video.id}>""
 -🎯with the help of one we get video id in console
*/
