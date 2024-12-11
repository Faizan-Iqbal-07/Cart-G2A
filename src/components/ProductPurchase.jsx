import React from "react";
import img from "../assets/img.webp";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductPurchase = () => {
  return (
    <div>
      <div className="border border-[#e0e0e0] rounded-lg bg-[#ffffff]  ">
        <div className="flex flex-col lg:flex-row text-[1rem]  justify-between  p-[1.5rem]">
          <div className="flex gap-1 ">
            <p className="text-[#B8B8B8] ">You are buying from </p>
            <a
              href="https://www.g2a.com/user/Kgamestrade"
              target="_blank"
              className="hover:underline text-[#757575]"
            >
              Kgamestrade
            </a>
          </div>
          <div className="flex gap-1 ">
            <p className="text-[#b8b8b8]">
              By buying from this seller you accept their
            </p>
            <a
              href="https://www.g2a.com/user/Kgamestrade/terms-and-conditions"
              target="_blank"
              className="hover:underline text-[#757575]"
            >
              Terms&conditions
            </a>
          </div>
        </div>

        <div className="border-t border-[#e0e0e0] py-[2rem] px-[1.6rem] flex flex-col lg:flex-row gap-9 justify-between">
          <div className="flex gap-6 ">
            <a href="https://www.g2a.com/no-mans-sky-steam-key-global-i10000016743015">
              <div className="max-w-[5.3rem] lg:max-w-[10rem]">
                <img src={img} alt="No Man's Sky" className="rounded" />
              </div>
            </a>
            <a
              className="text-[1.4rem] font-bold text-[#212121] "
              href="https://www.g2a.com/no-mans-sky-steam-key-global-i10000016743015"
            >
              No Man's Sky (PC) - Steam Key - GLOBAL
            </a>
          </div>

          <div className="flex items-center justify-between ">
            <div className=" flex items-center mr-[7.4rem] gap-2 ">
              <div className="border border-[#e0e0e0] rounded-lg w-[6.5rem] h-[4.2rem] py-[1rem] pl-[1.5rem] pr-[1rem] gap-1 text-[1.5rem]  ">
                <select name="numbers" id="numbers">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">2</option>
                  <option value="2">2</option>
                </select>
              </div>
              <RiDeleteBin6Line className="text-[1.6rem]  text-[#6A6A6A] " />
            </div>

            <div className="flex flex-col items-end">
              <p className="text-[1.8rem] font-bold ">$ 24.10</p>
              <p className="text-[1rem] text-[#B8B8B8] ">
                VAT inc. if applicable
              </p>
            </div>
          </div>
        </div>

        <div className="flex border-t border-[#e0e0e0] justify-between p-[1.5rem] ">
          <a
            href="https://www.g2a.com/user/Kgamestrade"
            className="text-[#2F82FB] text-[1.2rem] font-bold  hidden lg:inline-block "
          >
            Buy more from this seller
          </a>
          <div className="text-[1.4rem]  flex gap-3 ">
            <input
              type="checkbox"
              name="#212121"
              id=""
              className="text-[1.4rem] text-[#6A6A6A]  "
            />
            <label htmlFor="" className="text-[1.4rem] text-[#212121]">
              I'm buying it as a gift
            </label>
          </div>
        </div>
      
      </div>
        
    </div>
  );
};

export default ProductPurchase;
