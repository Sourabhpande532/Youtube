import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    // REMOVE TIMER 
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);



  const getSearchSuggestion = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    // console.log(json);
  };

  // TOGGLE
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
          <button className='border border-gray-400 bg-gray-200 rounded-r-full w-10'>
            🔎
          </button>
        </div>
        <div className=' fixed bg-white py-1 px-2 w-[25rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {showSuggestion &&
              suggestion.map((s) => (
                <li key={s} className='py-2 px-2 shadow-sm hover:bg-gray-100'>
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
