import React from 'react';
import Image from 'next/image';
import Group from "@/app/assets/Group 73.png"
import car from "@/app/assets/Group.png";
import support from "@/app/assets/24-hours-support 1.png";
import quality from "@/app/assets/premium-quality 1.png";
import cash from "@/app/assets/cashback 1.png";
import Support from '@/app/components/support';
import profilePic1 from "@/app/assets/GH-mSApoKO0.png";
import profilePic2 from "@/app/assets/OhKElOkQ3RE.png";
import Foot from '@/app/components/footer';
import profilePic3 from "@/app/assets/RukI4qZGlQs.png";
export default function About() {
    return(
<div>
<div className="h-[290px] bg-[#F6F5FF] relative top-[70px]">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] ">
         About Us
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">About Us</h5>
        </div>
      </div>
      <div>
<Image
src={Group}
alt='group' className='mt-[106px] w-[500px] lg:ml-5'/>
<div className='lg:flex-row lg:ml-[650px] lg:mt-[-330px] lg:w-[500px]'>
    <h1 className='font-josefin text-[#15245E] lg:text-[38px] text-[26px] font-bold mt-3'>Know About Our Ecomerce
    Business, History</h1>
    <p className='font-lato text-slate-400 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
    <button className='bg-[#FB2E86] text-white rounded px-4 py-2 mt-7'>Contact Us</button>
</div>
</div>
<div className='relative lg:top-[200px] md:top-[230px] top-[70px]'>
<h1 className='font-josefin text-center font-bold text-[26px] lg:text-[35px]'>Our Features</h1>
<div className="container mx-auto px-4 mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[5rem]">
                {/* Individual Support Cards */}
                <Support image={car} title="Car" heading='Free Delivery' />
                <Support image={cash} title="Cash" heading='100% Cash Back' />
                <Support image={quality} title="Quality" heading='Quality Product' />
                <Support image={support} title="Support" heading='24/7 Support'/>
              </div>
            </div>

</div>
<div  className='relative lg:top-[290px] md:top-[300px] top-[160px]'>
    <h1 className='font-josefin text-center font-bold text-[26px] lg:text-[35px]'>Our Client Say!</h1>
    <div className="flex flex-col items-center text-center py-10 lg:w-[680px]  relative lg:left-[330px]">
      <div className="flex space-x-4 mb-6">
        <div className="group overflow-hidden  w-20 h-20">
          <Image
            src={profilePic2}
            alt="Profile 1"
            className="w-full h-full object-cover transform group-hover:translate-y-[-10%] transition duration-300 ease-in-out"
          />
        </div>
        <div className="group overflow-hidden  w-20 h-20">
          <Image
            src={profilePic1}
            alt="Profile 2"
            className="w-full h-full object-cover transform group-hover:translate-y-[-10%] transition duration-300 ease-in-out"
          />
        </div>
        <div className="group overflow-hidden  w-20 h-20">
          <Image
            src={profilePic3}
            alt="Profile 3"
            className="w-full h-full object-cover transform group-hover:translate-y-[-10%] transition duration-300 ease-in-out"
          />
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2">Selina Gomez</h2>
      <p className="text-sm text-gray-500 mb-4">CEO at Webdev Digital</p>

      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultricies quam vel dui
        sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique
        ultrices dolor aliquam lacus volutpat praesent.
      </p>

      <div className="flex space-x-2">
        <span className="w-9 h-1 bg-pink-400 "></span>
        <span className="w-[65px] h-1 bg-pink-600"></span>
        <span className="w-9 h-1 bg-pink-400 "></span>
      </div>
    </div>
    <Foot/>
</div>

</div>



    )
}