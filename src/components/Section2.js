import React from "react";
import "../App.css";

const Section2 = () => {
  return (
    <div className="border-t-2 border-gray-600">
      <div className="flex flex-col md:flex-row  lg:flex-row items-center lg:items-start  lg:mt-[6%] lg:space-x-10 lg:px-28 md:px-[1%] px-0">
        <div className="w-full lg:w-[100%] md:w-[60%] text-white text-left lg:p-8 md:p-8 p-3">
          <h4 className="lg:text-sm  md:text-sm text-xs mb-3 uppercase">
            About Us
          </h4>
          <h2 className="lg:text-4xl md:text-3xl text-2xl  font-semibold mb-3 lg:leading-relaxed">
            Delivering &nbsp;
            <span
              style={{
                background: "linear-gradient(90deg, #d18cfe, #f569dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Solutions
            </span>
            <br /> Since 2015
          </h2>

          <p className="lg:text-sm md:text-xs text-xxs font-light mb-8">
            At Robx.ai, we are committed to delivering reliable, transparent,
            and efficient software development services. Our client-centric
            approach ensures we understand your business challenges, crafting
            customized AI solutions that meet your expectations, deadlines, and
            budget.
          </p>

          <div className="mb-10 ">
            <div className="mb-3 ">
              <p className="text-xxs mb-1">Artificial Intelligence</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] h-2 rounded-full "
                  style={{ width: "81%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white text-xxs">
                  81%
                </span>
              </div>
            </div>
            <div className="mb-3">
              <p className="text-xxs mb-1">Customer Satisfaction</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] h-2 rounded-full"
                  style={{ width: "99%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white text-xxs">
                  99%
                </span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xxs mb-1">Quality</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] h-2 rounded-full"
                  style={{ width: "76%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white text-xxs">
                  76%
                </span>
              </div>
            </div>
          </div>

          <button className="bg-[#7828d6] text-black px-8 py-2 rounded-full min-w-[12px] min-h-[40px] flex items-center text-white justify-center   button-hover text-xs font-semibold">
            Read More
          </button>
        </div>

        <div className="w-full lg:w-[120%] md:w-[40%] mt-[3%]">
          <img
            src="/images/Section2.png"
            alt="AI Solutions"
            className="w-full h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
