/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { HumbergerIcon } from "../utils/icon";

const BottomNavbar = (props) => {
  const { bottomNavbarDisplay } = props;

  return (
    <>
      {bottomNavbarDisplay ? (
        <div className="fixed w-full left-0 border border-gray-50 flex md:hidden justify-between items-center px-6 py-2 bg-white bottom-0 duration-700">
          <button className="flex flex-col items-center px-3 py-1 text-[#757575]">
            <HumbergerIcon />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-[#757575]">
            <HumbergerIcon />
            <span className="text-xs">Promotions</span>
          </button>
          <button className="flex flex-col items-center px-2 text-[#757575]">
            <HumbergerIcon />
            <span className="text-xs">Others</span>
          </button>
        </div>
      ) : (
        <div className="fixed w-full left-0 border border-gray-50 flex md:hidden justify-between items-center px-6 py-2 bg-white bottom-[-76px] duration-700">
          <button className="flex flex-col items-center px-3 py-1 text-[#757575]">
            <HumbergerIcon />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-[#757575]">
            <HumbergerIcon />
            <span className="text-xs">Promotions</span>
          </button>
          <button className="flex flex-col items-center px-2 text-[#757575]">
            <HumbergerIcon />
            <span className="text-xs">Others</span>
          </button>
        </div>
      )}
    </>
  );
};

export default BottomNavbar;
