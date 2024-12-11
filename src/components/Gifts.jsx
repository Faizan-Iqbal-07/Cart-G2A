import React from "react";
import mastercard from "../assets/mastercard.svg";
import paypal2 from "../assets/paypal2.svg";
import visa from "../assets/visa.svg";
import { RiGiftLine } from "react-icons/ri";
import { MdOutlineLockOpen } from "react-icons/md";

const Gifts = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-6  border-b border-[#e0e0e0] pb-[3rem]  ">
      <div className="flex basis-1/3 ">
        <RiGiftLine size={20} className="    text-[#41C303] mr-[1rem]" />
        <div className="   max-w-[23rem]	 ">
          <h6 className="text-[#6A6A6A] text-[1.4rem] font-bold mb-[0.5rem]">
            GIVE AS A GIFT
          </h6>
          <p className="inline text-[#757575]  text-[1.2rem] ">
            Buy a product and get a ready-to-download gift PDF.
          </p>
          <a
            href="https://supporthub.g2a.com/marketplace/en/Buying/give-as-gift-feature-on-g2a-marketplace"
            className="text-[#0868F3]  text-[1.2rem] "
            target="_blank"
          >
            Check how it works
          </a>
        </div>
      </div>

      <div>
        <div className="flex basis-1/3">
          <MdOutlineLockOpen size={20} className=" text-[#41C303] mr-[1rem]" />
          <div className="   max-w-[23rem] ">
            <h6 className="text-[#6A6A6A] text-[1.4rem] font-bold  mb-[0.5rem]">
              EASY & SECURE PAYMENTS
            </h6>
            <span className="flex justify-start  h-3	gap-4 ">
              <img src={visa} alt=" " />
              <img src={mastercard} alt="" />
              <img src={paypal2} alt="" />
              <span className="text-[#6A6A6A]  relative top-[-0.4rem]">
                and 30+ more
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
