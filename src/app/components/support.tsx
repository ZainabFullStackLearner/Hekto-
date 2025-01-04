
import Image, { StaticImageData } from "next/image";
interface Cards{
    image:string|StaticImageData;
    title:string
    heading?:string
}
const Support:  React.FC<Cards> = ({
    image,
    title,
    heading
})=>{
    return(
  <div className="w-[270px] h-[320px] group relative shadow-xl rounded-lg">
       <div className="w-[65px] h-[65px]">
           <Image
            src={image}
            alt={title}
         className="group-hover:scale-105 transition-transform duration-300 relative top-[50px] left-[100px] lg:left-[80px] md:left-[90px]"
          />
        </div>
        <div className="w-[217px] h-[227px]  relative top-[60px] ">
            <h1 className="font-josefin text-[22px] text-[#151875] font-bold relative left-[70px] lg:left-[40px] md:left-[80px]">{heading}</h1>
            <div className="w-[217px] h-[85px] ">
              <p className="font-lato font-bold text-slate-400 leading-[25.6px] text-center text-[16px] relative top-[10px] left-[21px] lg:left-[2px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Massa purus gravida.</p>
            </div>
        </div>


  </div>

    )
}
export default Support;
    