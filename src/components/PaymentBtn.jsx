import React from "react";

const PaymentBtn = () => {
  return (
    <div className="fixed lg:static w-full z-50 bottom-0 left-0 bg-[#FFFFFF] p-1 " >
    <div className="p-[1.6rem] bg-[#FFFFFF] border border-[#E5E7EB]  rounded-md mt-10 ">
      <div className="flex justify-between items-center  pb-[1.2rem]">
        <span className="text-[#000000] text-[1.4rem] font-bold ">
          Total price
        </span>
        <span className="font-bold text-[#212121] text-[2.2rem] ">$ 24.10</span>
      </div>
      <button className="text-[1.4rem] bg-[#2F82FB] rounded-lg text-[#ffffff]   h-[4.2rem] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#0868F3] font-bold w-full inline-flex items-center justify-center px-[3rem] ">
        Continue to Payment
      </button>
    </div>
    </div>
  );
};

export default PaymentBtn;
