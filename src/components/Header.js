import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
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
        <a href="/">
        <img
          alt='Youtube'
          className='h-12 mx-2'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png'
        />
        </a>
      </div>
      <div className='col-span-10 px-12 p-4'>
        <input
          className='w-1/2 border border-gray-300 rounded-l-full'
          type='text'
        />
        <button className='border border-gray-400 bg-gray-200 rounded-r-full w-10'>
          🔎
        </button>
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
