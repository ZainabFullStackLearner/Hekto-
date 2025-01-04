// pages/blog.tsx
import Image from "next/image";
import client1 from "@/app/assets/bruce-mars-FWVMhUa_wbY-unsplash 2.png"
import client2 from "@/app/assets/bruce-mars-FWVMhUa_wbY-unsplash 3.png"
import client3 from "@/app/assets/bruce-mars-FWVMhUa_wbY-unsplash 4.png"
import Foot from "@/app/components/footer"
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiTwitterFill } from "react-icons/ri";
import image1 from "@/app/assets/Rectangle 126 (1).png";
import image2 from "@/app/assets/Rectangle 126 (2).png";
import image3 from "@/app/assets/Rectangle 126 (3).png";
import image4 from "@/app/assets/Rectangle 126 (4).png";
import React from 'react';
const items = [
    {
      id: 1,
      title: "It is a long established fact 1",
      date: "Aug 09 2020",
      image: image1, // StaticImageData
    },
    {
      id: 2,
      title: "It is a long established fact 2",
      date: "Aug 10 2020",
      image: image2,
    },
    {
      id: 3,
      title: "It is a long established fact 3",
      date: "Aug 11 2020",
      image: image3,
    },
    {
      id: 4,
      title: "It is a long established fact 4",
      date: "Aug 12 2020",
      image: image4,
    },
  ];
const BlogPage = () => {
  return (
    <div className="">
      <div className="h-[290px] bg-[#F6F5FF] relative top-[70px] mb-8">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] text-[#101750] ">
          Blog
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">Blog</h5>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto flex flex-wrap py-12">
        {/* Main Blog Section */}
        <div className="w-full lg:w-3/4 px-4">
          {/* Blog Post 1 */}
          <div className="mb-12">
            <Image
              src={client1}
              alt="A woman working on a laptop"
              className="rounded-lg lg:w-[700px]"
            />
            <div className="mt-4">
               <div className="flex space-x-4 text-sm text-[#151875] ">
             
                 <span>🖋Surf Auction</span>
                <span>📅Aug 09 2020</span>
             
              </div>
               <h3 className="text-2xl font-bold text-[#151875] font-josefin mt-2">
             
                Mauris at orci non vulputate diam tincidunt nec.
              </h3>
               <p className="text-gray-600 mt-2 font-lato lg:w-[850px]">
             
             
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque porta dignissim.
              </p>
               <a href="#" className=" mt-4 block font-josefin font-bold text-[#151875]">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="mb-12">
            <Image
              src={client2}
              alt="A woman looking at a field"
              className="rounded-lg lg:w-[700px]"
            />
            <div className="mt-4">
              <div className="flex space-x-4 text-sm text-[#151875] ">
                 <span>🖋Surf Auction</span>
                <span>📅Aug 09 2020</span>
             
              </div>
              <h3 className="text-2xl font-bold text-[#151875] font-josefin mt-2 ">
                Aenean vitae in aliquam ultrices lectus. Etiam.
              </h3>
               <p className="text-gray-600 mt-2 font-lato]">
             
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque porta dignissim.
              </p>
               <a href="#" className=" mt-4 block font-josefin font-bold text-[#151875]">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="mb-12">
            <Image
              src={client3}
              alt="A smiling woman in winter clothing"
              className="rounded-lg lg:w-[700px]"
            />
            <div className="mt-4">
              <div className="flex space-x-4 text-sm text-[#151875]">
                <span>🖋Surf Auction</span>
                <span>📅Aug 09 2020</span>
              </div>
               <h3 className="text-2xl font-bold text-[#151875] font-josefin mt-2">
             
                Sit nam congue feugiat nisl, mauris amet nisi.
              </h3>
               <p className="text-gray-600 mt-2 font-lato lg:w-[850px]">
             
             
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque porta dignissim.
              </p>
              <a href="#" className=" mt-4 block font-josefin font-bold text-[#151875]">
                Read More →
              </a>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex space-x-2 justify-center mt-8">
            <button className="text-purple-600 bg-purple-100 px-3 py-1 rounded-lg hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer">
              1
            </button>
            <button className="text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer">
              2
            </button>
            <button className="text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer">
              3
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 px-4 bg-slate-100">
          {/* Search */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mt-8">Search</h4>
            <input
              type="text"
              placeholder="Search for posts"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Categories</h4>
            <div className="flex gap-4">
  <ul className="space-y-2 text-gray-600">
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Women (9)
    </li>
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Men (4)
    </li>
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Kids (2)
    </li>
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Sale (19)
    </li>
  </ul>
  <ul className="space-y-2 text-gray-600">
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Women (9)
    </li>
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Men (4)
    </li>
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Kids (2)
    </li>
    <li className="hover:bg-[#FB2E86] hover:text-white transition duration-200 cursor-pointer p-2 rounded-md">
      Sale (19)
    </li>
  </ul>
</div>

          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Recent Posts
            </h4>
            <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Image
            src={item.image}
            alt={`Thumbnail for post ${item.id}`}
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div>
            <h5 className="text-gray-800 font-medium text-[14px] hover:text-[#FB2E86] transition duration-200">
              {item.title}
            </h5>
            <span className="text-sm text-gray-500">{item.date}</span>
          </div>
        </li>
      ))}
    </ul>
          </div>
          {/* sale posts */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
             Sale Product
            </h4>
            <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Image
            src={item.image}
            alt={`Thumbnail for post ${item.id}`}
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div>
            <h5 className="text-gray-800 font-medium text-[14px] hover:text-[#FB2E86] transition duration-200">
              {item.title}
            </h5>
            <span className="text-sm text-gray-500">{item.date}</span>
          </div>
        </li>
      ))}
    </ul>
          </div>


          {/* Follow */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Follow</h4>
            <div className="flex space-x-4">
              <a href="#">
                <TiSocialFacebook className="text-xl bg-purple-500 w-8 h-8 rounded-full text-white" />
              </a>
              <a href="#">
              <BiLogoInstagramAlt className=" text-[3px] bg-pink-500 w-8 h-8 rounded-full text-white" />
              </a>
              <a href="#">
                <RiTwitterFill className="text-[7px] bg-blue-500 w-8 h-8 rounded-full text-white" />
              </a>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Tags</h4>
            <div className="flex space-x-4 flex-wrap w-[228px]">
              <a href="#" className="text-[#151875] font-lato font-medium underline decoration-[#151875] hover:text-[#FB2E86] transition duration-200 hover:decoration-[#FB2E86]">
              General
              </a>
              <a href="#" className="text-[#151875] font-lato font-medium underline decoration-[#151875] hover:text-[#FB2E86] transition duration-200 hover:decoration-[#FB2E86]">
              Atsanil
              </a>
              <a href="#"  className="text-[#151875] font-lato font-medium underline decoration-[#151875] hover:text-[#FB2E86] transition duration-200 hover:decoration-[#FB2E86]">
              Insas.
              </a>
              <a href="#"  className="text-[#151875] font-lato font-medium underline decoration-[#151875] hover:text-[#FB2E86] transition duration-200 hover:decoration-[#FB2E86]">
              Bibsaas
              </a>
              <a href="#" className="text-[#151875] font-lato font-medium underline decoration-[#151875] hover:text-[#FB2E86] transition duration-200 hover:decoration-[#FB2E86]">
              Nulla.
              </a>
            </div>
          </div>
               
         </aside>
      </div>

      {/* Footer */}
      <Foot />
    </div>
  );
};

export default BlogPage;