import { CiHeart } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
export default function Header(){
  return(
<div className="bg-[#7E33E0] w-auto flex ">
  <div  className="text-[15px] items-center gap-6 flex lg:ml-[100px]">
    <div className="text-[15px] items-center md:flex hidden gap-1 ">
<CiMail  className="text-white m-1"/>
 <h3 className="text-white "><a href="">farooqamal124@gmail.com</a></h3>
</div>
<div className="text-[15px] items-center md:flex hidden gap-1">
<LuPhoneCall  className="text-white m-1"/>
 <h3 className="text-white "><a href="">03352087240</a></h3>
  </div>
  <div  className="items-center flex flex-row gap-4 lg:ml-[354px] ml-6">
<div className="text-[15px] items-center flex flex-row gap-1">
  <h3 className="text-white"><a href="">English</a></h3>
<RiArrowDropDownLine className="text-white text-xl"/>
</div>
<div className="text-[15px] items-center flex flex-row gap-1">
  <h3 className="text-white"><a href="">USD</a></h3>
<RiArrowDropDownLine className="text-white text-xl"/>
</div>
<Link href="+/login">
  <div className="text-[15px] items-center flex flex-row gap-1">
  <h3 className="text-white">Login</h3>
<RxPerson className="text-white"/></div></Link>
</div>
<div className="text-[15px] items-center lg:flex flex-row gap-1 hidden">
  <h3 className="text-white"><a href="">Wishlist</a></h3>
<CiHeart className="text-white"/>
</div>
<Link href="pages/cart">
<BsCart2 className="text-white text-[17px] flex "/>
</Link>
</div>
</div>


















     
  )
}