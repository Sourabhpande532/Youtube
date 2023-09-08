import React, { useEffect, useState } from "react";
import LiveComments from "./LiveComments";
import { useDispatch, useSelector } from "react-redux";
import { addMassage } from "../utils/chatSlice";
import { generateRandomName, makeRandomComments } from "../utils/helper";

const LiveChatting = () => {
  const [liveMessage, setLiveMessage] = useState("");

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
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  /* SHOW/HIDE */
  const isChatOpen = useSelector((store)=>store.livechat.isChatOpen);

  if(!isChatOpen) return null;

  return (
    <>
      <div>
        <div className='h-[500px] w-[415px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
          {chatMessages.map((c, i) => (
            <LiveComments key={i} name={c.name} message={c.message} />
          ))}

          {/* <LiveComments name='Rahul' message='This is Live Class ' /> 
        For Demo - copy here 
      */}
        </div>
      </div>
      <form
        className='w-full p-2 ml-2 border border-black'
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(addMassage({
            name:"Saurabh",
            message:liveMessage
          }))
          setLiveMessage("")
        }}>
        <input
          className='px-2 w-90'
          type='text'
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button className='px-2 mx-2  bg-green-100'>Send</button>
      </form>
    </>
  );
};

export default LiveChatting;
