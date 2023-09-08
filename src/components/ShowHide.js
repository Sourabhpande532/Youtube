import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleChat } from "../utils/showHideSlice";

const ShowHide = () => {
  const dispatch = useDispatch();
  const isChatOpen = useSelector((store)=>store.livechat.isChatOpen);

  const toggleChatVisibility = () => {
    dispatch(toggleChat());
  };

  return (
    <div>
      <button
        className='w-[430px] mb-5 bg-gray-200 hover:bg-stone-400 p-[6px] rounded-full border-none outline-none font-semibold text-sm'
        onClick={toggleChatVisibility}
      >
        {isChatOpen ? "Hide Chat" : "Show Chat"}
      </button>
    </div>
  );
};

export default ShowHide;
