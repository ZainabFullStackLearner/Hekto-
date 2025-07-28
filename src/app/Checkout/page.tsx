"use client";

import { useCartStore } from "@/app/store/Cartstore";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useMemo } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "");

export default function Checkout() {
  const { cart, clearCart } = useCartStore(); // Removed totalAmount here
  const [loading, setLoading] = useState(false);

  // ✅ Calculate total manually
  const totalAmount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const handleCheckout = async () => {
    setLoading(true);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems: cart }),
    });

    const data = await response.json();
    if (data.sessionId) {
      const stripe = await stripePromise;
      if (stripe) {
        const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
        if (result.error) {
          console.error("Stripe error:", result.error.message);
        } else {
          clearCart();
        }
      }
    } else {
      console.error("Error:", data?.message || "An unexpected error occurred");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-cyan-400 to-slate-700 rounded-lg shadow-lg mt-[100px] max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold text-center text-white mb-6">
        Total: ${totalAmount.toFixed(2)}
      </h2>

      <button
        onClick={handleCheckout}
        className="w-full bg-white text-blue-500 font-semibold p-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300 disabled:opacity-50"
        disabled={loading || cart.length === 0}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-blue-500"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </div>
        ) : (
          "Proceed to Payment"
        )}
      </button>
    </div>
  );
}
