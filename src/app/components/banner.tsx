import Image from "next/image";
import frame from "../assets/Rectangle 102.png";
import banner from "../assets/image 1174.png"
const Banner = () => {
  return (
    <div className="relative w-full  lg:h-[468px] h-[300px] font-josefin mb-7">
      {/* Background Image */}
      <Image
        src={frame} // Replace with your image path
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="z-0"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-10 ">
        <h1 className="text-[#151875] text-xl md:text-3xl lg:text-4xl font-bold mb-4">
          Get Leatest Update By Subscribe <br />
          0ur Newslater
        </h1>
        <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition">
          Shop Now
        </button>
        
      </div>
     
    </div>
  );
};

export default Banner;
