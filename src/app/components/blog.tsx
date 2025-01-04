import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface BlogCardProps {
  staticImage: StaticImageData; // Import static image directly
  author: string; // Author's name
  date: string; // Date of publication
  title: string; // Title of the blog
  description: string; // Short description of the blog
  link: string; // URL for "Read More"
}

const BlogCard: React.FC<BlogCardProps> = ({
  staticImage,
  author,
  date,
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Blog Image */}
      <div className="relative w-full h-auto">
        <Image
          src={staticImage}
          alt={title}
         
          className="rounded-t-lg object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">
        {/* Author and Date */}
        <div className="flex  text-[#151875] items-center text-sm  mb-3">
          <span className="mr-2">👤{author}</span>
          <span>📅 {date}</span>
        </div>

        {/* Blog Title */}
        <h3 className="text-lg font-semibold text-[#151875] mb-2 font-josefin mt-8 text-[18px] lg:text-[22px]">{title}</h3>

        {/* Blog Description */}
        <p className="text-sm text-gray-600 mb-4 text-[16px] font-lato leading-[30px]">{description}</p>

        {/* Read More Link */}
        <a
          href={link}
          className="text-sm text-[#151875]   font-lato underline font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
