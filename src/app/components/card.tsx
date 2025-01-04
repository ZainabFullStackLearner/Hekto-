import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
interface CardProps {
  image: string | StaticImageData;
  title: string;
  code?: string;
  price?: string;
  // Optional prop for left distance
  icons?: ReactElement[];
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  code,
  price,
   // Default value for left distance
  icons = [
    <AiOutlineHeart key="heart" />,
    <HiOutlineMagnifyingGlassPlus key="magnifying-glass" />,
    <IoCartOutline key="cart" />
  ] as ReactElement[],
  onButtonClick,
}) => {
  return (
    <div
      className={`w-[270px] h-[360px] relative group hover:bg-[#2F1AC4] transition-colors duration-300`}
     
    >
      {/* Image Container */}
      <div className="w-[270px] h-[236px] bg-[#F6F7FB] relative group-hover:bg-[#E8E8FF] transition-colors duration-300">
        <Image
          src={image}
          alt={title}
          className="w-[178px] h-[178px] relative top-[46px] left-[46px] group-hover:scale-105 transition-transform duration-300"
        />
        <div className="group/edit invisible absolute inset-0 group-hover:visible group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center">
          {/* Icons */}
          <div className="absolute top-2 left-3 flex space-x-1 lg:space-x-2">
  {icons.map((icon, index) => (
    <div key={index} className="bg-white rounded-full p-2">
      {React.cloneElement(icon as React.ReactElement<{ size?: number; className?: string }>, { className: "text-[#1389FF]", size: (icon as React.ReactElement<{ size?: number }>).props.size || 20 })}
    </div>
  ))}
</div>

          {/* Button */}
          <button
            className="bg-[#08D15F] text-white font-bold py-2 px-4 rounded"
            onClick={onButtonClick}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Text */}
      <h3 className="absolute top-[251px] left-[71px] text-[#FB2E86] font-lato text-[18px] font-bold group-hover:bg-[#2F1AC4] group-hover:text-white p-2 rounded transition-colors duration-300">
        {title}
      </h3>
      <p className="bg-[#05E6B7] w-3 h-1 absolute top-[285px] left-[110px]"></p>
      <p className="bg-[#F701A8] w-3 h-1 absolute top-[285px] left-[129px]"></p>
      <p className="bg-[#00009D] w-3 h-1 absolute top-[285px] left-[148px]"></p>
      <p className="text-[#151875] absolute top-[301px] left-[92px] font-josefin text-[14px] group-hover:text-white">
        {code}
      </p>
      <h4 className="absolute top-[327px] left-[115px] font-lato text-[#2F1AC4] group-hover:text-white">
        {price}
      </h4>
    </div>
  );
};

export default Card;

