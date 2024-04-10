import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Address = () => {
  return (
    <div className=" bg-white mx-auto p-auto sm:flex flex-wrap md:p-10">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-10 mb-2">
            <div className="button">
              <h1 className="text-slate-500  block mt-1 text-4xl leading-tight font-medium">
                By Subscribing To Our Newsletter You Can Get 30% Off
              </h1>

              <div className="md:m-10 p-5 md:p-10">
                <p className="md:text-sm text-xl">
                  Details to details is what makes Hexashop different from the
                  other themes.
                </p>
              </div>

              <form className="w-full max-w-lg md:p-10 p-5 flex">
                <div className="flex flex-wrap -mx-3 mb-6 ">
                  <div className="md:flex">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0  ">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border
                            border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-black-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                           focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Your Email Address"
                      />
                    </div>
                    <FaTelegramPlane size={50} className="inline-block p-2" />
                  </div>
                </div>
              </form>
            </div>
        </div>

          

          <div className="overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 md:max-w-7xl sm:grid-cols-1 gap-4">
            <div className="md:flex flex-row lg:flex-row mt-5">
              <div className="flex items-center mt-1 p-5">
                <div className="p-3">
                  <h4 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                    Store Location:
                  </h4>
                  <span className="text-sm">
                    Sunny Isles Beach, FL 33160, United States
                  </span>
                </div>
              </div>
              
              <div className="flex items-center  mt-1 p-5">
                <div className="p-3">
                  <h4 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                    Work Hours:
                  </h4>
                  <span className="text-sm">07:30 AM - 9:30 PM Daily</span>
                </div>
              </div>
            </div>


            <div className="md:flex flex-row lg:flex-row mt-5">
              <div className="flex items-center mt-1 p-5">
                <div className="p-3">
                  <h4 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                  Phone:
                  </h4>
                  <span className="text-sm">
                  010-020-0340
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-1 p-5 lg:ml-40">
                <div className="p-3">
                  <h4 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                    EMAIL:
                  </h4>
                  <span className="text-sm">info@company.com</span>
                </div>
              </div>
            </div>
            <div className="md:flex flex-row lg:flex-row mt-5">
              <div className="flex items-center mt-1 p-5">
                <div className="p-3">
                  <h4 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                  Office Location:
                  </h4>
                  <span className="text-sm">
                  North Miami Beach
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mt-1 p-5 lg:ml-40">
                <div className="p-3">
                  <h4 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                  Social Media:
                  </h4>
                  <span className="text-sm">Facebook, Instagram, Behance, Linkedin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Address;
