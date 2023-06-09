/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { StarTrue } from "../utils/icon";

const TrendingReceipt = (props) => {
  const { data, indexLimit, loading, handleAllReceipt } = props;
  return (
    <div className="w-[100vw] mt-12 mb-32 md:mb-48">
      <div className="w-full md:w-[1300px] m-auto px-6 md:px-0">
        <p className="text-[24px] md:text-[38px] font-medium leading-tight">
          Browser Our Trending <br />
          <span className="text-[#8BAC3E]">Receipt</span>
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-y-8 my-12 px-1 md:px-0 ${
            data ? "mb-16" : "mb-24 relative"
          }`}
        >
          {data ? (
            data
              .filter((result, index) => {
                return index < indexLimit;
              })
              .map((value) => {
                return (
                  <a
                    key={value.id}
                    className={`cursor-pointer shadow-lg shadow-gray-100 ${value.colour} rounded-2xl px-6 py-8 relative transition-[all_2000ms_ease] hover:z-0 before:bg-[url('assets/bg-hover.jpg')] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:opacity-0 before:z-[-10] before:transition-[opacity_2s_ease] hover:before:opacity-10`}
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

        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleAllReceipt}
            className="bg-[#88AC3E] px-5 md:px-7 py-2 rounded-full text-sm md:text-base text-white font-medium shadow-lg flex items-center"
          >
            {loading && (
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-sky-600"
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
            )}
            <span className="ml-1">All Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingReceipt;
