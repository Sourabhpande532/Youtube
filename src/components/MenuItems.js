import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdOutlineContentCut,
  MdOutlineKeyboardArrowDown,
  MdOutlineMusicNote,
  MdOutlineLightbulb,
  MdHelpOutline,
  MdOutlineSettings,
  MdOutlinedFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiVideoLine, RiShoppingBag2Line } from "react-icons/ri";
import { ImFire } from "react-icons/im";
import { GiAerialSignal, GiClapperboard } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const MenuItems = () => {
  const isMenuOpen = useSelector((store) => store.apps.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <Link to='/'>
          <div className='home px-4 flex py-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-100 w-full rounded-lg  cursor-pointer'>
            <MdHomeFilled size='1.5rem' className='mb-1 mr-3' />
            <span className=''>Home</span>
          </div>
        </Link>
        <div className='library mt-1 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlineVideoLibrary size='1.5rem' className='mb-1 mr-3' />
          <span>Library</span>
        </div>
        <div className='History py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlineHistory size='1.5rem' className='mb-1 mr-3' />
          <span>History</span>
        </div>
        <div className='History py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdSubscriptions size='1.5rem' className='mr-4' />
          <span>Subscription</span>
        </div>
      </ul>
      {/* -----------//---------- */}
      <br />
      <ul>
        <div className='Your-Videos py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <RiVideoLine size='1.5rem' className='mb-1 mr-3' />
          <span>Your videos</span>
        </div>
        <div className='Watch-Later py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlineWatchLater size='1.5rem' className='mb-1 mr-3' />
          <span>Watch Later</span>
        </div>
        <div className='Trending py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <ImFire size='1.5rem' className='mb-1 mr-3' />
          <span>Trending</span>
        </div>
        <div className='Shopping py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <RiShoppingBag2Line size='1.5rem' className='mb-1 mr-3' />
          <span>Shopping</span>
        </div>
      </ul>
      <br />
      {/*--------------//-------------- */}
      <ul>
        <div className='Music py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlineMusicNote size='1.5rem' className='mb-1 mr-3' />
          <span>Music</span>
        </div>
        <div className='Movies py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <GiClapperboard size='1.5rem' className='mb-1 mr-3' />
          <span>Movies</span>
        </div>
        <div className='Live py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <GiAerialSignal size='1.5rem' className='mb-1 mr-3' />
          <span>Live</span>
        </div>
        <div className='Learning py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlineLightbulb size='1.5rem' className='mb-1 mr-3' />
          <span>Learning</span>
        </div>
        <div className='Show-more py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlineKeyboardArrowDown size='1.5rem' className='mb-1 mr-3' />
          <span>Show more</span>
        </div>
        <br />
        <div className='pt-3 border-b border-zinc-200  w-full'></div>
        <div className='pt-4 pl-4'>
          <span className='text-sm'>
            Sign in to like videos, comment, and subscribe.
          </span>
        </div>
        <div className='pt-4 pl-4'>
          <button className='border p-2  px-4 rounded-3xl  font-bold flex items-center gap-2'>
            <FaUserCircle size='1.5rem' /> Sign in
          </button>
        </div>
        <br />
        <div className='Settings py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100   w-full rounded-lg  cursor-pointer'>
          <MdOutlineSettings size='1.4rem' className='mb-1 mr-4' />
          <span>Settings</span>
        </div>
        <div className='report-history py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlinedFlag size='1.4rem' className='mb-1 mr-4' />
          <span>Report history</span>
        </div>
        <div className='Help py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdHelpOutline size='1.4rem' className='mb-1 mr-4' />
          <span>Help</span>
        </div>
        <div className='Send-feedback py-2 px-4 flex items-center hover:bg-zinc-100 dark:hover:bg-zinc-100  w-full rounded-lg  cursor-pointer'>
          <MdOutlineFeedback size='1.4rem' className='mb-1 mr-5' />
          <span>Send feedback</span>
        </div>
      </ul>
    </div>
  );
};

export default MenuItems;
