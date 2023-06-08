/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Next, Previous, StarFalse, StarTrue } from "./utils/icon";

import pizza from "./assets/images/pizza-paperoni.svg";
import CategoryCard from "./components/CategoryCard";

function App() {
  const categories = [
    {
      id: 1,
      title: "Cupcake",
      bgcolour: "#F0FEEB",
    },
    {
      id: 2,
      title: "Pizza",
      bgcolour: "#E6F3F5",
    },
    {
      id: 3,
      title: "Kebab",
      bgcolour: "#EAEEFA",
    },
    {
      id: 4,
      title: "Salmon",
      bgcolour: "#F9EEF3",
    },
    {
      id: 5,
      title: "Doughnut",
      bgcolour: "#F3F7D9",
    },
    {
      id: 6,
      title: "Comming Soon...",
      bgcolour: "#EAEEFA",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="w-[100vw] max-h-[690px] before:bg-[url('assets/background.svg')] before:absolute before:opacity-5 before:top-0 before:left-0 before:w-full before:h-full before:max-h-[690px] before:bg-cover before:z-[-1]">
        <div className="m-auto grid grid-cols-2 w-[1300px] py-24">
          <div className="flex flex-col justify-center">
            <p className="text-[64px] font-medium text-[#8BAC3E] leading-none tracking-tighter">
              Good Food Us <br /> Good Mood
            </p>
            <p className="my-8 text-lg">
              I would think that conserving our natural resources <br /> should
              be a conservative position: Not to waste food, and <br /> not to
              throw away a lot of the food that we buy.
            </p>
            <div className="text-lg">
              <button className="mr-3 border rounded-full px-5 py-2.5 text-sm text-white bg-[#8BAC3E] hover:bg-[#98b555] active:bg-[#8BAC3E] font-medium shadow-xl">
                Daftar Sekarang
              </button>
              <button className="text-sm rounded-full px-4 py-2.5 bg-[#F2F2F2] hover:bg-[#f6f6f6] active:bg-[#F2F2F2] font-medium shadow">
                About Us
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="p-16 rounded-full bg-black bg-opacity-5 relative">
              <img
                src="assets/hero-image.svg"
                className="w-[412px]"
                alt="Green Salad Tomato"
                title="Green Salad Tomato"
              />
              <div className="absolute flex bg-white rounded-[17px] p-5 w-[292px] shadow-lg shadow-gray-200 top-[415px] left-[-56px] bg-opacity-80">
                <img
                  src="assets/hero-image.svg"
                  alt="Green Salad Tomato"
                  title="Green Salad Tomato"
                  width={"53px"}
                />
                <div className="ml-4">
                  <p className="text-sm font-semibold text-[#000000]">
                    Green Salad Tomato
                  </p>
                  <p className="text-xs text-[#757575]">Tomato</p>
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

      <div className="w-[100vw] border mt-12">
        <div className="w-[1300px] m-auto">
          <p className="text-[38px] font-medium leading-tight">
            Browser Our Category <br />
            <span className="text-[#8BAC3E]">Receipt</span>
          </p>

          {/* Section Slider */}
          <div className="flex flex-row gap-3.5 pt-6 mt-5 mx-auto overflow-x-auto scrollbar-hide min-h-[240px]">
            {categories.map((value) => {
              return (
                <CategoryCard
                  key={value.id}
                  title={value.title}
                  bgcolour={value.bgcolour}
                />
              );
            })}
          </div>

          <div className="w-full flex justify-end items-center">
            <div className="flex">
              <button className="mx-auto bg-[#8BAC3E] px-4 py-2 rounded-full text-white font-medium uppercase flex items-center mr-3 hover:shadow-lg hover:bg-[#98b94a] active:bg-[#8BAC3E]">
                <Previous />
                <span className="ml-2.5 font-medium">Prev</span>
              </button>
              <button className="mx-auto bg-[#8BAC3E] px-4 py-2 rounded-full text-white font-medium uppercase flex items-center hover:shadow-lg hover:bg-[#98b94a] active:bg-[#8BAC3E]">
                <span className="mr-2.5 font-medium">Next</span>
                <Next />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] border mt-12 mb-48">
        <div className="w-[1300px] m-auto">
          <p className="text-[38px] font-medium leading-tight">
            Browser Our Trending <br />
            <span className="text-[#8BAC3E]">Receipt</span>
          </p>

          <div className="grid grid-cols-4 gap-x-6 gap-8 my-12 border">
            <a className="cursor-pointer rounded-2xl px-6 py-8 bg-[#E6F3F5] relative transition-[all_2000ms_ease] hover:z-0 before:bg-[url('assets/bg-hover.jpg')] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:opacity-0 before:z-[-10] before:transition-[opacity_2s_ease] hover:before:opacity-10">
              <img src={pizza} width={"150px"} className="rounded-md" />
              <p className="text-[26px] font-medium text-[#000000] mt-4">
                Pizza Paperoni 1
              </p>
              <p className="font-medium text-lg text-[#8BAC3E]">Pizza</p>
              <div className="flex mt-3">
                <StarTrue />
                <StarTrue />
                <StarTrue />
                <StarTrue />
                <StarTrue />
              </div>
            </a>
          </div>

          <div className="w-full flex justify-center">
            <button className="mx-auto bg-[#88AC3E] px-7 py-2 rounded-full text-white font-medium shadow-lg">
              All Receipt
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
