import Image from "next/image";
import Sofa from "../app/assets/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1 (1).png";
import frame from "./assets/Rectangle 102.png";
import Chair from "./assets/image 1168.png";
import lamp from "./assets/image 32.png";
import Foot from "./components/footer";
import logos from "../app/assets/image 1174.png";
import Ellipse from "./assets/Ellipse 60.svg";
import ellip from "./assets/Ellipse 61.svg";
import design from "./assets/image 1162.png";
import chair2 from "./assets/image 20.png";
import Blog1 from "../app/assets/Frame 3.png";
import Blog2 from "./assets/2dcYhvbHV-M.png";
import Blog3 from "../app/assets/sss (2).png";
import drawer from "./assets/image 1161.png";
import Card from "./components/card";
import Card2 from "./components/card2";
import BlogCard from "./components/blog";
import ProductCard from "./components/roundcard";
import Support from "./components/support";
import Card3 from "./components/trending";
import trend1 from "./assets/image 1171.png";
import trend2 from "./assets/image 1170.png";
import trend3 from "./assets/image 1172.png";
import trend4 from "./assets/image 1173.png";
import sm from "./assets/image 30.png";
import srk from "./assets/image 19.png";
import rab from "./assets/image 28.png";
import Chair2 from "./assets/image 1.png";
import dis from "./assets/Vector 14.svg";
import bigsofa from "./assets/tortuga-01-b 1.png";
import Chair3 from "./assets/image 1169.png";
import Chair4 from "./assets/image 3.png";
import comfort2 from "./assets/image 15.png";
import comfort from "./assets/image 1166.png";
import comfort3 from "./assets/image 23.png";
import comfort4 from "./assets/image 1172.png";
import comfort5 from "./assets/image 3.png";
import car from "./assets/Group.png";
import sofas from "./assets/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
import support from "./assets/24-hours-support 1.png";
import quality from "./assets/premium-quality 1.png";
import cash from "./assets/cashback 1.png";


