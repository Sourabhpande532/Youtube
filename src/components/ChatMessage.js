import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-lg p-2">
      <img
        className='h-6'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBE57bRxs00n86wy61CTOdCnBAs8AFZOsOThZz4Q&s'
        alt='user'
      />
      <span className="font-bold p-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
