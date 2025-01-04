import React from "react";


import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillGridFill } from "react-icons/bs";

import Foot from "@/app/components/footer";
import grid1 from "@/app/assets/image 9.png";
import grid2 from "@/app/assets/image 1165.png";
import grid3 from "@/app/assets/image 1173 (1).png";
import grid4 from "@/app/assets/10011 1.png";
import grid5 from "@/app/assets/unnamed 1.png";
import grid6 from "@/app/assets/1562173100-movado-connect-1562173094 2.png";
import grid7 from "@/app/assets/purepng 1.png";
import grid8 from "@/app/assets/image 1164.png";
import grid9 from "@/app/assets/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png";
import grid10 from "@/app/assets/cam 2.png";
import grid11 from "@/app/assets/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLnBuZw 1.png";

import GridCard from "@/app/components/gridcard";

export default function Grid() {
  return (
    <div className="max-w-full">
      {/* Header Section */}
      <div className="h-[290px] bg-[#F6F5FF] relative top-[70px]">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] ">
          Shop Grid Default
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">Shop Grid Default</h5>
        </div>
      </div>

      {/* Filter and Grid Section */}
      <div className="relative mt-[100px] px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          {/* Left: Results Info */}
          <div>
            <h1 className="text-2xl text-[#151875] font-josefin font-bold mb-2">
              Ecommerce Accessories &amp; Fashion Item
            </h1>
            <p className="text-sm text-gray-400">About 9,620 results (0.62 seconds)</p>
          </div>

          {/* Right: Filters */}
          <div className="flex flex-wrap gap-6 items-center">
            {/* Per Page */}
            <div className="flex items-center gap-2">
              <label htmlFor="perPage" className="text-sm font-lato text-[#3F509E]">
                Per Page:
              </label>
              <input
                id="perPage"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <label htmlFor="sortBy" className="text-sm font-lato text-[#3F509E]">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="p-1 border rounded text-sm font-lato focus:outline-none focus:ring-1 focus:ring-blue-500 text-[#3F509E]"
              >
                <option value="bestMatch">Best Match</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>

            {/* View */}
            <div className="flex items-center gap-2">
              <label htmlFor="view" className="text-sm font-lato text-[#3F509E]">
                View:
              </label>
              <BsFillGridFill />
              <TfiMenuAlt />
              <input
                id="view"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9, grid10, grid11 , grid4].map(
            (image, index) => (
              <GridCard
                key={index}
                image={image}
                title={`Cras scelerisque velit ${index + 1}`}
                price1="$26.00"
                price2="$42.00"
              />
            )
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-[100px]">
       
        <Foot />
      </div>
    </div>
  );
}

