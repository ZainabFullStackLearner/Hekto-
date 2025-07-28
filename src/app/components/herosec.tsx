import Image from "next/image";
import Sofa from "@/app/assets/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1 (1).png";
import lamp from "@/app/assets/image 32.png";


function Hero() {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#f2f0ff] flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className=" md:hidden xl:block flex   flex-nowrap justify-center ">
        <Image
          src={lamp}
          alt="lamp"
          width={500}
          height={500}
          className="md:max-w-[250px] w-56 overflow-hidden"
        />
      </div>

      {/* Right Section */}
      <div className="flex z-50 flex-col md:flex-row font-josefin justify-center py-7 px-6 items-center w-full">
        {/* Text Content */}
        <div className="max-w-[400px] md:max-w-[644px] text-center md:text-left">
          <h3 className="text-[#FB2E86] font-lato font-[800] text-[18px] md:text-[22px]">
            Best Furniture For Your Castle....
          </h3>
          <h1 className="text-[35px] lg:text-[45px]  lg:leading-[81.98px] font-[600] mt-4 text-black">
            New Furniture Collection Trends in 2025
          </h1>
          <p className="font-lato text-[#8A8FB9] font-[700] text-[14px] md:text-[16px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <div className="mt-6">
          <button className="bg-[#FB2E86] px-5 py-2 text-white text-[14px] left-7 lg:top-[191px] lg:left-[210px] rounded-lg hover:bg-pink-400">
            Shop Now
          </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:max-w-[600px] mt-6 md:mt-0 flex justify-center">
          <Image
            className="w-[360px] md:w-[500px]"
            src={Sofa}
            width={2000}
            height={2000}
            alt="Sofa Header"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
