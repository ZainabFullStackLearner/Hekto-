import React from "react";
import Image from "next/image";
import call from "@/app/assets/Group 124.png"
import Foot from "@/app/components/footer";
export default function Contact() {
  return (
    <div>
      <div className="h-[290px] bg-[#F6F5FF] relative top-[70px] ">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] ">
          Contact Us
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">Contact Us</h5>
        </div>
      </div>
      <div className="relative lg:flex justify-around">
        <div className="lg:w-[550px] relative lg:top-[180px] top-[100px] lg:left-[50px]">
          <h1 className="lg:text-[37px] text-[25px] font-josefin font-bold text-[#151875]">
            Information About us
          </h1>
          <p className="font-lato text-left text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="flex  flex-row gap-2 relative top-[30px] lg:top-[55px]">
            <span className="h-6 w-6 rounded-full bg-[#5625DF]"></span>
            <span className="h-6 w-6 rounded-full bg-[#FF27B7]"></span>
            <span className="h-6 w-6 rounded-full bg-[#37DAF3]"></span>
          </div>
        </div>
        <div className="p-4 relative top-[160px] lg:top-[150px]">
          <h1 className="lg:text-[37px] text-[25px] font-josefin font-bold text-[#151875] mb-2">
            Contact Way
          </h1>
          <div className="grid lg:grid-cols-2 items-center gap-6  lg:w-[550px] ">
            {/* Contact Information */}
            <div className="flex items-center space-x-4 ">
              <div className="w-11 h-11 rounded-full bg-[#5726DF]"></div>
              <div>
                <p className="text-[16px] text-gray-400">Tel: 877-67-88-99</p>
                <p className="text-[16px] text-gray-400 lg:text-nowrap">
                  E-Mail: shop@store.com
                </p>
              </div>
            </div>

            {/* Support Forum */}
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-full bg-[#FB2E86]"></div>
              <div>
                <p className="text-[16px] text-gray-400">Support Forum</p>
                <p className="text-[16px] text-gray-400">For over 24hr</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-full bg-[#FFB265]"></div>
              <div>
                <p className="text-[16px] text-gray-400 ">
                  20 Margaret st, London
                </p>
                <p className="text-[16px] text-gray-400 lg:text-nowrap">
                  Great Britain, 3NM98-LK
                </p>
              </div>
            </div>

            {/* Free Shipping */}
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-full bg-[#1BE982]"></div>
              <div>
                <p className="text-[16px] text-gray-400">
                  Free standard shipping
                </p>
                <p className="text-[16px] text-gray-400">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[250px]">
        <h1 className="lg:text-[37px] text-[25px] font-josefin font-bold text-[#151875] mb-2 ml-3">Get In Touch</h1>
        <p className="text-[16px] text-gray-400 lg:w-[550px] ml-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
        <div className="lg:flex  justify-around gap-10 ">
  {/* Form Section */}
  <form
    action="get"
    className="flex-1 min-w-0 text-slate-400 flex flex-col gap-6 pt-8 lg:w-[534px] ml-3"
  >
    {/* Input Fields */}
    <div className="flex flex-wrap gap-4">
      <input
        className="flex-1 h-9 rounded border bg-transparent px-3 py-1 text-base shadow-sm md:text-sm border-slate-400"
        placeholder="Your Name"
      />
      <input
        className="flex-1 h-9 rounded border bg-transparent px-3 py-1 text-base shadow-sm md:text-sm border-slate-400"
        placeholder="Your Email"
      />
    </div>
    <input
      className="w-full h-9 rounded border bg-transparent px-3 py-1 text-base shadow-sm md:text-sm border-slate-400"
      placeholder="Subject"
    />
    <textarea
      id="2"
      name="text"
      rows={5}
      className="border-slate-400 border max-h-[166px] w-full p-2"
      placeholder="Your Message"
    ></textarea>
    <button
      className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 w-[157px] font-josefin bg-[#FB2E86] text-white hover:bg-pink-500"
      type="submit"
    >
      Send Mail
    </button>
  </form>

  {/* Image Section */}
  <div className=" lg:w-[700px] lg:-mt-[150px]">
    <Image
      src={call}
      alt="contact"
      className="object-fill  "
    />
  </div>
</div>
<Foot/>
      </div>
    </div>
  );
}
