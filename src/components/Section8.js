import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-lg p-3 mb-4"
      style={{ border: "1px solid #f569dd" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold focus:outline-none"
      >
        <span>{question}</span>
        <IoIosArrowDropdownCircle
          size={28}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <>
          <hr className="my-4 border-t-2" style={{ borderColor: "#7828d6" }} />
          <p className="text-xs mt-4 font-light">{answer}</p>
        </>
      )}
    </div>
  );
};

const Section8 = () => {
  return (
    <div className="mx-auto px-[12%]">
      <div className="flex flex-col lg:flex-row text-white mt-[10%] lg:space-x-9">
        <div className="w-full  lg:w-[55%] text-left mb-8 lg:mb-0">
          <h4 className="text-normal mb-4">FAQs</h4>
          <h1 className="text-4xl font-semibold mb-4 capitalize">
            Frequently Asked Questions
          </h1>
          <div className="mt-8 text-sm">
            <FAQItem
              question="What happens after I Sign Up?"
              answer="While sometimes overlooked, FAQ pages are an important component of most customer support strategies and save time for both the customer and employee."
            />
            <FAQItem
              question="How can I reset my password?"
              answer="While sometimes overlooked, FAQ pages are an important component of most customer support strategies and save time for both the customer and employee."
            />
            <FAQItem
              question="Where can I find the user manual?"
              answer="The user manual is available in the 'Help' section of our website."
            />
            <FAQItem
              question="Can I upgrade my subscription?"
              answer="Yes, you can upgrade your subscription at any time from your account settings."
            />
            <FAQItem
              question="How do I contact support?"
              answer="You can contact support by clicking on the 'Contact Us' link at the bottom of the page."
            />
          </div>
        </div>

        <div className="w-full lg:w-[38%] flex justify-center items-center mt-8 lg:mt-0 mb-[10%] pt-[5%]">
          <img src="/images/FAQs.png" alt="FAQs" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section8;
