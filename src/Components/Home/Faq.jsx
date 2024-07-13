"use client";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b ${isOpen ? "bg-[#EBF5EC] rounded" : ""}`}>
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[16px] lg:text-lg font-medium text-start">{title}</p>

        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 ">
          <p
            className="text-[#263238] text-sm lg:text-[16px] font-normal"
          >
            {children}
          </p>
        </div>
      )}
    </div>
  );
};

const showFaq = [
  {
    title: "How can I start saving with iDealMart?",
    description:
      " Simply download the iDealMart app, browse through the latest deals and offers, add your chosen products to your cart, and proceed to checkout. Enjoy significant savings on your grocery purchases!",
  },
  {
    title: "What types of products can I find on iDealMart?",
    description:
      " Simply download the iDealMart app, browse through the latest deals and offers, add your chosen products to your cart, and proceed to checkout. Enjoy significant savings on your grocery purchases!",
  },
  {
    title: "Is there a cost to use iDealMart?",
    description:
      " Simply download the iDealMart app, browse through the latest deals and offers, add your chosen products to your cart, and proceed to checkout. Enjoy significant savings on your grocery purchases!",
  },
  {
    title: "How can grocery store owners benefit from iDealMart?",
    description:
      " Simply download the iDealMart app, browse through the latest deals and offers, add your chosen products to your cart, and proceed to checkout. Enjoy significant savings on your grocery purchases!",
  },
  {
    title: "How does iDealMart ensure the quality of the products?",
    description:
      " Simply download the iDealMart app, browse through the latest deals and offers, add your chosen products to your cart, and proceed to checkout. Enjoy significant savings on your grocery purchases!",
  },
  {
    title: "Can I track my orders on  iDealMart?",
    description:
      " Simply download the iDealMart app, browse through the latest deals and offers, add your chosen products to your cart, and proceed to checkout. Enjoy significant savings on your grocery purchases!",
  },
];

export const FaqItems = () => {
  return (
    <section className="md:w-[88%] lg:mx-auto mx-5 lg:flex justify-between mt-20  ">
      <div className="lg:w-1/2 mx-3 lg:mx-0">
        <h1 className="text-[#00AF91] text-sm font-bold uppercase">
          Have questions?
        </h1>
        <p className="text-[#263238] text-4xl leading-tight md:text-[56px] font-medium mt-4 md:w-8/12">
          We have 24/7 support available
        </p>

        <Button className="bg-[#00AF91] flex justify-center items-center gap-x-2 mt-10">
          {" "}
          <span className="text-[16px] font-medium lowercase">
            <span className=" uppercase">C</span>ontact{" "}
            <span className=" uppercase">S</span>upport
          </span>
          <IoArrowForwardSharp className="h-[18px] w-[18px]" />
        </Button>
      </div>

      <div className="lg:w-1/2 mt-8">
        <div className=" ">
          <div className="space-y-4">
            {showFaq?.map((faq, index) => (
              <Item key={index} title={faq?.title}>
                {faq?.description}
              </Item>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
