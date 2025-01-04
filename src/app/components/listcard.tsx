import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

interface ProductCardProps {
  image: string | StaticImageData;
  title: string;
  price1: string;
  price2: string;
  rating: number;
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price1,
  price2,
  rating,
  colors,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col lg:flex-row items-center lg:items-start lg:w-[1141px] lg:h-[257px]">
      {/* Product Image */}
      <div className="mb-4 lg:mb-0 lg:mr-6 w-[313px]">
        <Image
          src={image}
          alt={title}
          className="rounded-lg w-full"
          width={323}
          height={230}
        />
      </div>

      {/* Product Details */}
      <div className="w-[313px] lg:w-fit">
        {/* Title and Colors */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-[#151875] font-josefin text-[19px]">
            {title}
          </h2>
          <div className="flex space-x-2">
            {colors.map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        {/* Prices */}
        <div className="flex items-center space-x-2 mb-2 ">
          <span className="text-lg font-medium text-[#151875]">{price1}</span>
          <span className="text-sm text-red-500 line-through">{price2}</span>
          <div className="flex space-x-2  lg:mt-0 ">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`${
                i < rating ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        
        
        </div>

        {/* Rating */}
        

        {/* Description */}
        <p className="text-[17.6px] text-gray-500 mb-4 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Action Icons */}
        <div className="flex justify-start space-x-4">
          <IoCartOutline className="text-[23px] text-gray-500 hover:text-[#FB2E86] cursor-pointer" />
          <AiOutlineHeart className="text-[23px] text-gray-500 hover:text-[#FB2E86] cursor-pointer" />
          <HiOutlineMagnifyingGlassPlus className="text-[23px] text-gray-500 hover:text-[#FB2E86] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

