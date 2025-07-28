
import Product5 from "@/app/assets/Rectangle 128.png";
import Product6 from "@/app/assets/Rectangle 130.png";
import Product7 from "@/app/assets/Rectangle 131.png";
import Product8 from "@/app/assets/Rectangle 133.png";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import React from "react";

const RelatedProducts = () => {
  // Array with static image imports
  const products = [
    {
      id: 1,
      title: "Mens Classic Jacket",
      price: "$43.00",
      image: Product8, // Use imported images
      rating: 4.5,
    },
    {
      id: 2,
      title: "Womens Fashion",
      price: "$67.00",
      image: Product5,
      rating: 4.8,
    },
    {
      id: 3,
      title: "Wolx Dummy Fashion",
      price: "$67.00",
      image: Product6,
      rating: 3,
    },
    {
      id: 4,
      title: "Top Wall Digital Clock",
      price: "$51.00",
      image: Product7,
      rating: 4.6,
    },
  ];

  return (
      <div>
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
    <section className="container mx-auto px-4 lg:px-20 py-8">
      <h3 className="text-2xl mb-6 font-bold text-[#151875]">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
             <div className="relative w-[270px] h-[320px]  mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md "
                />
              </div>
            <h4 className="text-lg font-medium text-[#151875]">{item.title}</h4>
            <div className="flex justify-between items-center mt-2">
              <span className="text-pink-500 font-bold">{item.price}</span>
              <div className="flex text-yellow-500">
                {[...Array(Math.floor(item.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {item.rating % 1 !== 0 && <FaStarHalfAlt />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default RelatedProducts;
