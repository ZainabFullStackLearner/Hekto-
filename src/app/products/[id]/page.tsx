import { client } from "@/sanity/lib/client";
import Foot from "@/app/components/footer";
import RelatedProducts from "@/app/components/related";
import ProductDetailsClient from "@/app/components/productdetail"; // Import the Client Component

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

async function getProduct(id: string) {
  return client.fetch(
    `*[_type == "product" && _id == $id][0]{
        _id,
        name,
        description,
        "image": image.asset->url,
        price,
        category
      }`,
    { id }
  );
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product: Product | null = await getProduct(params.id);
  if (!product) return <p className="text-center text-xl">Product not found</p>;

  return (
    <div className="bg-white w-full">
      <div className="h-[290px] bg-[#F6F5FF] relative top-[70px] mb-8">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] text-[#101750]">
          Product Details
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">Product Details</h5>
        </div>
      </div>

      {/* Pass product data to Client Component */}
      <ProductDetailsClient product={product} />

      {/* Related Products & Footer */}
      <RelatedProducts />
      <Foot />
    </div>
  );
}
