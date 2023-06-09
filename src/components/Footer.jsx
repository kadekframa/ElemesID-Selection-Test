/* eslint-disable no-unused-vars */
import React from "react";
import { Email, Instagram, Telephone } from "../utils/icon";

const Footer = () => {
  return (
    <div className="w-[100vw] mb-20 md:mb-0">
      <div className="grid md:grid-cols-footer-layout w-full md:w-[1350px] m-auto rounded-[20px] bg-[#F9FFF7] p-12">
        <div className="">
          <img src="assets/logo.svg" alt="Elemes Logo" width={"180px"} />
          <p className="text-sm mt-7 text-[#757575]">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br />
            Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
            Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex mt-2 md:mt-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=elemesid@gmail.com&su=SUBJECT&body=BODY"
              target="blank"
              className="cursor-pointer p-2 rounded-full hover:bg-[#8BAC3E] mr-2 flex justify-center items-center"
            >
              <Email />
            </a>
            <a
              href="https://wa.me/6288811112222"
              target="blank"
              className="cursor-pointer px-2.5 py-2 rounded-full hover:bg-[#8BAC3E] mr-2 flex justify-center items-center"
            >
              <Telephone />
            </a>
            <a
              href="https://www.instagram.com/elemes_indonesia/"
              target="blank"
              className="cursor-pointer px-2.5 py-2 rounded-full hover:bg-[#8BAC3E] flex justify-center items-center"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <p className="mb-0 md:mb-5 text-lg font-medium mt-6 md:mt-0">
            Categories
          </p>
          <a className="cursor-pointer font-normal mt-2 text-[#757575]">
            Cupcake
          </a>
          <a className="cursor-pointer font-normal mt-2 text-[#757575]">
            Pizza
          </a>
          <a className="cursor-pointer font-normal mt-2 text-[#757575]">
            Kebab
          </a>
          <a className="cursor-pointer font-normal mt-2 text-[#757575]">
            Salmon
          </a>
          <a className="cursor-pointer font-normal mt-2 text-[#757575]">
            Doughnut
          </a>
        </div>
        <div className="flex flex-col text-sm ">
          <p className="mb-0 md:mb-5 mt-6 md:mt-0 text-lg font-medium">
            About Us
          </p>
          <a className="cursor-pointer font-normal mt-2 text-[#757575]">
            About Us
          </a>
          <a className="cursor-pointer font-normal mt-2 text-[#757575]">FAQ</a>
          <a
            href="https://wa.me/6288811112222"
            onClick={() =>
              alert(
                "Please tell our team if you have any problem. Thank you..!"
              )
            }
            className="cursor-pointer font-normal mt-2 text-[#757575]"
          >
            Report Problem
          </a>
        </div>
        <div className="flex flex-col text-sm ">
          <p className="mb-0 md:mb-5 mt-6 md:mt-0 text-lg font-medium">
            Newsletter
          </p>
          <p className="cursor-pointer font-normal mt-2 text-[#757575]">
            Get now free 50% discount for all <br />
            products on your first order
          </p>
          <form className="my-5">
            <input
              className="p-2 rounded-l-lg border"
              type="email"
              placeholder="Your email address"
            />
            <button className="uppercase rounded-r-lg p-2 bg-[#8BAC3E] font-medium text-white border">
              Send
            </button>
          </form>
          <p className="flex text-sm font-normal">
            <Email /> &nbsp;elemesid@gmail.com
          </p>
          <p className="flex text-sm mt-3.5 font-normal">
            <Telephone /> &nbsp; 0888 1111 2222
          </p>
        </div>
      </div>
      <p className="text-[#757575] uppercase text-xs text-center mt-2 md:mt-12 mb-2">
        © 2021 Elemes id. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
