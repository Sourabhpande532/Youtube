import React from "react";
import { useSelector } from "react-redux";


const MenuItems = () => {
  const isMenuOpen = useSelector((store)=>store.apps.isMenuOpen);

  // Early Return pattern
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Contact</li>
      </ul>
      <h1 className='font-bold pt-5'>Histroy</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default MenuItems;
