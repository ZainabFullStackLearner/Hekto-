
import Image, { StaticImageData } from "next/image";
interface Trending{
    image:string|StaticImageData;
    title:string
}
const Card3: React.FC<Trending> =({
    image,
    title,
})=>{
    return(
        <div className="w-[270px] h-[350px] bg-white shadow-xl shadow-gray-400">
        <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
        <Image
        src={image}
        alt={title}
        width={197}
        height={189}
        className=" mt-[30px] ml-[25px] group-hover:scale-105 transition-transform duration-300"
        />
        </div>
    <div className="w-[112px] h-[48px] mt-[20px] ml-[79px]">
      <h2 className=" w-[112px] h-[26px]  font-lato leading-[25.6px] text-centre text-[16px] text-[#151875]">Cantilever chair</h2>
       <div className=" flex flex-row w-[92px] h-[14px] gap-2 ">
        <h3 className="font-josefin text-center w-[43px] h-[14px] text-[14px] text-[#151875]">$26.00 </h3>
        <h4 className="font-josefin text-[12px] w-[37px] h-[12px] line-through decoration-[#1518754D]">$42.00</h4>
       </div>
    </div>
    </div>

    )
}
export default Card3