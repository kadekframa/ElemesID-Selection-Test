/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CategoryCard from "./CategoryCard";
import { Next, Previous } from "../utils/icon";
import { categories } from "../data/dataCategory";

const CategoryReceipt = () => {
  return (
    <div className="w-[100vw] mt-12">
      <div className="w-full md:w-[1300px] m-auto">
        <p className="text-[24px] md:text-[38px] font-medium leading-tight px-6 md:px-0">
          Browser Our Category <br />
          <span className="text-[#8BAC3E]">Receipt</span>
        </p>

        <div className="flex flex-row gap-3.5 pt-6 mt-5 mx-auto overflow-x-auto scrollbar-hide min-h-[204px] md:min-h-[240px]">
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

        <div className="hidden md:flex justify-end items-center">
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
  );
};

export default CategoryReceipt;
