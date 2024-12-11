import React from "react";
import locale from "../assets/Locale.svg";

const Footer = () => {
  // Reusable classes
  const listItemClass = "mr-[2.5rem]";
  const textColorClass = "text-[#6A6A6A]";
  const containerGapClass = "gap-[2rem]";

  return (
    <div
      className={`py-[3rem] px-[1.5rem] border-t border-[#E0E0E0] mt-[3rem] flex flex-col-reverse lg:flex-row justify-between mb-[14rem] lg:mb-0  ${containerGapClass}`}
    >
      <ul
        className={`flex justify-start items-start text-[1.1rem] flex-wrap ${textColorClass} ${containerGapClass}`}
      >
        <li className={listItemClass}>
          <a href="">Support Hub</a>
        </li>
        <li className={listItemClass}>
          <a href="">Stay Safe</a>
        </li>
        <li className={listItemClass}>
          <a href="">Terms & Conditions</a>
        </li>
        <li className={listItemClass}>
          <a href="">Privacy and Cookies Policy</a>
        </li>
        <li className={listItemClass}>
          <a href="">Returns & Refunds</a>
        </li>
      </ul>
      <div className={`flex items-center ${containerGapClass}`}>
        <img src={locale} alt="" className="h-[2.5rem] w-[2.5rem] rounded" />
        <span className={`text-[1.3rem] font-semibold ${textColorClass}`}>
          EN / USD
        </span>
      </div>
    </div>
  );
};

export default Footer;
