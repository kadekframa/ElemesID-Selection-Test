/* eslint-disable no-unused-vars */
import React from "react";
import { StarFalse, StarTrue } from "../utils/icon";

const HeroSection = (props) => {
  return (
    <div className="w-[100vw] h-screen md:h-full md:max-h-[690px] before:bg-[url('assets/bg-hover.jpg')] md:before:bg-[url('assets/background.svg')] before:absolute before:opacity-5 before:top-0 before:left-0 before:w-full before:h-screen md:before:max-h-[690px] before:bg-cover before:z-[-1]">
      <div className="m-auto grid grid-cols-1 md:grid-cols-2 w-full md:w-[1300px] py-[84px] md:py-24">
        <div className="flex flex-col justify-center p-6 md:p-0 relative">
          <p className="text-[48px] md:text-[64px] font-medium text-[#8BAC3E] leading-none tracking-tighter">
            Good Food Us <br /> Good Mood
          </p>
          <div className="absolute md:static top-[460px] mr-6 md:mr-0">
            <p className="my-8 text-[15px] md:text-lg text-[#757575]">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <div>
              <button className="mr-3 border rounded-full  px-3.5 md:px-5 py-2.5 text-xs md:text-sm text-white bg-[#8BAC3E] hover:bg-[#98b555] active:bg-[#8BAC3E] font-medium shadow-xl">
                Daftar Sekarang
              </button>
              <button className=" text-xs md:text-sm text-[#333333] rounded-full px-4 py-2.5 bg-[#F2F2F2] hover:bg-[#f6f6f6] active:bg-[#F2F2F2] font-medium shadow">
                About Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center p-6 md:p-0">
          <div className="p-7 md:p-16 rounded-full bg-black bg-opacity-5 w-[250px] md:w-[518px] relative">
            <img
              src="assets/hero-image.svg"
              className="w-[340px] md:w-[412px]"
              alt="Green Salad Tomato"
              title="Green Salad Tomato"
            />
            <div className="absolute flex bg-white rounded-[17px] p-4 md:p-5 w-[236px] md:w-[292px] shadow-lg shadow-gray-200 top-[164px] md:top-[396px] left-[106px] md:left-[-68px] bg-opacity-70 md:bg-opacity-80">
              <img
                src="assets/hero-image.svg"
                alt="Green Salad Tomato"
                title="Green Salad Tomato"
                width={"53px"}
              />
              <div className="ml-4">
                <p className="text-xs md:text-sm font-semibold text-[#000000]">
                  Green Salad Tomato
                </p>
                <p className="text-[10px] text-[#757575] mt-1 md:mt-0">
                  Tomato
                </p>
                <div className="flex mt-2">
                  <StarTrue />
                  <StarTrue />
                  <StarTrue />
                  <StarTrue />
                  <StarFalse />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
