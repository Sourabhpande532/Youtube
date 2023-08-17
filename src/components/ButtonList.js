import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Container",
  "Sports",
  "Tech",
  "Gaming",
  "Songs",
  "Cricket",
  "Football",
];
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
