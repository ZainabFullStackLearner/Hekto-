import  { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import React from "react";

 export interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  stockLevel: number;
  category: string;
  discountPercentage: number;
  icons?: ReactElement[];
  onButtonClick?: () => void;
}
const icons = [
  <AiOutlineHeart key="heart" />,
  <HiOutlineMagnifyingGlassPlus key="magnifying-glass" />,
  <IoCartOutline key="cart" />,
] as ReactElement[];

interface Props {
  data: Product[];
}
const Card2: React.FC<Props> = ({ data }) => {
  return (
      <div className="mb-4 ">
              <h1 className="text-center relative font-bold font-josefin text-[33px] lg:text-[42px] text-[#1A0B5B] mx-auto w-full">
    
                  Latest Products
                </h1>
                <ul className="flex gap-10 font-lato justify-center mb-5">
                  <li className="text-[#FB4997] underline decoration-[#FB4997] ">
                    New Arrival
                  </li>
                  <li>Best Seller</li>
                  <li>Featured</li>
                  <li>Special Offer</li>
                </ul>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg gap-10">
    {data.map((item) => ( <Link key={item._id} href={`/products/${item._id}`}>
      <div key={item._id} className="w-[360px] h-[336px]  group relative shadow-xl rounded-lg">
        {/* Image Container */}
        <div className="w-[360px] h-[269px] bg-[#F7F7F7] relative  ">
          <div className="relative w-[270px] h-[236px] mx-auto ">
            <Image
              src={item.image}
              alt={item.name}
             height={216}
              width={260}
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
          <p className="font-josefin underline  text-[16px] font-medium text-blue-800 ">
            {item.name}
          </p>
          <div className="grid grid-cols-2 sm:flex  group-hover:shadow-lg sm:items-center w-full gap-2">
            <h4 className="text-[#151875] text-[14px] font-lato">${item.price}</h4>
            <h5 className="text-[#FB2448] text-[13px] line-through font-lato">
              ${item.price + (item.price * item.discountPercentage) / 100}
            </h5>
          </div>
        </div>
      </div>
      </Link>
    ))}
    </div>
    </div>
  );
};

export default Card2;
