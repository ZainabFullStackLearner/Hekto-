import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  stockLevel: number;
  category: string;
  discountPercentage: number;
}

interface Props {
  data: Product[];
}

const Card3 = ({ data }: Props) => {
  console.log("Trending Products Data:", data);

  return (
    <div className="mx-auto text-center mb-6">
      <h1 className="font-josefin text-[#151875] text-[29px] lg:text-[42px] font-bold">
        Trending Products
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          No trending products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-11 mx-auto">
          {data.map((item) => (
            <Link key={item._id} href={`/products/${item._id}`}>
              <div className="w-[270px] h-[350px] bg-white shadow-xl shadow-gray-400">
                <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
                  <Image
                    src={item.image }
                    alt={item.name}
                    layout="responsive"
                    width={197}
                    height={189}
                    className="mt-[30px] ml-[25px] group-hover:scale-105 transition-transform duration-200 px-3 py-5 "
                  />
                </div>
                <div className="w-[112px] h-[48px] mt-[20px] ml-[79px]">
                  <h2 className="font-lato text-center text-[16px] text-[#151875] font-semibold">
                    {item.name}
                  </h2>
                  <div className="flex flex-row gap-2 pl-3">
                    <h3 className="font-josefin text-[#151875]">${item.price}</h3>
                    <h4 className="font-josefin text-[12px] pt-1  text-red-600 line-through decoration-[#1518754D]">
                     $ {item.discountPercentage}%
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card3;
