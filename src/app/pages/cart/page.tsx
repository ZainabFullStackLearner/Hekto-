import Image from "next/image";
import cart1 from "@/app/assets/Rectangle 34.png"
import cart2 from "@/app/assets/Rectangle 35.png"
import cart3 from "@/app/assets/Rectangle 36.png"
import cart4 from "@/app/assets/Rectangle 37.png"
import cart5 from "@/app/assets/Rectangle 38.png"
import Foot from "@/app/components/footer";



export default function Cart() {
return (
  <div>
    <div className="h-[290px] bg-[#F6F5FF] relative top-[70px]">
      <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] md:text-center ">
        Shopping Cart
      </h1>
      <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
        <h5 className="text-gray-500">Home .&nbsp;</h5>
        <h5 className="text-gray-500">Pages .&nbsp;</h5>
        <h5 className="text-[#FB2E86]">shopping cart</h5>
      </div>
    </div>
    <div className="container mx-auto px-4 py-16 mt-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <div className="hidden md:grid md:grid-cols-5 gap-4 font-josefin text-[20px] font-bold text-[#101750] text-sm  mb-4 ">
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b border-gray-200 pb-4">
              <div className="col-span-2 flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-gray-100">
                  <Image src={cart1} alt="cart1" />
                </div>
                <div>
                 <h3 className=" text-[14px] font-semibold">
                    Wireless Bluetooth Headphones
                  </h3>
                  <p className="text-sm text-gray-500 font-lato">Color: Brown
                    <br />
                    Size:XL
                  </p>
                </div>
              </div>

              <div className="text-sm">
                <span className="md:hidden font-medium text-gray-500 font-josefin">
                  Price:{" "}
                </span>
                $ 32.00
              </div>
              <div>
                Quantity: <span>2</span>
              </div>
              <div className="text-sm font-lato">
                <span className="md:hidden font-medium text-[#15245E]">
                  Total:{" "}
                </span>
                &#163;3999
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b border-gray-200 pb-4">
              <div className="col-span-2 flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-gray-100">
                  <Image src={cart2} alt="cart2" />
                </div>
                <div>
                 <h3 className=" text-[14px] font-semibold">Gaming Laptop</h3>
                  <p className="text-sm text-gray-500 font-lato">Color: Brown
                  <br />
                  Size:XL
                  </p>
                </div>
              </div>
              <div className="text-sm">
                <span className="md:hidden font-medium text-gray-500">
                  Price:{" "}
                </span>
                $32.00
              </div>
              <div>
                Quantity: <span>2</span>
              </div>
              <div className="text-sm">
                <span className="md:hidden font-medium text-[#15245E]">
                  Total:{" "}
                </span>
                &#163;99999
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b border-gray-200 pb-4">
              <div className="col-span-2 flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-gray-100">
                  <Image src={cart3} alt="cart3" />
                </div>
                <div>
                 <h3 className=" text-[14px] font-semibold">Men&lsquo;s Casual Sneakers</h3>
                  <p className="text-sm text-gray-500 font-lato">Color: Brown
                    <br />
                    Size:XL
                  </p>
                </div>
              </div>
              <div className="text-sm">
                <span className="md:hidden font-medium text-gray-500">
                  Price:{" "}
                </span>
                $ 32.00
              </div>
              <div>
                Quantity: <span>2</span>
              </div>
              <div className="text-sm text-[#15245E]">
                <span className="md:hidden font-medium ">
                  Total:{" "}
                </span>
                &#163;2999
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b border-gray-200 pb-4">
              <div className="col-span-2 flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-gray-100">
                  <Image src={cart4} alt="cart4" />
                </div>
                <div>
                  <h3 className=" text-[14px] font-semibold">Digital Wrist Watch</h3>
                  <p className="text-sm text-gray-500 font-lato">Color: Brown
                    <br />
                    Size:XL
                  </p>
                </div>
              </div>
              <div className="text-sm">
                <span className="md:hidden font-medium text-gray-500">
                  Price:{" "}
                </span>
                $ 32.00
              </div>
              <div>
                Quantity: <span>2</span>
              </div>
              <div className="text-sm text-[#15245E]">
                <span className="md:hidden font-medium ">
                  Total:{" "}
                </span>
                &#163;1999
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b border-gray-200 pb-4">
              <div className="col-span-2 flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-gray-100">
                  <Image src={cart5} alt="cart5" />
                </div>
                <div>
                 <h3 className=" text-[14px] font-semibold">Office Chair</h3>
                 <p className="text-sm text-gray-500 font-lato">Color: Brown
                    <br />
                    Size:XL
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#15245E]">
                <span className="md:hidden font-medium text-gray-500">
                  Price:{" "}
                </span>
                $ 32.00
              </div>
              <div>
                Quantity: <span>2</span>
              </div>
              <div className="text-sm text-[#15245E]">
                <span className="md:hidden font-medium text-gray-500">
                  Total:{" "}
                </span>
                &#163; 7999
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  font-josefin h-9 px-4 py-2 bg-[#FB2E86] text-white hover:bg-pink-500">
              Update Cart
            </button>
            <button className="inline-flex items-center justify-center gap-2 font-josefin rounded-md px-5 py-2 bg-[#FB2E86] text-white hover:bg-pink-500">
              Clear Cart
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <h1 className="text-lg mb-8   font-josefin text-[20px] font-bold text-center text-[#101750]">
            Cart Totals
          </h1>
          <div className="rounded-xl border text-card-foreground bg-[#f4f2fc] shadow-none outline-none border-none">
            <div className="p-6">
              <div className="space-y-8">
                <div className="flex justify-between border-b-gray-300 border-b pb-4">
                  <span className="font-medium text-[#101750]">Subtotal</span>
                  <span className="text-[#101750]">$4000</span>
                </div>
                <div className="flex justify-between border-b-gray-300 border-b pb-4 font-medium">
                  <span>Total</span>
                  <span>$5000</span>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id=""
                    className="accent-[#19D16F] text-white"
                    name=""
                  />
                  <h5 className="text-[#8A91AB] font-lato text-[12px]">
                    Shipping and taxes calculating at checkout time
                  </h5>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-josefin h-9 px-4 py-2 w-full bg-[#19D16F] text-white hover:bg-[#19D46F] mt-8">
                Proceed to checkout
              </button>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg my-8   font-josefin text-[20px] font-bold text-center text-[#101750]">
              Calculate Shipping
            </h1>
            <div className="space-y-10 mt-4 bg-[#f4f2fc] p-6">
              <input
              className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pb-4"
              placeholder="Enter your City"
              />
              <input
              className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pb-4"
              placeholder="Enter your address"
              />
              <input
              className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-b"
              placeholder="Enter your postal code"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 w-[179px] bg-[#FB2E86] hover:bg-pink-500 font-josefin text-white">
              Calculate Shipping
              </button>
            </div>
          </div>
          </div>
        </div>
       
      </div>
      <Foot/>
    </div>
  
);
}