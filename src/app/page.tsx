import Banner from "./components/banner";
import Chair from "./assets/image 1168.png";
import Foot from "./components/footer";
import Offer from "./components/offer";
import chair2 from "./assets/image 20.png";
import Blog1 from "../app/assets/Frame 3.png";
import Blog2 from "./assets/2dcYhvbHV-M.png";
import Blog3 from "../app/assets/sss (2).png";
import Discount from "./components/trend";
import Card from "./components/abc";
import Card2 from "./components/card2";
import BlogCard from "./components/blog";
import ProductCard from "./components/roundcard";
import Support from "./components/support";
import Card3 from "./components/trending";
import trend1 from "./assets/image 1171.png";
import Hero from "./components/herosec";
import car from "./assets/Group.png";
import DiscountedItem from "./components/Discount";
import support from "./assets/24-hours-support 1.png";
import quality from "./assets/premium-quality 1.png";
import cash from "./assets/cashback 1.png";
import { client } from '../sanity/lib/client'; // Adjust the path to your Sanity client
 // Adjust the path to your Card component

interface CardProps {
  _id: string;
  name: string;
  image: string;
  price: number;
  stockLevel: number;
  category: string;
  discountPercentage: number;
}
async function getFeaturedProducts() {
  const query1 = `*[_type == "product" && isFeaturedProduct]{
    _id,
    name,
    "image": image.asset->url,
    price,
    stockLevel,
    category,
    discountPercentage
  }`;

  const featuredData1 = await client.fetch(query1);
  return featuredData1;
}
  
  
const query2 = ` *[_type == "product" && isLatestProduct == true]{
  _id,
  name,
  "image": image.asset->url,
  price,
  stockLevel,
  category,
  discountPercentage
}

`;
const latestProduct = await client.fetch(query2);

const query3 = ` *[_type == "product" && istrendingProduct]{
  _id,
  name,
  "image":image.asset->url,
  price,
  stockLevel,
  category,
  discountPercentage
}[0...12]`;
const trendingProduct = await client.fetch(query3);


export default async function Home() {
  const featuredData1 = await getFeaturedProducts();
return (
    <div className="mt-11 bg-white ">
      <Hero/>
     
        <div className=" ">
          <Card data={featuredData1} />
        </div>
        {/*latest*/}
        <div className=" px-4 relative">
          <Card2 data={latestProduct} />
        </div>
        {/* Shopex Section */}
        <div className="">
          {/* Section Title */}
          <h1 className="font-josefin text-[#151875] text-[29px] lg:text-[42px] font-bold text-center mt-12 lg:ml-32 ">
            What Shopex Offer!
          </h1>
          {/* Cards Container */}
          <div className="container mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-[7rem]">
              {/* Individual Support Cards */}
              <Support image={car} title="Car" heading="24/7 Support" />
              <Support image={cash} title="Cash" heading="24/7 Support" />
              <Support image={quality} title="Quality" heading="24/7 Support" />
              <Support image={support} title="Support"  heading="24/7 Support"/>
            </div>
          </div>
        </div>

        <Discount/>
        <Card3 data={trendingProduct} />
        <div className=""> 
          <Offer/>
        </div>
        <div className="">
          <DiscountedItem/>
        </div>
      
      {/*Round Card*/}
      <div className=" w-auto">
        <h1 className="text-[#151875] font-josefin font-bold text-[33px] lg:text-[42px] text-center text-nowrap ">
          Top Categories
        </h1>
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  mb-5">
          <div>
            <ProductCard image={chair2} title="Mini LCW Chair" price="$56.00" />
          </div>
          <div className="mt-3 lg:mt-0">
            <ProductCard image={Chair} title="Mini LCW Chair" price="$56.00" />
          </div>
          <div className="mt-3 lg:mt-0">
            <ProductCard image={trend1} title="Mini LCW Chair" price="$56.00" />
          </div>
          <div className="mt-3 lg:mt-0 mb-3">
            <ProductCard image={chair2} title="Mini LCW Chair" price="$56.00" />
          </div>
        </div>
      </div>
     <Banner/>
      <h1 className=" font-josefin font-bold text-[33px] lg:text-[42px] text-center  text-[#151875]">
        Latest Blog
      </h1>
      <div className="">
        <div className="gap-8 lg:left-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
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
        <Foot/>
        
      </div>
    </div>
  );
}
