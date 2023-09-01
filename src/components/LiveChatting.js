import React, { useEffect } from "react";
import LiveComments from "./LiveComments";
import { useDispatch, useSelector } from "react-redux";
import { addMassage } from "../utils/chatSlice";
import { generateRandomName, makeRandomComments } from "../utils/helper";

const LiveChatting = () => {
  /* BY The Term Send Info to store */
  const dispatch = useDispatch();

  /* Show on UI via store/redux selector mean*/
  const chatMessages = useSelector((store) => store.chats.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("API POll");
      dispatch(
        addMassage({
          name: generateRandomName(),
          message: makeRandomComments(10) + "✈️",
        })
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className='h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
        {chatMessages.map((c,i) => (
          <LiveComments key={i} name={c.name} message={c.message} />
        ))}

        {/* <LiveComments name='Rahul' message='This is Live Class ' /> 
        For Demo - copy here 
      */}
      </div>
    </div>
  );
};

export default LiveChatting;
