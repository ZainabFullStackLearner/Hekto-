import logos from "@/app/assets/image 1174.png";
import Image from "next/image";
export default function Foot(){
    return(
        <div>
            <Image src={logos} alt="logos"/>
        <div className="py-14 bg-[#EEEFFB] mt-6 flex justify-center font-josefin">
            
            <div className="text-[#8A8FB9] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-full px-6 lg:px-20"><div>
                
                <div className="bg-white flex items-center my-6 w-full max-w-[325px] rounded-md overflow-hidden">
                    <input type="text" placeholder="Enter Email Address" className="outline-none px-4 py-2 flex-grow text-sm w-[calc(100%-80px)]"/>
                <button className="inline-flex items-center justify-center gap-2 
                whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#FB2E86] 
                text-destructive-foreground shadow-sm hover:bg-[#FB2E86]/90 h-9
                 px-3 py-2 text-sm text-white">Sign Up</button></div>
            <p className="text-sm font-semibold">Contact Info</p>
            <p className="text-sm mt-2">17 Princess Road, London, Greater London NW1 8JR, UK</p></div><div>
                <h1 className="text-lg font-semibold pb-6 text-black">Categories</h1>
                <div className="space-y-3"><p>Laptops &amp; Computers</p><p>Cameras &amp; Photography</p><p>Smart Phones &amp; Tablets</p><p>Video Games &amp; Consoles</p><p>Waterproof Headphones</p></div></div><div>
                    <h1 className="text-lg font-semibold pb-6 text-black">Customer Care</h1>
                    <div className="space-y-3"><p>My Account</p><p>Discount</p><p>Returns</p>
                    <p>Orders History</p><p>Order Tracking</p></div></div><div><h1 className="text-lg font-semibold pb-6 text-black">Pages</h1>
            <div className="space-y-3"><p>Blog</p>
            <p>Browse the Shop</p>
            <p>Category</p><p>Pre-Built Pages</p>
            <p>Visual Composer Elements</p>
        <p>WooCommerce Pages</p></div>
        </div>
        </div>
        </div>
        </div>
    )
    

    




}