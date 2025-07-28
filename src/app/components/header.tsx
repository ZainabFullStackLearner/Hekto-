'use client'
import { CiHeart } from "react-icons/ci";

import { BsCart2 } from "react-icons/bs";

import { LuPhoneCall } from "react-icons/lu";
import Link from "next/link";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { useCartStore } from "@/app/store/Cartstore";

const Header = () => {
  const cartCount = useCartStore((state) => state.cart.length);
  return(
<div className="max-w-[1920px] bg-[#7E33E0] md:h-[44px] h-[65px] text-white  md:flex-row flex-col flex justify-evenly items-center ">
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

</div>
<div className="text-[15px] items-center lg:flex flex-row gap-1 hidden">
  <h3 className="text-white"><a href="">Wishlist</a></h3>
<CiHeart className="text-white"/>
</div>
<Link href="/cart">
<BsCart2 className="text-white text-2xl flex "/>
{cartCount > 0 && (
          <span className="absolute -top-2 ml-[10px] bg-red-500 text-white text-xs px-2 py-1 rounded-full">
           {cartCount}
          </span>
        )}
</Link>
<div className="">
<SignedOut>
              <SignInButton />
             
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        
      </div>
</div>
</div>


















     
  )
}
export default Header;