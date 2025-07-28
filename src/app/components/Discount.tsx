import Image from "next/image";
import bigsofa from "../assets/discountChair.png";

export default function DiscountedItem() {
    return (
      <section className="py-16 bg-white font-josefin">
      {/* Title */}
      <h2 className="text-[#151875] text-center text-[24px] sm:text-[42px] font-bold mb-4">
        Discount Item
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center items-center gap-6 flex-wrap text-sm text-gray-500 mb-6">
        <span className="font-lato underline cursor-pointer text-[#FB4997] text-[16px] sm:text-[18px]">
          Wood Chair
        </span>
        <span className="font-lato cursor-pointer text-[16px] sm:text-[18px]">
          Plastic Chair
        </span>
        <span className="font-lato cursor-pointer text-[16px] sm:text-[18px]">
          Sofa Collection
        </span>
      </div>

      {/* Content Section */}
      <div className="max-w-[1214px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-6 lg:px-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-[#151875] mb-4">
            20% Discount Of All Products
          </h3>
          <h2 className="text-[18px] sm:text-[21px] text-[#FB2E86] leading-[27.7px] mb-2">
            Eams Sofa Compact
          </h2>
          <p className="text-[#B8B8DC] mb-6 font-lato text-[14px] sm:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="flex flex-wrap text-start">
             <ul className=" font-lato pb-5 space-y-2 text-[#B8B8DC] text-[14px] sm:text-[16px]">
            <li > &#x2713; Material expose like metals</li>
            <li>&#x2713; Simple neutral colours</li>
            <li>&#x2713; Clear lines and geometric figures</li>
            <li>&#x2713; Material expose like metals</li>
          </ul>
          <ul className="font-lato pb-5  space-y-2 text-[#B8B8DC] text-[14px] sm:text-[16px]">
          <li>&#x2713; Clear lines and geometric figures</li>
          <li>&#x2713; Material expose like metals</li>
          </ul>
          </div>
         
          <div className="flex justify-center lg:justify-start">
          <button className="bg-[#FB2E86] px-5 py-2 text-white text-[14px] left-7  lg:left-[210px] rounded-lg hover:bg-pink-400">
Shop Now
</button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full max-w-md lg:max-w-[699px] mx-auto">
          <Image
            src={bigsofa}
            alt="Chair"
            width={1000}
            height={1000}
            className="rounded-full  w-full h-auto"
          />
        </div>
      </div>
    </section>
    );
}
