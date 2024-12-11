import React from "react";
import CartHeader from "./CartHeader";
import ProductPurchase from "./ProductPurchase";
import CheckoutDetails from "./CheckoutDetails";
import Gifts from "./Gifts";
import PaymentDis from "./PaymentDis";

const Section = () => {
  return (
    <section>
      <CartHeader />
      <div className="flex flex-col lg:flex-row justify-between gap-[2rem] ">
        <div className="min-w-[67%]">
          <ProductPurchase />
          <div className="hidden lg:block">
            <Gifts />
          </div>
        </div>

        <div className="min-w-[34%]">
          <CheckoutDetails />
          <div className="lg:hidden">
            <Gifts />
          </div>

          <PaymentDis />
          
        </div>
      </div>
    </section>
  );
};

export default Section;
