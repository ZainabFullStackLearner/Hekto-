"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCartStore } from "@/app/store/Cartstore";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    const shouldClear = searchParams.get("clear_cart");
    if (shouldClear === "true") {
      clearCart();
    }
  }, [searchParams, clearCart]);
  const router = useRouter();


  

 
  return (
    <div className="flex  font-josefin flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-blue-200 shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6">
          Payment Successful!🎉
        </h1>
        <p className="text-lg text-gray-700 mb-6 md:w-1/2 w-full mx-auto text-center">
          Your payment has been successfully processed. Thank you for your
          purchase. We are preparing your order for shipment.🚛
        </p>


          {/* Track Order Button */}
          <button
        onClick={() => router.push("/")}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </button>
        </div>
      </div>
  );
}
