import sofas from "../assets/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
import Image from "next/image";
export default function Discount() {
  return (
    <div className="mt-4">
      <section className="relative   bg-[#F1F0FF] px-4 py-4 ">
        <div className="max-w-screen-xl mx-auto flex gap-5 items-center lg:flex-row px-4 flex-col">
          <Image src={sofas} alt="Home products" className="w-[558px]" />
          <div className="flex flex-col gap-6">
            <h1 className="text-[#151875] font-bold text-[35px] font-josefin">
              Unique Features Of Latest &amp; <br /> Trending Products
            </h1>
            <ul className="flex flex-col gap-3 text-[#ACABC3]  font-lato">
              <li className="flex items-center font-lato">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dot text-[#F52B70]"
                >
                  <circle cx="12.1" cy="12.1" r="1"></circle>
                </svg>
                <span>
                  All frames constructed with hardwood solids and laminates
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dot text-[#2BF5CC]"
                >
                  <circle cx="12.1" cy="12.1" r="1"></circle>
                </svg>
                <span>
                  Reinforced with double wood dowels, glue, screw - nails corner{" "}
                  <br />
                  blocks and machine nails
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dot text-[#2B2BF5]"
                >
                  <circle cx="12.1" cy="12.1" r="1"></circle>
                </svg>
                <span>Arms, backs and seats are structurally reinforced</span>
              </li>
            </ul>
            <div className="flex gap-10 items-center ">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow  px-4 py-2 bg-[#FB2E86] 
              font-josefin text-white w-[157px] h-[47px] hover:bg-pink-500"
              >
                Add To Cart
              </button>
              <div className="">
                <h5 className="text-[#151875] font-josefin font-semibold text-[14px] f">
                  B&amp;B SOFA
                </h5>
                <p className="text-[#151875] font-josefin text-[14px]">
                  {" "}
                  $4400
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
