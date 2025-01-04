import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";

export interface CardProps {
  image: string | StaticImageData;
  title: string;
  price?: string;
  icons?: ReactElement[];
}

const Card2: React.FC<CardProps> = ({
  image,
  title,
  price,
  icons = [
    <AiOutlineHeart key="heart" />,
    <HiOutlineMagnifyingGlassPlus key="magnifying-glass" />,
    <IoCartOutline key="cart" />,
  ],
}) => {
  return (
    <div className="w-[360px] h-[336px]  group relative shadow-xl rounded-lg">
      {/* Image Container */}
      <div className="w-[360px] h-[269px] bg-[#F7F7F7] relative  ">
        <div className="relative w-[270px] h-[236px] mx-auto ">
          <Image
            src={image}
            alt={title}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Hover Icons */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-baseline left-3 top-2">
          <div className="flex  flex-col gap-2">
             {icons.map((icon, index) => (
                <div key={index} className="bg-white rounded-full p-2">
                  {React.cloneElement(icon as React.ReactElement<{ size?: number; className?: string }>, { className: "text-[#1389FF]", size: (icon as React.ReactElement<{ size?: number }>).props.size || 20 })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start p-4">
        <p className="font-josefin underline decoration-slate-400 text-[16px] font-medium ">
          {title}
        </p>
        <div className="grid grid-cols-2 sm:flex  group-hover:shadow-lg sm:items-center w-full gap-2">
          <h4 className="text-[#151875] text-[14px] font-lato">{price}</h4>
          <h5 className="text-[#FB2448] text-[13px] line-through font-lato">
            $65.00
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card2;
