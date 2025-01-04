
import Image from "next/image";
import Product1 from"@/app/assets/Rectangle 138.png";
import Product2 from "@/app/assets/Rectangle 137.png";
import Product3 from "@/app/assets/Rectangle 136.png";
import Product4 from "@/app/assets/p0OlRAAYXLY.png";
import Product5 from "@/app/assets/Rectangle 128.png";
import Product6 from "@/app/assets/Rectangle 130.png";
import Product7 from "@/app/assets/Rectangle 131.png";
import Product8 from "@/app/assets/Rectangle 133.png";
import Foot from "@/app/components/footer"
import { FaStar, FaStarHalfAlt,  FaShoppingCart} from "react-icons/fa";
import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiTwitterFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

const ProductDetails = () => {
  return (
    <div className="bg-white w-full">
      {/* Product Details Section */}
      
      <div className="h-[290px] bg-[#F6F5FF] relative top-[70px] mb-8">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] text-[#101750] ">
          Product Details
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">Product details</h5>
        </div>
      </div>
      <section className="container mx-auto px-4 lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-8">
          {/* Product Images */}
          <div className="w-full lg:w-1/2 flex">
  {/* Sidebar with thumbnails */}
  <aside className="flex flex-col space-y-4 mr-4">
    <div className="w-24 h-24 relative">
            
      <Image
        src={Product2}
        alt="Thumbnail 1"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    <div className="w-24 h-24 relative">
            
      <Image
        src={Product3}
        alt="Thumbnail 2"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    <div className="w-24 h-24 relative">
      <Image
        src={Product4}
        alt="Thumbnail 3"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  </aside>

  {/* Main Product Image */}
  <div className="relative w-[370px] h-[320px]">
    <Image
      src={Product1}
      alt="Main Product"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
</div>


          {/* Product Details */}
          <div className="w-full lg:w-1/2 px-6">
            <h3 className="text-2xl font-semibold text-[#151875] font-josefin">Playwood Arm Chair</h3>
            <div className="flex items-center mt-2 mb-4">
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <span className="text-sm text-gray-600 ml-2">(22)</span>
            </div>
            <div className="text-lg font-semibold text-[#151875] mb-2">$32.00</div>
            <div className="text-sm line-through text-pink-500">$62.00</div>
            <p className="text-gray-400 my-4 font-josefin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus,
              eu volutpat sit.
            </p>
            <div className="mt-4">
              <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 flex items-center">
                <FaShoppingCart className="mr-2" /> Add To Cart
              </button>
            </div>
            <div className=" mt-6">
              <p className="font-bold mt-7 text-[#1D3178] font-josefin text-[20px]">Categories: </p>
              <p className="font-bold  text-[#1D3178] font-josefin text-[20px]">Tags: </p>
              <p className="flex items-center gap-2 font-bold mt-7 text-[#1D3178] font-josefin text-[20px]">
                Share:  <a href="#">
                <TiSocialFacebook className="text-xl bg-purple-500 w-5 h-5 rounded-full text-white" />
              </a>
              <a href="#">
              <BiLogoInstagramAlt className=" text-[3px] bg-pink-500 w-5 h-5 rounded-full text-white" />
              </a>
              <a href="#">
                <RiTwitterFill className="text-[7px] bg-blue-500 w-5 h-5 rounded-full text-white" />
              </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="container mx-auto px-4 lg:px-20 py-8 bg-[#F9F8FE]">
        <div className="flex justify-start lg:space-x-6 border-b-2 border-gray-300 text-wrap">
          <button className="text-lg font-semibold text-pink-500 pb-2 border-b-2 border-pink-500 space-x-2">
            Description
          </button>
          <button className="text-lg font-medium  pb-2 font-josefin text-[#151875]">Additional Info</button>
          <button className="text-lg font-medium  pb-2 font-josefin text-[#151875]"
            >Reviews</button>

          <button className="text-lg font-medium  pb-2 font-josefin text-[#151875]"
            >Video</button>
        </div>
        <div className="mt-6 text-gray-600">
        
          <p className="font-semibold text-[#151875] font-josefin mb-2 text-[22px]">Varius tempor.</p>
          <p className="text-gray-400 font-josefin">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, <br /> aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          <p className="font-semibold text-[#151875] font-josefin mb-2 text-[22px]">More details:</p>
          <ul className="list-disc list-inside text-gray-400 font-josefin">
            <li>Aliquam duis vulputate volutpat integer sagittis.</li>
            <li>Faucibus dolor ornare faucibus vel sed.</li>
            <li>Aliquam duis vulputate volutpat integer sagittis.</li>
            <li>Montes, mauris varius ac est et bibendum.</li>
          </ul>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="container mx-auto px-4 lg:px-20 py-8">
        <h3 className="text-2xl mb-6 font-bold text-[#151875]  font-josefin">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {[
            { name: "Men's Fashion Wear", price: "$6.00", image: Product5 },
            { name: "Women's Fashion", price: "$7.00", image: Product6 },
            { name: "Wok Dummy Fashion", price: "$8.00", image: Product7 },
            { name: "Top Wall Digital Clock", price: "$18.00", image: Product8 },
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="relative w-[270px] h-[320px]  mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md "
                />
              </div>
              <h4 className="text-lg font-medium  text-[#151875]  font-josefin">{product.name}</h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-pink-500 font-bold">{product.price}</span>
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </section>
      <Foot />
    </div>
  );
};

export default ProductDetails;