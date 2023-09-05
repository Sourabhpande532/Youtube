/* 
🌟♦️machind coding round project 

♦️ Todolist,Tictactoi,Facebook,quiz!!imp Youtube.....
♦️ More importantly Mangaging you'r time with above project if this is not none of use of any project in you'r mc code interview!! 
♦️ Practice is mandatory in order to handle such senario which makes you perfect & saves more time !! 
♦️ Planning helps with pen and paper  
♦️ for discussing this below thing take 5 min only not too much
♦️ 5 min for Planning with pen & paper compulsory & discuss with interviewer This thing also (exacalidraw)

@NOTE:
♦️@ASK_ABOUT: FEATURES
-Don't Directly jump on VS code Ask for ""Requirements Clarifications"" o.w it's poor Approach
-Need to ask Question frequently & clear the Requirements!!
-E.g You ask Question To interviewer What Features we'r going to build Today
 (Need to discuss this thing compulsory for Mangaging time bcz Can't build large app in 2 hours )
-For demo take on Youtube Website & ask what Features Need to build this hamburger menu made or not not wheather it is required or not search functionlity need or not like ....
------------------
♦️@ASK_ABOUT: Tech Stack
  -React 
  -Tailwaind
  -Redux
  -react router dom (for routing)
  -formic (for designing form)
  -Bundlers (discuss one)
  -jest (for teasting react library/code)
  
 -discuss Tech Stack & ask Question Frequently?
 -With tech Stack Need to tell Justification why you'r using ??
 -Let's say as far I know there is UI & Data Layer for UI I preffer to choose "Tailwaind" & for Data Mangaging My personal Choice moves towards "Redux"
 -Tell about tech stack info Why Tailwaind it's modern technology which makes app faster!
 -it is easy to write & customizable save us reusability & it is extensible.


 @NOTE: While Building functionality of video Container Need to ask Question How will i get data is it hardCoded or From API! which one do you have ??

*/

/* 
@HERE PUT ONLY FOR FURTHER DOWN LINE PRACTICE FUTURE
@HINT: Code OF 🗃️HEADER.js
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








*/
