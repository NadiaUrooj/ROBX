import React from "react";
import "../App.css";
const Section1 = () => {
  return (
    <div className="container mx-auto px-[5%] lg:pl-[9%]">
      <div className="mt-4  text-white text-start lg:w-1/2 md:w-[60%] w-[80%] ">
        <h1 className="md:text-4xl text-2xl md:text-5xl  font-semibold lg:mb-3 mb-6  lg:mt-[10%] md:mt-[10%] mt-[20%]  lg:leading-snug md:leading-relaxed ">
          Revolutionizing <br /> Your Business With <br />
          <span
            style={{
              background: "linear-gradient(90deg, #d18cfe, #f569dd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Solutions
          </span>
        </h1>
        <p className="lg:text-sm md:text-base  md:leading-loose lg:leading-normal font-light  text-xxs mb-6  w-[80%] ">
          ROBX.AI revolutionizes businesses with cutting-edge AI solutions. We
          streamline operations, enhance decision-making, and improve customer
          experiences. Partner with us to unlock the full potential of AI and
          shape a more innovative future for your business.
        </p>
        <div className="flex flex-col sm:flex-row md:mt-20 lg:mt-10 items-center">
          <button className="bg-[#7828d6] text-black px-8 py-2 rounded-full min-w-[12px] min-h-[40px] flex items-center text-white justify-center mb-4 sm:mb-0 button-hover text-xs font-semibold ">
            Explore More
          </button>
          <p className="text-xxs sm:text-sm mx-0 sm:mx-6 flex-shrink-0 text-center sm:text-left pl-6  ">
            <b className=" sm:text-4xl ">300+</b> <br />
            <span className="font-light">Trusted Companies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
