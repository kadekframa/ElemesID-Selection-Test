/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Next, Previous, StarFalse, StarTrue } from "./utils/icon";

import pizza from "/assets/images/pizza-paperoni.svg";
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

  const [data, setData] = useState(false);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (status) {
      getData();
      setStatus(false);
    }
    console.info(data);
  }, [data, setData, status]);

  const getData = () => {
    const response = fetch("../data.json", {
      method: "GET",
    });

    response
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        setTimeout(() => {
          setData(value.data);
        }, 400);
      });
  };

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

          <div
            className={`grid grid-cols-4 gap-x-6 gap-8 my-12 ${
              data ? "" : "mb-24 relative"
            }`}
          >
            {data ? (
              data.map((value) => {
                return (
                  <a
                    key={value.id}
                    className={`cursor-pointer ${value.colour} rounded-2xl px-6 py-8 relative transition-[all_2000ms_ease] hover:z-0 before:bg-[url('assets/bg-hover.jpg')] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:opacity-0 before:z-[-10] before:transition-[opacity_2s_ease] hover:before:opacity-10`}
                  >
                    <img
                      src={value.location}
                      width={"118px"}
                      className="rounded-md bg-cover bg-center"
                    />
                    <p className="text-[26px] font-medium text-[#000000] mt-4">
                      {value.name}
                    </p>
                    <p className="font-medium text-lg text-[#8BAC3E]">
                      {value.category}
                    </p>
                    <div className="flex mt-3">
                      <StarTrue />
                      <StarTrue />
                      <StarTrue />
                      <StarTrue />
                      <StarTrue />
                    </div>
                  </a>
                );
              })
            ) : (
              <div className="absolute flex justify-center items-center w-full">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-700"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <p className="ml-2 text-xl font-normal text-gray-500">
                  Loading...
                </p>
              </div>
            )}
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
