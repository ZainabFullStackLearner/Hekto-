import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import React, { ReactElement } from "react";

interface Product {
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

function Card({ data }: Props) {
  return (
    <div className="max-w-[1920px] px-[2px] sm:mx-10 lg:mx-32 xl:mx-auto my-20 ">
      {/* Header */}
      <h1 className="text-center font-josefin text-[32px] sm:text-[36px] lg:text-[42px] font-[600] py-6 leading-[40px] sm:leading-[45px] lg:leading-[49.22px] text-[#1A0B5B]">
        Featured Products
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
        {/* Product Card */}
        {data.map((item) => (
          <Link key={item._id} href={`/products/${item._id}`}>
            <div
              key={item._id}
              className="relative group w-[280px] ml-4 flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf] hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="bg-[#F6F7FB] w-full h-[236px] flex justify-center items-center mx-auto">
                {/* Icons */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300  z-10">

                  <div className="absolute top-2 left-3 flex space-x-1 lg:space-x-2">
                    {icons.map((icon, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-full p-2"
                      >
                        {React.cloneElement(
                          icon as React.ReactElement<{
                            size?: number;
                            className?: string;
                          }>,
                          {
                            className: "text-[#1389FF]",
                            size:
                              (icon as React.ReactElement<{ size?: number }>)
                                .props.size || 20,
                          }
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Button */}
                  
                  <button className="bg-[#08D15F] text-white font-bold py-2 px-4 rounded">
                    View Details
                  </button>
                </div>
                {/* Image */}
                <Image
                  src={item.image}
                  width={2000}
                  height={2000}
                  alt={item.name}
                  className="w-[178px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Text Container */}
              <div className="bg-opacity-0 group-hover:bg-[#2F1AC4] w-full text-white transition">
                <div className="py-4 px-3 text-center">
                  <p className="font-lato py-2 text-[#FB2E86] group-hover:text-white font-[700] text-base sm:text-lg">
                    {item.name}
                  </p>
                  {/* Color Dots */}
                  <div className="flex justify-center space-x-1 mt-2">
                    <p className="bg-[#05E6B7] w-3 h-1"></p>
                    <p className="bg-[#F701A8] w-3 h-1"></p>
                    <p className="bg-[#00009D] w-3 h-1"></p>
                  </div>
                  <p className="text-sm text-[#2F1AC4] group-hover:text-white sm:text-[14px]">
                    Code - Y523201
                  </p>
                  <p className="font-lato text-[#2F1AC4] group-hover:text-white py-2 text-base">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;