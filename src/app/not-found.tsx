import Image from "next/image";
import not from "../app/assets/Group 123.png";
import Link from "next/link";
import Foot from "./components/footer";
export default function NotFound() {
  return (
    <div>
      <div className="h-[280px] bg-[#F6F5FF] relative top-[70px] w-auto">
        <h1 className="font-josefin relative  top-[71px] text-center lg:right-[171px] text-[26px] lg:text-[36px] font-bold ">
          404 Not Found
        </h1>
        <div className="font-lato flex absolute text-[16px] top-[121px] font-medium left-[100px] lg:left-[311px] text-center ">
          <h5 className="lg:left-[271px] text-center">Home .&nbsp;</h5>
          <h5>Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]"> 404 Not Found</h5>
        </div>
      </div>
      <div>
        <Image
          src={not}
          alt="abc "
          className="lg:ml-[150px] relative top-[40px] "
        />
        <button className="text-white bg-[#FB2E86] p-3 rounded-lg font-josefin relative top-[30px] left-[125px] hover:bg-pink-500 lg:left-[563px] ">
          <Link href="/">Back to Home</Link>
          
        </button>
      </div>
     

      <Foot />
    </div>
  );
}
