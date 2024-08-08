import React from "react";
import "../App.css";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const Section4 = () => {
  return (
    <div className=" bg-[#211b36] border-t-2 border-gray-600  ">
      <div className="text-center text-white lg:mt-[6%] mt-[4%] lg:px-24 lg:mr-12 px-[5%]  ">
        <h4 className="text-normal mb-4">Our Services</h4>
        <h2 className="lg:text-4xl md:text-3xl text-2xl  font-semibold mb-3 lg:leading-relaxed">
          Explore Our Best AI Services
        </h2>
        <p className="lg:text-sm md:text-xs text-xxs font-light mb-8">
          Each project highlights our expertise and the transformative impact{" "}
          <br />
          of our services
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:space-y-0 space-y-6 mb-4 text-white pr-[4%]">
        <div className="md:w-[26%] w-[60%] lg:w-[26%]  text-center">
          <img
            src="/images/Service1.png"
            alt="Service 1"
            className="w-full h-auto object-cover mb-2"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Solution Development
          </h3>
        </div>
        <div className="md:w-[26%] w-[60%] lg:w-[26%]  text-center">
          <img
            src="/images/Service2.png"
            alt="Service 2"
            className="w-full h-auto object-cover mb-2 "
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            Vision Solutions
          </h3>
        </div>
        <div className="md:w-[26%] w-[60%] lg:w-[26%]  text-center">
          <img
            src="/images/Service3.png"
            alt="Service 3"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Powered Analytics
          </h3>
        </div>
        <div className="md:w-[26%] w-[60%] lg:w-[26%]  text-center">
          <img
            src="/images/Service4.png"
            alt="Service 4"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Chat Bots
          </h3>
        </div>{" "}
        <div className="md:w-[26%] w-[60%] lg:w-[26%]  text-center">
          <img
            src="/images/Service5.png"
            alt="Service 5"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Integration Development
          </h3>
        </div>{" "}
        <div className="md:w-[26%] w-[60%] lg:w-[26%]  text-center">
          <img
            src="/images/Service6.png"
            alt="Service 6"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Model Tuning
          </h3>
        </div>
      </div>{" "}
      <div className="flex justify-center ">
        {" "}
        <button className="bg-[#7828d6] px-8 py-2 rounded-full min-w-[12px] min-h-[40px] flex items-center text-white justify-center mb-10 button-hover text-xs font-semibold">
          Explore More
        </button>
      </div>
      {/* whychooseus */}
      <div className="flex flex-col lg:flex-row md:flex-row  items-center text-white px-[10%] lg:pr-[11%] lg:pl-36  mt-[6%] md:space-x-10">
        <div className="w-[80%] md:w-[42%] md:pl-3 lg:w-[45%]  mb-8 lg:mb-0  ">
          <img
            src="/images/Whychoose.webp"
            alt="Why Choose Us"
            className="w-96 rounded-lg transform scale-x-[-1] pb-20"
          />
        </div>

        <div className="w-full md:w-[45%]  lg:w-1/2   text-left lg:text-left">
          <h4 className="text-normal mb-3">Why Choose Us</h4>
          <h2 className="lg:text-4xl md:text-3xl text-2xl  font-semibold mb-3 lg:leading-relaxed">
            Choose ROBX For Leading Edge
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #d18cfe, #f569dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Solutions
            </span>
          </h2>
          <p className="lg:text-sm md:text-xs text-xxs font-light mb-8">
            Choose Robx.ai for leading-edge AI solutions and dedicated support.
            We specialize in customized AI development, ensuring transformative
            results tailored to your business needs and supported 24/7.
          </p>

          <div className="flex flex-col gap-1 mb-10">
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#af40ed]  mt-2 mr-2 " />
              <div>
                <h5 className="font-semibold mb-1 text-xs ">
                  Customized AI Development:
                </h5>
                <p className="text-xs  ">
                  Tailored solutions to meet your specific business challenges.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#af40ed]   mr-2 mt-2 " />
              <div>
                <h5 className="font-semibold mb-1 text-xs">Expert Team:</h5>
                <p className="text-xs  ">
                  Leaders in AI technology with a track record of innovation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#af40ed] mr-2 mt-2 " />
              <div>
                <h5 className="font-semibold mb-1 text-xs">24/7 Support:</h5>
                <p className="text-xs  ">
                  Dedicated assistance ensuring seamless integration and ongoing
                  success.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#7828d6] text-black px-8 py-2 rounded-full min-w-[12px] min-h-[40px] flex items-center text-white justify-center mb-4 sm:mb-0 button-hover text-xs font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
