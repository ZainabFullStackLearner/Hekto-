import Image from "next/image";
import drawer from "../assets/image 1161.png";
import design from "../assets/image 1162.png";
import sm from "../assets/image 30.png";
import srk from "../assets/image 19.png";
import rab from "../assets/image 28.png";
export default function Offer() {
    return(
        
        <div className="lg:gap-[5rem] gap-5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="lg:w-[420px] h-[270px] bg-[#FFF6FB] shadow-lg">
          <div className="w-[269px] h-[56px] ml-[20px] mt-[26px]">
            <h1 className="font-josefin text-[26px] text-centre text-[#151875]">
              23% off in all products
            </h1>
            <p className="font-lato font-semibold text-[16px] underline decoration-solid text-[#FB2E86]">
              Shop Now
            </p>
          </div>
          
            <Image
              src={design}
              alt="clock"
            
            />
         
        </div>
        <div className="lg:w-[420px] h-[270px] bg-[#EEEFFB] shadow-lg">
          <div className="w-[269px] h-[56px] ml-[20px] mt-[26px]">
            <h1 className="font-josefin text-[26px] text-centre text-[#151875]">
              23% off in all products
            </h1>
            <p className="font-lato font-semibold text-[16px] underline decoration-solid text-[#FB2E86]">
              View Collection
            </p>
          </div>
          <div className="">
            <Image
              src={drawer}
              alt="clock"
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="lg:w-[267px] h-[74px]">
            <div className="w-[107px] h-[74px] bg-[#F5F6F8]">
              <Image src={sm} alt="blog" className="" />
            </div>
            <div className="flex flex-col text-[#151875]">
              <h2 className="font-josefin text-center ml-[8rem] ">
                Executive Seat chair
              </h2>
              <p className="text-[12px] relative  ml-[8rem] -mt-[29px] line-through decoration-solid">
                $32.00
              </p>
            </div>
          </div>
          <div className="lg:w-[267px] h-[74px]">
            <div className="w-[107px] h-[74px] bg-[#F5F6F8] mt-4">
              <Image src={srk} alt="blog" className="ml-[20px]" />
            </div>
            <div className="flex flex-col text-[#151875] gap-[200px]">
              <h2 className="font-josefin text-center">
                Executive Seat chair
              </h2>
              <p className="text-[12px] relative  ml-[8rem] -mt-[29px] line-through decoration-solid">
                $32.00
              </p>
            </div>
          </div>
          <div className="lg:w-[267px] h-[74px]">
            <div className="w-[107px] h-[74px] bg-[#F5F6F8] mt-8">
              <Image src={rab} alt="blog" className="ml-[20px]" />
            </div>
            <div className="flex flex-col text-[#151875] ">
              <h2 className="font-josefin text-center ml-[8rem] ">
                Executive Seat chair
              </h2>
              <p className="text-[12px] relative ml-[8rem] -mt-[29px] line-through decoration-solid">
                $32.00
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}