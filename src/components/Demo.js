import React, { useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  console.log("RENDERING...");

  const prime = findNthPrime(text);
  
  return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>
      <h1>For Memoization Perpose</h1>
      <div>
        <input
          className='border border-black w-72 px-2'
          type='number'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h1>nth Prime: {prime}</h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;
