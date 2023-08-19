import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className='flex gap-3'>
      <Sidebar />
      {/*<MainContainer />
         <WatchPage/> 
         Replacement(Outlet)👇*/}
      <Outlet />
    </div>
  );
};

export default Body;
