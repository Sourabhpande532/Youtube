import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import store from "../utils/store";
import { cacheResult } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);
  /*store.search gives you empty Object & it's combo of SearchKey+APISuggestion @NOTE:setRedux here with value*/

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    // REMOVE TIMER
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestion(json[1]);

      // update cache
      dispatch(
        cacheResult({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      // Handle the error gracefully
      console.error("An error occurred:", error);
    }
  };

  // TOGGLE
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = () => {
    // Navigate to the Result page with the search query as a URL parameter
    navigate(`/result?query=${searchQuery}`);
    setSerachQuery("")
  };

  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          alt='hamburgar Menu'
          className='h-12 cursor-pointer'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCPeKKh16BRGc_u26mayGXzV228CeLi3K-slQuvZhbRvBwAxvricRQRNV88LDJkc9rJs&usqp=CAU'
        />
        <a href='/'>
          <img
            alt='Youtube'
            className='h-12 mx-2'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png'
          />
        </a>
      </div>
      <div className='col-span-10 px-12 p-4'>
        <div>
          <input
            className='w-1/2 border border-gray-300 rounded-l-full'
            type='text'
            value={searchQuery}
            onChange={(e) => setSerachQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className='border border-gray-400 bg-gray-200 rounded-r-full w-10' onClick={handleSearch}>
            🔎
          </button>
        </div>
        <div className='absolute bg-white py-1 px-2 w-[25rem] rounded-lg  mt-2 z-10'>
          <ul>
            {showSuggestion &&
              suggestion.map((s) => (
                <li
                  key={s}
                  className='py-2 px-2 shadow-sm hover:bg-gray-100'
                  onClick={() => {
                    navigate(`/result?query=${s}`);
                  }}>
                  🔎 {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className='col-span-1'>
        <img
          className='h-12'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBE57bRxs00n86wy61CTOdCnBAs8AFZOsOThZz4Q&s'
          alt='user'
        />
      </div>
    </div>
  );
};

export default Header;

/* DEVELOPE LRU CACHE (H.W)
REF: 🔗✈️https://youtu.be/xDEuM5qa0zg?si=HLIrBYjFBsviI3YX
-Least Recently Used (LRU) is one of those DSA algorithms.
-It Basically Come Under the Hood of DSA 
-With the help of One we can Restrict Our Cache to stored only 100 keys [100] If more than that Remove from it Top! While BUILDING SEARCH BAR
-As soon as The object length is increase more than 100 start removing from Top
-It is Special Storage 
-It's is Separate Storage  */
