import React from "react";

import Image, { StaticImageData } from "next/image";
interface ProductCardProps {
 image: string | StaticImageData;
  title: string; // Title of the product
  price: string; // Price of the product
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className=" relative group w-[269px] h-[350px] shadow-xl flex flex-col items-center  bg-white ">
    <div className="flex flex-col gap-3">
  <div className="bg-[#F5F6F8] p-10 cursor-pointer w-[259px] h-[259px]  rounded-full flex items-center hover:border-l-[#9877E7]  hover:border-l-8 transition-[transform,colors] duration-700">
  <Image 
  alt={title} 
   src={image} 
   className="transition-transform hover:scale-105 duration-700 w-full rounded-md  "/>
  </div>
  <button
        className="absolute z-20 px-4  ml-[75px] py-2 text-white bg-green-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
        style={{ bottom: "90px" }}
      >
        View Shop
      </button>
  <h1 className="font-josefin text-center text-[#151875] text-[20px] ">{title}</h1>
  </div>
       <p className="text-[#151875] text-[16px]">{price}</p>
    </div>
  );
};

export default ProductCard;
