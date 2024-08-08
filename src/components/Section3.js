import React from "react";

import { BsDiamond } from "react-icons/bs";

const borderTextStyle = {
  color: "transparent",
  WebkitTextStroke: "1px gray",
};

const Section3 = () => {
  return (
    <div className="container">
      <div className="text-center text-white lg:mt-[6%] lg:px-24 lg:mr-12 px-[5%] mt-[6%] ">
        <h4 className="text-normal mb-4">Our Portfolio</h4>
        <h1 className="lg:text-4xl md:text-3xl text-2xl  font-semibold mb-3 lg:leading-relaxed">
          Watch Our Advanced AI Projects
        </h1>
        <p className="lg:text-sm md:text-xs text-xxs font-light mb-8">
          Our portfolio demonstrates an extensive range of AI-driven solutions
          we <br /> have created to improve businesses and change industries.
        </p>
        <div className="flex flex-wrap lg:flex-nowrap mx-auto mb-8">
          <div className=" lg:h-[80vh] p-1 md:w-[40%] w-[60%]    mx-auto text-center">
            <img
              src="/images/card1.png"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:h-[78vh] flex flex-wrap">
            <div className="lg:h-[80vh] p-1 md:w-[40%] w-[60%]    mx-auto text-center">
              <img
                src="/images/card2.png"
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:h-[80vh] p-1 md:w-[40%] w-[60%]    mx-auto text-center">
              <img
                src="/images/card3.png"
                alt="Project 3"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="lg:h-[80vh] p-1 md:w-[40%] w-[60%]    mx-auto text-center">
              <img
                src="/images/card4.png"
                alt="Project 4"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="lg:h-[80vh] p-1 md:w-[40%] w-[60%]    mx-auto text-center">
              <img
                src="/images/card5.png"
                alt="Project 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-8 lg:space-x-10 py-3">
          <div className="flex items-center">
            <span
              className="lg:text-4xl md:text-2xl text-xxs"
              style={borderTextStyle}
            >
              Skilled Experts
            </span>
          </div>
          <div className="flex items-center space-x-10">
            <BsDiamond className="lg:text-lg md:text-base text-sm text-gray-500" />
            <span
              className="lg:text-4xl md:text-2xl text-xxs"
              style={borderTextStyle}
            >
              Creativity
            </span>
          </div>
          <div className="flex items-center space-x-10">
            <BsDiamond className="lg:text-lg md:text-base text-sm text-gray-500" />
            <span
              className=" lg:text-4xl md:text-2xl text-xxs "
              style={borderTextStyle}
            >
              Magical World
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
