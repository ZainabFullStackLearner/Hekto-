import React from 'react';
import Foot from "@/app/components/footer"
const OrderCompleted = () => {
  return (
    <div className="font-josefin w-full ">
      {/* Breadcrumb */}
      <div className="h-[290px] bg-[#F6F5FF] relative top-[70px] ">
          <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] text-[#101750] ">
            Order Completed
          </h1>
          <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
            <h5 className="text-gray-500">Home .&nbsp;</h5>
            <h5 className="text-gray-500">Pages .&nbsp;</h5>
            <h5 className="text-[#FB2E86]">Order completed</h5>
          </div>
        </div>

      {/* Main Content */}
      <div className="bg-white shadow-md rounded-lg py-10 px-6 sm:px-12 text-center">
        {/* Checkmark Icon */}
        <div className="mx-auto w-20 h-20 flex items-center justify-center bg-pink-100 rounded-full mb-6 mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12 text-pink-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 8.5A9.5 9.5 0 1112 2.5a9.5 9.5 0 0111 11z" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Your Order Is Completed!</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 text-wrap lg:w-[625px] text-center lg:ml-[300px]">
          Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
          You will receive an email confirmation when your order is completed.
        </p>

        {/* Continue Shopping Button */}
        <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out">
          Continue Shopping
        </button>
      </div>
<Foot/>
     
    </div>
  );
};

export default OrderCompleted;