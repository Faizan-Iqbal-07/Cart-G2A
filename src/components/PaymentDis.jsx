import React from "react";

const PaymentDis = () => {
  return (
    <div className="text-[#4a4a4a] text-[1.2rem] pt-[1rem] pb-[2.4rem] ">
      <span>
        By clicking “Continue to payment” I acknowledge I have read and agreed
        to
        <a
          href="https://www.g2a.com/terms-and-conditions"
          className="text-[#2f82fb]"
        >
          G2A.COM Terms &amp; Conditions
        </a>
        and
        <a href="https://www.g2a.com/privacy-policy" className="text-[#2f82fb]">
          G2A.COM Privacy Policy
        </a>
      </span>
    </div>
  );
};

export default PaymentDis;
