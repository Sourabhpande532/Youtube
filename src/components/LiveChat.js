import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";

const LiveChat = () => {
  /* @dispatch: Send to redux store */
  const dispatch = useDispatch();

  /* @useSelector: To show on UI via redux*/
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("API POLLING");
      // dispatch mean send to redux store info & Selector mean show on UI for update perpose
      dispatch(
        addMessages({
          name: "sidharth guvanshj",
          message: "Lorem ipsum doler sirgudk hdif ✅",
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    /*  <div className='h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
      <ChatMessage name='Rahul' message='This is Live Class ' />
      <ChatMessage name='Rahul' message='This is Live Class ' />
      <ChatMessage name='Rahul' message='This is Live Class ' />
      <ChatMessage name='Rahul' message='This is Live Class ' />
    </div> */
    <div className='h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
      {chatMessage.map((c, i) => {
        <ChatMessage key={i} name={c.name} message={c.message} />;
        <h1>Hle</h1>
      })}
    </div>
  );
};

export default LiveChat;
