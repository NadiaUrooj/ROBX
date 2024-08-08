import React from "react";
import "../App.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Section7 = () => {
  return (
    <div className="  border-t-2 border-gray-600 ">
      <div className="text-center text-white lg:pl-1 md:px-0 pt-[6%] pb-[16%] lg:pr-12">
        <h4 className="text-normal mb-4">Our Team</h4>
        <h1 className="lg:text-4xl md:text-3xl text-2xl  font-semibold mb-3 lg:leading-relaxed">
          Meet With Our Creative Team
        </h1>
        <p className="lg:text-sm md:text-xs text-xxs font-light mb-8 text-sm lg:w-[38%] w-[70%] mx-auto ">
          Our expert team is made up of creatives with technical know-how
          strategies who thinks outside the box & developers who push
          innovation.
        </p>
        {/* Cards */}{" "}
        <div className="flex flex-wrap justify-center gap-3 mb-20 text-white">
          <div className="w-full sm:w-1/2 lg:w-[18%] md:w-[32%] w-[60%] text-center bg-[#211b36] px-6 pt-3  rounded-lg border border-gray-600 pb-4 ">
            <img
              src="/images/Teamimg1.png"
              alt="DR. Atif (CEO)"
              className="object-cover w-48 h-26 rounded-t-lg mb-3"
            />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm">DR. Atif (CEO)</h3>
              <div className="flex space-x-1">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
              </div>
            </div>
            <h5 className="text-xxs  font-light text-left">Graphic Designer</h5>
          </div>
          <div className="w-full sm:w-1/2 lg:w-[18%] md:w-[32%] w-[60%] text-center bg-[#211b36] px-6 pt-3  rounded-lg border border-gray-600 pb-4 ">
            <img
              src="/images/Teamimg2.png"
              alt="DR. Atif (CEO)"
              className="object-cover w-48 h-26 rounded-t-lg mb-3"
            />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm">Ali Raza (CTO)</h3>
              <div className="flex space-x-1">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
              </div>
            </div>
            <h5 className="text-xxs  font-light text-left">AI Expert</h5>
          </div>{" "}
          <div className="w-full sm:w-1/2 lg:w-[18%] md:w-[32%] w-[60%] text-center bg-[#211b36] px-6 pt-3  rounded-lg border border-gray-600 pb-4">
            <img
              src="/images/Teamimg3.png"
              alt="DR. Atif (CEO)"
              className="object-cover w-48 h-26 rounded-t-lg mb-3"
            />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm">Daniyal</h3>
              <div className="flex space-x-1">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
              </div>
            </div>
            <h5 className="text-xxs  font-light text-left">Developer</h5>
          </div>{" "}
          <div className="w-full sm:w-1/2 lg:w-[18%] md:w-[32%] w-[60%] text-center bg-[#211b36] px-6 pt-3  rounded-lg border border-gray-600 pb-4">
            <img
              src="/images/Teamimg4.png"
              alt="DR. Atif (CEO)"
              className="object-cover w-48 h-26 rounded-t-lg mb-3"
            />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm">Bilal</h3>
              <div className="flex space-x-1">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    style={{ border: "1px solid #a07a53" }}
                    className="rounded-full p-[14%] size-3"
                  />
                </a>
              </div>
            </div>
            <h5 className="text-xxs  font-light text-left">
              Graphics designer
            </h5>
          </div>
        </div>
        <button className="bg-[#7828d6] text-white min-w-[12px] min-h-[40px] px-8 py-2 rounded-full font-semibold text-xs button-hover">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Section7;
