import React from "react";
import { useRouteError, Link } from "react-router-dom";
import image from "../assets/404Error.png"

function Error() {
  const err = useRouteError();

  return (
    <div className="pl-[23rem]">
      <h1 className="font-bold text-6xl text-gray-600"> Oops!!! </h1>
      <h1 className="font-semibold mt-6 text-3xl text-gray-500">
         you're looking for can't be found.
      </h1>
      <h3 className="mt-6 font-semibold text-red-500">400</h3>
      <h3 className="bg-red-500 mt-5 p-2 rounded-md text-white w-44" >
        <Link to="/" >
          Back Home <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </h3>
    </div>
  );
}

export default Error;