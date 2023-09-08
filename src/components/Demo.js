import React, { useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // console.log("RENDERING..." + text);

  const prime = findNthPrime(text);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme ? " bg-black text-white" : "")
      }>
      <h1>For Memoization Perpose</h1>
      <button
        className='p-2 bg-gray-400 hover:bg-gray-200 rounded-lg mb-5'
        onClick={() => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? "OFF" : "ON"}
      </button>
      <div>
        <input
          className='border border-black w-72 px-2'
          type='number'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h1 className=' font-bold text-xl'>nth Prime: {prime}</h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;

/* 
-To show the Memoization Need to keep on change my state 
-Let's pick above one everytime i press key my reconcilation precess triggering in on each word 
-don't you think so it's costly/heavy op it's more chance of freezh page to get rid of that Memoization comes into play 
-see above e.g once you react at ceartain level or cross limit page get's freezh

*/
