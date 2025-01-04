import Foot from '@/app/components/footer';

import ProductCard from '@/app/components/listcard';
import LIst1 from "@/app/assets/Rectangle 32.png";
import LIst2 from "@/app/assets/Rectangle 32 (1).png";
import LIst3 from "@/app/assets/Rectangle 32 (2).png";
import List4 from '@/app/assets/square (1).png';
import  List5 from "@/app/assets/square (2).png";
import List6 from "@/app/assets/square (3).png";
import List7 from "@/app/assets/square (4).png";
import React from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { TfiMenuAlt } from 'react-icons/tfi';

export default function List() {
    return (
      <div className="max-w-full">
        {/* Header Section */}
        <div className="h-[290px] bg-[#F6F5FF] relative top-[70px]">
          <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] md:text-center ">
            Shop List
          </h1>
          <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
            <h5 className="text-gray-500">Home .&nbsp;</h5>
            <h5 className="text-gray-500">Pages .&nbsp;</h5>
            <h5 className="text-[#FB2E86]">Shop List</h5>
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

        <div className='relative mt-[100px] px-8 flex-col '>
        <ProductCard
        image={LIst1}
        title="Accumsan tincidunt"
        price1="$26.00"
        price2="$52.00"
        rating={2}
        colors={["#FB2E86", "#FFC107", "#8B75D7"]}
      /> <br />
       <ProductCard
        image={LIst2}
        title="In nulla"
        price1="$26.00"
        price2="$52.00"
        rating={4}
        colors={["#FB2E86", "#FFC107", "#8B75D7"]}
      /> <br />
       <ProductCard
        image={LIst3}
        title="Vel sem"
        price1="$26.00"
        price2="$52.00"
        rating={3}
        colors={["#FB2E86", "#FFC107", "#8B75D7"]}
      />
       <ProductCard
        image={List4}
        title="Porttitor cum"
        price1="$26.00"
        price2="$52.00"
        rating={3}
        colors={["#FB2E86", "#FFC107", "#8B75D7"]}
      />
       <ProductCard
        image={List5}
        title="Nunc in"
        price1="$26.00"
        price2="$52.00"
        rating={3}
        colors={["#FB2E86", "#FFC107", "#8B75D7"]}
      />
       <ProductCard
        image={List6}
        title="Vitae facilisis"
        price1="$26.00"
        price2="$52.00"
        rating={3}
        colors={["#FB2E86", "#FFC107", "#8B75D7"]}
      />
       <ProductCard
        image={List7}
        title="Curabitur lectus"
        price1="$26.00"
        price2="$52.00"
        rating={3}
        colors={["#FB2E86", "#FFC107", "#8B75D7"]}
      />
       </div>
      
        </div>
        
        <Foot/>
        
        </div>
        )}





