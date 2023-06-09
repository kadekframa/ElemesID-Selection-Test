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

  return (
    <a
      className={`rounded-lg bg-[${bgcolour}] bg-cover min-w-[230px] h-[172px] hover:scale-105 text-center max-w-[155px] flex flex-col items-center justify-center duration-500 cursor-pointer relative transition-[all_2000ms_ease] before:bg-[url('assets/bg-hover.jpg')] before:absolute before:top-0 before:left-0 before:w-full before:h-full hover:z-0 before:bg-cover before:opacity-0 before:z-[-10] before:transition-[opacity_2s_ease] hover:before:opacity-10`}
    >
      {icon[title]}
      <p className="font-medium text-[15px] md:text-base text-[#333333] mt-4">
        {title}
      </p>
      <p className="text-xs md:text-sm text-[#333333] font-normal mt-1 md:mt-0">
        22 items
      </p>
    </a>
  );
};

export default CategoryCard;
