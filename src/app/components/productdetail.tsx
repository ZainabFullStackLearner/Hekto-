"use client"; // Must be a client component

import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "@/app/store/Cartstore"; // Zustand store
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export default function ProductDetailsClient({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    // Show Toast Notification
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="container mx-auto px-4 lg:px-20 font-josefin">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg">
        {/* Product Image */}
        <div className="flex flex-row gap-4 md:gap-9 items-center md:w-[50%]">
          <div className="relative shadow-xl">
            <Image src={product.image} width={350} height={350} alt={product.name} />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-[#151875] pt-11">{product.name}</h3>
          <div className="flex items-center space-x-2 text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaStarHalfAlt />
            <span className="text-gray-600 text-sm">(22)</span>
          </div>
          <span className="text-xl font-semibold text-[#151875]">${product.price}</span>
          <p className="text-gray-600">{product.description}</p>

          {/* Add to Cart Button */}
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 flex items-center"
            >
              <FaShoppingCart className="mr-2" /> Add To Cart
            </button>
            <p className="font-bold mt-7 text-[#1D3178] font-josefin text-[20px]">
              Categories: <span className="text-red-400">{product.category}</span>
            </p>
          </div>
        </div>
        
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
