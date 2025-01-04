import Foot from "@/app/components/footer";


export default function Login (){
    return (
      <div className="max-w-full mt-8">
         <div className="h-[290px] bg-[#F6F5FF] relative top-[70px]">
        <h1 className="font-josefin text-center lg:text-left lg:ml-[300px] text-[28px] lg:text-[36px] font-bold pt-[55px] ">
          My Account
        </h1>
        <div className="font-lato flex justify-center lg:justify-start lg:ml-[311px] text-[16px] font-medium">
          <h5 className="text-gray-500">Home .&nbsp;</h5>
          <h5 className="text-gray-500">Pages .&nbsp;</h5>
          <h5 className="text-[#FB2E86]">My Account</h5>
        </div>
      </div>
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center pt-24 px-4">
          <div className="rounded-xl border bg-card text-card-foreground flex flex-col gap-8 p-4 border-none outline-none shadow-lg sm:w-[50%]">
            <div className="">
              <div className="tracking-tight font-josefin text-[32px] font-bold text-center">
                Login
              </div>
              <div className="text-[#9096B2] text-center font-lato text-[17px]">
                Please login using account detail bellow
              </div>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <input
                  className="flex h-9 w-full rounded-md border bg-transparent px-3 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 text-gray-400 py-5"
                  placeholder="Email address"
                />
                <input
                  className="flex h-9 w-full rounded-md border bg-transparent px-3 text-base shadow-sm transition-colors  focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 md:text-sm border-gray-300 text-gray-400 py-5"
                  placeholder="Password"
                />
                <p className="text-[#9096B2] font-lato text-[17px]">
                  Forgot your Password&quest;
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  shadow h-9 px-4 py-2 w-full bg-[#FB2E86] hover:bg-[#FB4E86] text-white">
                  Sign in
                </button>
                <p className="text-[#9096B2] font-lato text-[17px]">
                  Don&comma;t have an account&quest; Create Account
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="mt-10">  <Foot/></div>
         
      </div>
    );
}