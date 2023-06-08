/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  const options = ["Home", "About", "Promotions", "Blogs", "ContactUs"];

  return (
    <div className="w-[100vw] border fixed z-50">
      <div className="py-4 w-[1300px] mx-auto flex justify-between items-center border">
        <a href="/">
          <img src="assets/logo.svg" alt="Elemes Logo" width={"180px"} />
        </a>
        <div>
          <ul className="flex text-sm font-medium text-[#757575]">
            {options.map((option, index) =>
              option === "Promotions" ? (
                <li
                  key={option[index]}
                  className="mr-7 cursor-pointer hover:text-sky-700 relative"
                >
                  {option}
                  <p className="absolute bg-[#E7462D] px-2.5 text-[8px] text-white font-bold w-min rounded-lg top-[-16px] right-[-16px]">
                    HOT
                  </p>
                </li>
              ) : (
                <li
                  key={option[index]}
                  className="mr-7 cursor-pointer hover:text-sky-700"
                >
                  {option}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
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
