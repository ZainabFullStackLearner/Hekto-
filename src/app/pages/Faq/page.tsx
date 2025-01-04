
import React from "react";
import Foot from "@/app/components/footer"
export default function Faq (){
    return (
      <div>
        <div className="h-[290px] bg-[#F6F5FF] relative top-[70px] ">
          <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] text-[#101750] ">
            FAQ
          </h1>
          <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
            <h5 className="text-gray-500">Home .&nbsp;</h5>
            <h5 className="text-gray-500">Pages .&nbsp;</h5>
            <h5 className="text-[#FB2E86]">Faq</h5>
          </div>
        </div>
        <div className="relative">
  <div className="absolute lg:top-[100px] lg:ml-11 top-[100px]">
    <h1 className="font-josefin text-center lg:text-left text-[28px] lg:text-[34px] font-bold text-[#101750]">
      General Information
    </h1>
    <p className="font-bold mt-7 text-[#1D3178] font-josefin text-[17px]">
      Eu dictumst cum at sed euismood conditum?
    </p>
    <p className="font-lato text-[#A1ABCC] lg:w-[499px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
      tristique mollis vitae, consequat gravida sagittis.
    </p>
    <p className="font-bold mt-7 text-[#1D3178] font-josefin text-[17px]">
      Magna bibendum est fermentum eros.
    </p>
    <p className="font-lato text-[#A1ABCC] lg:w-[499px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
      tristique mollis vitae, consequat gravida sagittis.
    </p>
    <p className="font-bold mt-7 text-[#1D3178] font-josefin text-[17px]">
      Odio muskana hak eris conseekin sceleton?
    </p>
    <p className="font-lato text-[#A1ABCC] lg:w-[499px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
      tristique mollis vitae, consequat gravida sagittis.
    </p>
    <p className="font-bold mt-7 text-[#1D3178] font-josefin text-[17px]">
      Elit id blandit sabara boi velit gua mara?
    </p>
    <p className="font-lato text-[#A1ABCC] lg:w-[499px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
      tristique mollis vitae, consequat gravida sagittis.
    </p>
  </div>

  {/* Form Container */}
  <div
    className="absolute lg:top-[190px] lg:left-[25%] ml-[49%] transform -translate-x-1/2 lg:w-[560px] w-full top-[720px] bg-[#CDCEDC] border shadow-md lg:z-10"
  >
    <h1 className="font-josefin font-bold text-xl lg:text-2xl mt-4 mb-[43px] text-[#1D3178] text-center">
      Ask a Question
    </h1>
    <form className="space-y-8 p-7">
      <input
        placeholder="Your Name*"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#A1ABCC]"
        type="text"
      />
      <input
        placeholder="Subject*"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#A1ABCC]"
        type="text"
      />
      <textarea
        placeholder="Type Your Message*"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#A1ABCC]"
        rows={8}
        cols={7}
      ></textarea>
      <button className="bg-[#FB2E86] text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-[#f14d94] transition duration-200">
        Send Mail
      </button>
    </form>
  </div>
 </div>
    <div className="absolute top-[1710px] lg:top-[1200px]">
    <Foot/>
    </div>
      </div>
    );
}