export default function Home() {
  return (
    <div className=" max-h-screen max-w-screen-2xl mx-auto">
      <div className="lg:h-[550px] bg-[#F2F0FF] relative top-[62px] h-[800px]">
        <div>
          <Image
            src={lamp}
            alt="lamp"
            className="relative w-[218px] hidden lg:flex lg:left-[40px] "
          />
          <div>
            <p className="absolute left-6 lg:left-[220px] leading-7 top-[40px] lg:top-[120px] text-[16px] font-lato font-bold text-[#FB2E86]">
              Best Furniture For Your Castle....
            </p>
            <h1 className="font-josefin text-black font-bold text-[33px] absolute top-[90px] left-6 lg:top-[160px] lg:left-[220px] lg:text-[43px] lg:leading-[60px] lg:h-[246px] lg:w-[644px]">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="absolute left-6 lg:left-[220px] leading-7 text-gray-700 top-[240px] lg:top-[310px] font-lato lg:w-[599px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
          </div>
          <Image
            src={ellip}
            alt="ellipse"
            className="absolute w-[300px] lg:w-[350px] top-[400px] lg:left-[810px] lg:top-[50px] md:top-[100px] "
          />
          {/* Second Image */}
          <Image
            src={Ellipse}
            alt="hello"
            className="absolute w-[350px] lg:w-[420px] top-[400px] lg:left-[810px] lg:top-[50px]"
          />
          <Image
            src={Sofa}
            alt="sofa"
            className="absolute w-[320px] lg:w-[380px] top-[400px] lg:left-[840px] lg:top-[70px]"
          />
          <Image
            src={dis}
            alt="value"
            className=" absolute w-[100px]  lg:top-[60px] top-[370px] left-[270px] lg:left-[1134px]"
          />
          <p className=" absolute font-josefin lg:top-[80px] top-[390px] left-[300px] lg:left-[1164px] text-white font-bold text-[20px]">
            50% <br />
            off
          </p>

          <button className="bg-[#FB2E86] px-4 py-2 text-white text-[14px] relative top-[341px] left-7 lg:top-[191px] lg:left-[210px] rounded-lg hover:bg-pink-400">
            Shop Now
          </button>
          <div className="flex">
            <p className="w-2 h-2 rotate-45 bg-[#FB2E86] relative top-[750px] left-[150px] lg:top-[250px] lg:left-[575px]"></p>
            <p className="w-2 h-2 rotate-45 border border-[#FB2E86] relative top-[750px] left-[154px] lg:top-[250px] lg:left-[580px]"></p>
            <p className="w-2 h-2 rotate-45 border border-[#FB2E86] relative top-[750px] left-[158px] lg:top-[250px] lg:left-[585px] md:top-[300px]"></p>
          </div>
        </div>
        <div className="">
          <h1 className=" absolute top-[850px] font-josefin text-[33px] font-bold lg:text-[42px] lg:top-[600px] left-[20px] text-center lg:left-[450px] text-[#1A0B5B]">
            Featured Products
          </h1>
          <div className="container mx-auto px-4 absolute top-[900px] left-[30px] lg:top-[670px]">
            {/* Responsive Wrapper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 ">
              <Card
                image={Chair}
                title="Cantilever chair"
                code="Code - Y523201"
                price="$42.00"
              />
              <Card
                image={Chair2}
                title="Cantilever chair"
                code="Code - Y523202"
                price="$42.00"
              />
              <Card
                image={Chair3}
                title="Cantilever chair"
                code="Code - Y523203"
                price="$65.00"
              />
              <Card
                image={Chair4}
                title="Cantilever chair"
                code="Code - Y523204"
                price="$75.00"
              />
            </div>
            <div className="w-[19px] h-1 bg-[#FB2E86] top-[1520px] absolute left-[135px] lg:left-[600px] lg:top-[375px]"></div>
            <div className="w-4 h-1  bg-pink-400 absolute top-[1520px] left-[159px] lg:left-[630px] lg:top-[375px]"></div>
            <div className="w-4 h-1  bg-pink-400 absolute top-[1520px] left-[180px] lg:left-[660px] lg:top-[375px]"></div>
            <div className="w-4 h-1  bg-pink-400 absolute top-[1520px] left-[200px] lg:left-[690px] lg:top-[375px]"></div>
          </div>
          {/*latest*/}
          <div className="">
            <h1 className="text-center absolute top-[2450px] lg:top-[1100px] md:top-[1690px] font-bold font-josefin text-[33px] lg:text-[42px]  text-[#1A0B5B] left-[65px] lg:left-[450px]">
              Latest Products
            </h1>
            <ul className="flex gap-10 font-lato justify-center relative top-[2470px]  md:top-[1730px] lg:top-[900px]">
              <li className="text-[#FB4997] underline decoration-[#FB4997] ">
                New Arrival
              </li>
              <li>Best Seller</li>
              <li>Featured</li>
              <li>Special Offer</li>
            </ul>
            <div className=" px-4 absolute top-[2600px]  lg:top-[1270px] md:top-[1870px]">
              {/* Responsive Wrapper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  rounded-lg gap-10">
                <Card2
                  image={comfort}
                  title="Comfort handy Craft"
                  price="$42.00"
                />
                <Card2
                  image={comfort2}
                  title="Comfort Handy Craft"
                  price="$44.00"
                />
                <Card2
                  image={Chair}
                  title="Comfort handy Craft"
                  price="$42.00"
                />

                <Card2
                  image={comfort3}
                  title="Comfort handy Craft"
                  price="$42.00"
                />
                <Card2
                  image={comfort4}
                  title="Comfort handy Craft"
                  price="$42.00"
                />
                <Card2
                  image={comfort5}
                  title="Comfort handy Craft"
                  price="$42.00"
                />
              </div>
            </div>
          </div>

          {/* Shopex Section */}
          <div className="absolute lg:top-[2000px] left-[30px] md:top-[3000px] top-[4800px]  ">
            {/* Section Title */}
            <h1 className="font-josefin text-[#151875] text-[29px] lg:text-[42px] font-bold text-center mt-12 lg:ml-32 ">
              What Shopex Offer!
            </h1>

            {/* Cards Container */}
            <div className="container mx-auto px-4 mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[9rem]">
                {/* Individual Support Cards */}
                <Support image={car} title="Car" heading="24/7 Support" />
                <Support image={cash} title="Cash" heading="24/7 Support" />
                <Support image={quality} title="Quality" heading="24/7 Support" />
                <Support image={support} title="Support"  heading="24/7 Support"/>
              </div>
            </div>
          </div>
          <div className="">
            <section className=" relative  top-[6300px] lg:top-[2250px] bg-[#F1F0FF] px-4 py-4 md:top-[3900px]">
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
                        All frames constructed with hardwood solids and
                        laminates
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
                        Reinforced with double wood dowels, glue, screw - nails
                        corner <br />
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
                      <span>
                        Arms, backs and seats are structurally reinforced
                      </span>
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
            {/*Trending*/}
            <div className="absolute lg:top-[3200px]  md:top-[5050px] top-[7330px] ml-[33px] ">
              {/* Section Title */}
              <h1 className="font-josefin text-[#151875] text-[29px] lg:text-[42px] font-bold text-center ">
                Trending Products
              </h1>

              {/* Cards Container */}
              <div className=" mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-11 md:grid-cols-2 lg:grid-cols-4">
                  {/* Individual Support Cards */}
                  <Card3 image={trend1} title="Chair" />
                  <Card3 image={trend2} title="chair" />
                  <Card3 image={trend3} title="chair" />
                  <Card3 image={trend4} title="chair" />
                </div>
              </div>
            </div>
            <div className="relative top-[8000px] lg:gap-[5rem]gap-5 lg:top-[2750px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:top-[4862px]">
              <div className="lg:w-[420px] h-[270px] bg-[#FFF6FB] shadow-lg">
                <div className="w-[269px] h-[56px] ml-[20px] mt-[26px]">
                  <h1 className="font-josefin text-[26px] text-centre text-[#151875]">
                    23% off in all products
                  </h1>
                  <p className="font-lato font-semibold text-[16px] underline decoration-solid text-[#FB2E86]">
                    Shop Now
                  </p>
                </div>
                <div className="">
                  <Image
                    src={design}
                    alt="clock"
                    className="absolute top-[62px] left-[175px]"
                  />
                </div>
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
                    className="absolute lg:top-[92px] lg:left-[535px]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="lg:w-[267px] h-[74px]">
                  <div className="w-[107px] h-[74px] bg-[#F5F6F8]">
                    <Image src={sm} alt="blog" className="ml-[20px]" />
                  </div>
                  <div className="flex flex-col text-[#151875]">
                    <h2 className="font-josefin text-center ml-[8rem] absolute lg:top-[21px] top-[600px] md:top-[300px]">
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
                    <h2 className="font-josefin text-center ml-[8rem] absolute lg:top-[103px] top-[683px] md:top-[400px]">
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
                    <h2 className="font-josefin text-center ml-[8rem] absolute lg:top-[196px] top-[773px] md:top-[490px]">
                      Executive Seat chair
                    </h2>
                    <p className="text-[12px] relative ml-[8rem] -mt-[29px] line-through decoration-solid">
                      $32.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="SOFA REPRESENTATION absolute top-[615rem] lg:top-[249rem] md:top-[410rem]">
          <h1 className="relative font-josefin font-bold text-[32px] text-[#151875] lg:left-[500px] lg:text-[42px] ">
            Discount Item
          </h1>
          <div className="w-[100%] sm:h-[595px] ">
            <ul className="flex gap-5 lg:text-[18px] text-[16px] font-lato text-[#151875] relative lg:left-[30.2rem] left-3">
              <li className="text-[#FB4997] underline decoration-[#FB4997]">
                Wood Chair
              </li>
              <li>Plastic Chair</li>
              <li>Sofa Collection</li>
            </ul>
            <div className=" relative  lg:top-[100px] lg:left-[220px]">
              <h1 className="font-josefin text-[25px] font-bold lg:text-[30px] text-[#151875]">
                20% Discount Of All Products
              </h1>
              <p className="text-[#FB4997] font-josefin  mt-5 mb-4">
                Eams Sofa Compact
              </p>
              <p className="text-[#B7BACB] text-base lg:w-[523px] font-lato md:w-[422px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-base text-[#B7BACB] font-lato mt-4">
                <li>✔ Material expose like metals</li>
                <li>✔ Simple neutral colours</li>
                <li>✔ Clear lines and geometric figures</li>
                <li>✔ Material expose like metals</li>
              </ul>
              <button className="bg-[#FB4997] px-5 py-2 text-white rounded text-[17px] mt-6">
                Shop Now
              </button>
            </div>
            <div className="lg:w-[450px] md:w-[272px] absolute top-[440px] lg:left-[800px] lg:top-[140px] md:left-[420px] md:top-[40px]">
              <Image src={Ellipse} alt="sofa" />
              <Image
                src={bigsofa}
                alt="sofa"
                className=" absolute top-[48px]"
              />
            </div>
          </div>
        </section>
      </div>
      {/*Round Card*/}
      <div className="absolute top-[10800px] lg:top-[4780px] md:top-[7120px] w-auto">
        <h1 className="text-[#151875] font-josefin font-bold text-[33px] lg:text-[42px] relative text-center text-nowrap lg:left-[90px]">
          Top Categories
        </h1>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative top-[60px] lg:left-[100px] left-8">
          <div>
            <ProductCard image={chair2} title="Mini LCW Chair" price="$56.00" />
          </div>
          <div className="mt-3 lg:mt-0">
            <ProductCard image={Chair} title="Mini LCW Chair" price="$56.00" />
          </div>
          <div className="mt-3 lg:mt-0">
            <ProductCard image={trend1} title="Mini LCW Chair" price="$56.00" />
          </div>
          <div className="mt-3 lg:mt-0">
            <ProductCard image={chair2} title="Mini LCW Chair" price="$56.00" />
          </div>
        </div>
      </div>

      <div className="absolute top-[12390px] lg:top-[5400px] md:top-[8000px] w-auto">
        <Image src={frame} alt="frame" className=" h-[150px] lg:h-full" />
        <div className="absolute top-[30px] lg:top-[100px] md:top-[50px] lg:left-[400px] md:left-[63px] ">
          <p className="font-josefin lg:text-[35px] text-[23px] text-[#151875] text-center font-bold lg:w-[574px] ">
            Get Leatest Update By Subscribe 0ur Newslater
          </p>
          <button className="bg-[#FB2E86] px-5 py-2 font-lato text-white rounded-md lg:left-[200px] relative top-[2px] left-[100px]">
            Shop Now
          </button>
        </div>
        <Image
          src={logos}
          alt="logo"
          className="lg:w-[900px] lg:ml-[200px] mt-11"
        />
      </div>
      <h1 className=" relative top-[11800px] md:top-[7460px] lg:top-[5330px] font-josefin font-bold text-[33px] lg:text-[42px] text-center  text-[#151875]">
        Leatest Blog
      </h1>
      <div className="absolute top-[12700px] lg:top-[6000px] md:top-[8370px]">
        <div className="  gap-8 lg:left-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          <BlogCard
            staticImage={Blog1}
            author="SaberAli"
            date="21 August, 2020"
            title="Top Essential Trends in 2021"
            description="More off this less hello samlande lied much over tightly circa horse taped mightily."
            link="/read-more"
          />
          <BlogCard
            staticImage={Blog2}
            author="SaberAli"
            date="21 August, 2020"
            title="Top Essential Trends in 2021"
            description="More off this less hello samlande lied much over tightly circa horse taped mightily."
            link="/read-more"
          />
          <BlogCard
            staticImage={Blog3}
            author="SaberAli"
            date="21 August, 2020"
            title="Top Essential Trends in 2021"
            description="More off this less hello samlande lied much over tightly circa horse taped mightily."
            link="/read-more"
          />
        </div>
        <div className="lg:mt-8"> <Foot /></div>
        
      </div>
    </div>
  );
}
