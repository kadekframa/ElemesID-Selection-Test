/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Cupcake, Doughnut, Kebab, Pizza, Salmon } from "../utils/icon";

const CategoryCard = (props) => {
  const { title, bgcolour } = props;
  const icon = {
    Cupcake: <Cupcake />,
    Pizza: <Pizza />,
    Kebab: <Kebab />,
    Salmon: <Salmon />,
    Doughnut: <Doughnut />,
  };

  const bgColour = {
    Cupcake: "bg-[#F0FEEB]",
    Pizza: "bg-[#E6F3F5]",
    Kebab: "bg-[#EAEEFA]",
    Salmon: "bg-[#F9EEF3]",
    Doughnut: "bg-[#F3F7D9]",
  };

  return (
    <a
      className={`rounded-lg bg-[${bgcolour}] bg-cover hover:bg-[url('bg-hover.png')] min-w-[230px] h-[175px] hover:scale-105 text-center max-w-[155px] flex flex-col items-center justify-center duration-500 cursor-pointer relative transition-[all_2000ms_ease] hover:z-0 before:bg-[url('assets/bg-hover.jpg')] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:opacity-0 before:z-[-10] before:transition-[opacity_2s_ease] hover:before:opacity-10`}
    >
      {icon[title]}
      <p className="font-medium text-base text-[#333333] mt-4">{title}</p>
      <p className="text-sm text-[#333333]">22 items</p>
    </a>
  );
};

export default CategoryCard;
