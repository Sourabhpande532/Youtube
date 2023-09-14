import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);

  let x = 0;
  /*Normal variable after every state variable render above it automatically get refresh const [y, setY] = useState(0)*/

  const ref = useRef(55);
  // console.log(ref);
  /* useRef Value behave like behind the since Objet not like that => ref = 0 it is like that 
  ref = {current:0}

  */
  console.log("RENDERING....");

  // let timer;
  // useEffect(() => {
  //   timer = setInterval(() => {
  //     // console.log("Nameste React");
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    // NORMAL VARIABLE OF JS E.g
    <div className='m-4 p-2 w-96 h-96 border border-black'>
      <div>
        <button
          className='bg-green-400 px-2 m-4 rounded-lg'
          onClick={() => {
            x = x + 1;
            console.log("x = ", x);
          }}>
          Increase x
        </button>

        {/*STATE VARIABLE OF REACT E.g*/}
        <h1 className='font-bold text-xl'>Let - {x}</h1>
        <button
          className='bg-green-400 px-2 m-4 rounded-lg'
          onClick={() => {
            // x = x + 1;
            // console.log(x);
            setY(y + 1);
          }}>
          Increase Y
        </button>
        <h1 className='font-bold text-xl'>State - {y}</h1>

        {/*E.G OF USE REF */}
        <button
          className='bg-green-400 px-2 m-4 rounded-lg'
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref= ", ref.current);
          }}>
          +IncreaseRef
        </button>
        <h1 className='font-bold text-xl'>Ref - {ref.current}</h1>
      </div>
      <button
        className='m-2 p-2 bg-red-500 rounded-lg text-white font-bold'
        onClick={() => {
          // clearInterval(timer);
        }}>
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;

/* 
Use of useRef 
-Without Refresing & reset the page value would be change Know as useRef 
-Don't want to reset/Refresh page this is know as useRef The value would be persist between The render Cycle just like my state VARIABLE 
-Basically It not start from scratch even if page refresh it won't forgot value it stick/hold as it is ! 

*/
