'use client'
import React, { useEffect, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillGridFill } from "react-icons/bs";
import Foot from "@/app/components/footer";
import GridCard from "@/app/components/gridcard";
import { createClient } from "@sanity/client";
import Link from "next/link";
const client = createClient({
  projectId: "h21s50x0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

export default function Grid() {
  interface Product {
    _id: string;
    name: string;
    image: string;
    price: number;
    stockLevel: number;
    category: string;
    discountPercentage?: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && shopGrid == true]{
          _id,
          name,
          "image": image.asset->url,
          price,
          stockLevel,
          category,
          discountPercentage
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-full">
      {/* Header Section */}
     
      <div className="h-[290px] bg-[#F6F5FF] relative top-[70px]">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px]">
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
          <div>
            <h1 className="text-2xl text-[#151875] font-josefin font-bold mb-2">
              Ecommerce Accessories & Fashion Item
            </h1>
            <p className="text-sm text-gray-400">{products.length} results found</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <label htmlFor="perPage" className="text-sm font-lato text-[#3F509E]">Per Page:</label>
              <input id="perPage" className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sortBy" className="text-sm font-lato text-[#3F509E]">Sort By:</label>
              <select id="sortBy" className="p-1 border rounded text-sm font-lato focus:outline-none focus:ring-1 focus:ring-blue-500 text-[#3F509E]">
                <option value="bestMatch">Best Match</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="view" className="text-sm font-lato text-[#3F509E]">View:</label>
              <BsFillGridFill />
              <TfiMenuAlt />
              <input id="view" className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center text-gray-500 font-josefin font-bold">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">

      {products.map((product) => (
        <Link key={product._id} href={`/products/${product._id}`}>
          <GridCard
            key={product._id}
            image={product.image}
            title={product.name}
            price1={`$${product.price}`}
            price2={product.discountPercentage ? `$${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}` : undefined}
          />
        </Link>
      ))}
          </div>
        
        )}
      </div>
      
      {/* Footer Section */}
      <div className="mt-[100px]">
        <Foot />
      </div>
       
    </div>
  );
}
