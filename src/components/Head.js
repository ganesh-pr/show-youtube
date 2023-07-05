import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col px-5 py-2 m-2 shadow-lg">
        <div className="flex col-span-1 items-center">
          <img
            onClick={() => toggleMenuHandler()}
            src="hamburger-menu-icon.png"
            alt="menu"
            className="w-8 h-6 mr-5 cursor-pointer"
          />
          <a href="/">
            <img src="youtube_logo.png" alt="youtube-icon" className="h-6" />
          </a>
        </div>
        <div className="col-span-10 text-center">
          <input
            type="text"
            name="search"
            id="search"
            className="border-gray-400 border-2 w-1/3 rounded-l-full p-2"
          />
          <button className="border-gray-400 bg-gray-200 border-2 rounded-r-full p-2 w-32">
            Search
          </button>
        </div>
        <div className="col-span-1 self-center">
          <img src="User_Icon.png" alt="user icon" className="w-8 h-8" />
        </div>
      </div>
    </>
  );
};

export default Head;
