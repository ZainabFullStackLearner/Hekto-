"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/Cartstore";
import Foot from "@/app/components/footer";
import { useUser, SignInButton } from "@clerk/clerk-react";

export default function Cart() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCartStore();

  const { isSignedIn } = useUser(); // ✅ Clerk Auth check

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="h-[290px] bg-slate-100 relative top-[70px] font-josefin">
        <h1 className="font-josefin text-center text-black lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px]">
          Shopping Cart
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">Cart</h5>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 mt-8 bg-white">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 font-josefin text-2xl">
            Your cart is empty 😞
          </p>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 ">
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b border-gray-200 pb-4"
                >
                  <div className="col-span-2 flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <h3 className="text-[14px] font-semibold text-slate-800 font-josefin">
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-sm font-lato text-sky-600">
                    ${Number(item.price * item.quantity || 0).toFixed(2)}
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm font-lato text-blue-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="text-red-500 text-xs font-semibold hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                className="mt-6 bg-[#FB2E86] text-white px-4 py-2 rounded-md"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              <h1 className="text-lg mb-8 font-josefin text-[20px] font-bold text-center text-[#101750]">
                Cart Totals
              </h1>
              <div className="rounded-xl border bg-[#f4f2fc] p-6">
                <div className="space-y-8">
                  <div className="flex justify-between border-b pb-4">
                    <span className="font-medium text-[#101750]">Subtotal</span>
                    <span className="text-[#101750]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* ✅ Conditional Button based on sign in */}
                {isSignedIn ? (
                  <button
                    className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md"
                    onClick={() => router.push("/Checkout")}
                  >
                    Proceed to Payment
                  </button>
                ) : (
                  <SignInButton mode="modal" forceRedirectUrl="/Checkout">
                    <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md">
                      Sign In to Proceed
                    </button>
                  </SignInButton>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Foot />
    </div>
  );
}
