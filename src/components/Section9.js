import React from "react";
import "../App.css";

const Section9 = () => {
  return (
    <div className="container  bg-[#211b36] border-t-2 border-gray-600 ">
      <div className="text-center text-white lg:pl-1 md:px-0 pt-[6%] pb-[16%] lg:pr-12">
        <h4 className="text-normal mb-4">Our Blog</h4>
        <h1 className="lg:text-4xl md:text-3xl text-2xl  font-semibold mb-3 lg:leading-relaxed">
          Latest Insights and Articles
        </h1>
        <p className="lg:text-sm md:text-xs text-xxs font-light mb-8">
          Each project highlights our expertise and the transformative impact of
          our services
        </p>
        {/* Blog Cards */}{" "}
        <div className="flex flex-wrap justify-center gap-6 mb-2 text-white">
          <div className="w-full sm:w-1/2 lg:w-[24%] text-center">
            <img
              src="/images//Blog1.png"
              alt="Service 1"
              className="object-cover mb-4 "
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-[24%] text-center">
            <img
              src="/images//Blog2.png"
              alt="Service 2"
              className="object-cover mb-4 "
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-[24%] text-center">
            <img
              src="/images//Blog3.png"
              alt="Service 3"
              className=" object-cover mb-2 "
            />
          </div>
        </div>
        <button className="bg-[#7828d6] text-white min-w-[12px] min-h-[40px] px-8 py-2 rounded-full font-semibold text-xs button-hover">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Section9;
