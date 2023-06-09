/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

const Header = (props) => {
  const options = ["Home", "About", "Promotions", "Blogs", "ContactUs"];
  const { navbarColour } = props;

  return (
    <div
      className={`w-[100vw] fixed z-50 px-6 duration-700 ${
        navbarColour ? "bg-white" : ""
      }`}
    >
      <div className="py-3 md:py-4 w-full md:w-[1300px] mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src="assets/logo.svg"
            alt="Elemes Logo"
            className="w-[150px] md:w-[180px]"
          />
        </a>

        <button className="md:hidden rounded-full px-3 py-2 text-sm text-white bg-[#8BAC3E] hover:bg-[#98b555] active:bg-[#8BAC3E] hover:shadow-md font-medium">
          Daftar Sekarang
        </button>

        <div className="hidden sm:flex">
          <ul className="flex text-sm font-medium ">
            {options.map((option, index) =>
              option === "Promotions" ? (
                <a
                  key={option[index]}
                  className="mr-7 cursor-pointer text-[#757575] hover:text-sky-700 relative"
                >
                  {option}
                  <p className="absolute animate-bounce bg-[#E7462D] px-2.5 text-[8px] text-white font-bold w-min rounded-lg top-[-16px] right-[-16px]">
                    HOT
                  </p>
                </a>
              ) : (
                <a
                  href="https://wa.me/6288811112222"
                  key={option[index]}
                  className="mr-7 cursor-pointer text-[#757575] hover:text-sky-700"
                >
                  {option}
                </a>
              )
            )}
          </ul>
        </div>
        <div className="hidden sm:flex">
          <button className="mr-3 text-sm rounded-full px-4 py-2.5 hover:bg-[#F2F2F2] hover:shadow active:bg-[#f0f0f0] font-medium">
            Masuk
          </button>
          <button className="rounded-full px-4 py-2.5 text-sm text-white bg-[#8BAC3E] hover:bg-[#98b555] active:bg-[#8BAC3E] hover:shadow-md font-medium">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
