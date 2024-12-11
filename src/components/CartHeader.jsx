import React from "react";

const CartHeader = () => {
  return (
    <div className="flex flex-col justify-between items-start lg:flex-row lg:items-center  pt-[4rem] pb-[3rem]">
      <h3 className="text-[#212121] text-[3.4rem]  mb-[2rem] lg:mb-[0.5rem]  font-bold">
        Your cart
      </h3>
      <div className="flex items-center	 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          color="#2F82FB"
          className="mr-[1rem]  "
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>

        <p className="text-[1.4rem] text-[rgba(0, 0, 0, 0.87)]">
          Complete the order - adding products to the cart does not mean booking.
        </p>
      </div>
    </div>
  );
};

export default CartHeader;
