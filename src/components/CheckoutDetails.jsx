import React from "react";
import { FaCheck } from "react-icons/fa6";
import PaymentBtn from "./PaymentBtn";

const CheckoutDetails = () => {
  return (
    <div className=" flex flex-col min-w-[34%] ">
      <div className="p-[1.6rem] mb-[1rem] bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg">
        <label
          className="text-[#212121] font-bold text-[1.4rem] "
          htmlFor="enter"
        >
          Enter your email. We need it to send you the order.
        </label>
        <input className="block w-full h-[4.2rem] px-[1.5rem] pr-[3.8rem] border border-gray-200  text-[1.4rem] leading-4 outline-none transition-colors duration-100 rounded-md " />
      </div>

      <div className="p-[1.5rem] flex items-center  border border-[#BD97F4] rounded-md bg-white ">
        <div>
          <p className="text-[#212121] font-bold text-[1.4rem]">
            Save more than others, join G2A Plus
          </p>
          <ul className="text-[1.2rem]">
            <li className="flex items-center  ">
              <FaCheck className="text-[#6202EA] mr-2" />
              Game, DLC and Random keys are cheaper
            </li>
            <li className="flex items-center">
              <FaCheck className="text-[#6202EA] mr-2" />
              Discount codes have a higher value
            </li>
            <li className="flex items-center">
              <FaCheck className="text-[#6202EA] mr-2" />
              Monthly present is a thing
            </li>
          </ul>
        </div>
      </div>

      <PaymentBtn />

      <div className="flex justify-center items-center p-3 w-[100%] ">
        <button className="text-[#2f82fb] text-[1.4rem] font-bold py-[3rem]  ">
          Add a discount code
        </button>
      </div>

   
    </div>
  );
};

export default CheckoutDetails;
