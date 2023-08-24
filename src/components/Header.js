import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import store from "../utils/store";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // console.log(searchQuery);
  const searchCache = useSelector((store) => store.search);
  // store.search gives you empty Object & it's combo of SearchKey+APISuggestion @NOTE:setRedux here with value

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

  /*4
  -As we see above we'r making an API Call via getSearchSuggestion()  
  -there in API we need pass searchQuery and API suggesation as per stored value inside redux tool kit  
  -Need to pass logic as a Cache(did redux) itself Let's try 
  -By the term logic means use if else 
  -if it is present in my cache/redux store Then directly setSuggestion(json[1]) or else make an API call and setSuggestion
  -conclude If it is present in my cache(redux store) don't make an Api call(TA:getSearchSuggestion()) just directly set my data from redux/cache store what we build it;
  -Now it's time to create cache How will get access to this cache(redux store) by subscribing to it!! see code above useEffect by mean we'r reading data 
  -store.search it will give you empty Object what we mentioned in 🗃️searchSlice.js see initialState:{}
  -Now we'r gonna'v searchCache(cache:combo of searchkey({empty})+APISuggestion) over ther with empty Object
  -Let's If searchQuery present in my searchCache(cache) How'll i find that 

  Our cache Look something like this combo of searchkey({empty})+API suggesation

  --------------------👨‍💻
  #CODE:
  searchCache = 
  {
    "ipho":["iphone11","iphone13","iphone14"]
  }
  searchQuery = ipho
  @NOTE: I'm trying to findOut searchCache Of searchQuery & what will it return i'll setSuggestion(my) & i'll setSuggestion with searchCache of searchQuery by mean "ipho":["iphone11","iphone13","iphone14"]
  @NOTE:searchQuery:"ipho" setSuggestion:["iphone11","iphone13","iphone14"] that we'r manually set(setSuggestion) it searchCache of searchQuery
  --------------------👨‍💻
  
  So,How'll i search if "ipho" is present in my searchCache/cache/redux stor or not how'll i present
  -Logic of if and else in useEffect
  -If my searchCache of[] is searchQuery present in genral searchCache[searchQuery] then just return the searchCache of[searchQuery] "@"[] consider this Of
  in genral searchCache[searchQuery]; directly set this value 

  What if If not present in my cache/searchCache/redux ?? what should i do i should make an API Call and Upadat it my cache How will Upadat it Go getSearchSuggestion = async() SECTION & Upadat it HoW YOu do that Just dispatch an action It is as simple as that😍 & 
  -what will i send in my cacheResult inside it  
  -send an Object of it ensure that not json
  -Object comes with key & value pair 
  -Key Always send in [...] inside it
  -
  then comes to else part

  */

  const getSearchSuggestion = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    // console.log(json);

    // update cache
    dispatch(
      cacheResult({
        iphone:[1,3,4,4],
        [searchQuery]: json[1],
      })
    );
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
