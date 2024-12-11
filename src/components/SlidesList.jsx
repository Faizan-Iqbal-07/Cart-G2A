import React from "react";
import GTA from "../assets/GTA.avif";
import { AiOutlineShoppingCart } from "react-icons/ai";

const SlidesList = () => {
  return (
    <div>
      <span className="uppercase text-[1rem]">OFFER FROM: Sirgames</span>

      <div className="border border-[#e0e0e0] rounded-lg max-w-[17rem] max-h-[40rem]   bg-[#ffffff]   group ">
        <a
          href="https://www.g2a.com/no-mans-sky-steam-key-global-i10000016743015?suid=a282640c-be48-48d2-a323-04f6fb955965"
          target="_blank"
        >
          <div className="pb-[0.6rem]  ">
            <img src={GTA} alt="GTA" />
          </div>
          <div className="pt-[0.8rem] px-[1.5rem] pb-[1.6rem]  ">
            <span className="text-[1.4rem] font-bold ">
              Left 4 Dead 2 (PC) - Steam Account - GLOBAL
            </span>

            <div className="  flex justify-between w-full font-bold pt-[5.5rem]  ">
              <span className="text-[#212121] text-[1.8rem] ">$ 11.68</span>
              <button className="flex justify-center items-center translate-y-[-1rem] ">
                <AiOutlineShoppingCart className="text-[2rem] text-[#ffffff] w-[4.2rem] h-[4.2rem] p-[0.8rem] bg-[#2f82fb] rounded-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700 ease-in-out" />
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SlidesList;
