import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

interface Cardtype {
  image: string | StaticImageData;
  title: string;
  price1?: string;
  price2?: string;
  icons?: ReactElement[];
}

const GridCard: React.FC<Cardtype> = ({
  image,
  title,
  price1,
  price2,
  icons = [
    <AiOutlineHeart key="heart" />,
    <HiOutlineMagnifyingGlassPlus key="magnifying-glass" />,
    <IoCartOutline key="cart" />,
  ],
}) => {
  return (
    <div className="w-[270px] h-[303px] bg-white mb-2 shadow-md hover:shadow-lg transition-shadow">
      <div className="group border relative">
        <div className="relative px-10 py-[16px] rounded-lg overflow-hidden bg-slate-200 w-[270px] h-[210px]">
          {/* Image */}
          <Image
            src={image}
            alt={title}
            className="group-hover:scale-105 max-w-[200px] transition-transform duration-300"
          />

          {/* Icons */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-baseline left-3 top-8">
            <div className="flex flex-col gap-2">
              {icons.map((icon, index) => (
                <div key={index} className="bg-white rounded-full p-2">
                  {React.cloneElement(
                    icon as React.ReactElement<{ size?: number; className?: string }>,
                    { className: "text-[#1389FF]", size: (icon as React.ReactElement<{ size?: number }>).props.size || 20 }
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-lg font-medium font-josefin text-[#151875] relative text-[18px] top-[21px] z-50">
          {title}
        </h3>

        {/* Color Options */}
        <div className="mt-6 flex justify-center items-center space-x-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        </div>

        {/* Price */}
        <div className="flex justify-center space-x-2 font-josefin mt-2">
          <span className="text-lg font-bold">{price1}</span>
          <span className="text-red-500 line-through">{price2}</span>
        </div>
      </div>
    </div>
  );
};

export default GridCard;

