import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Address = () => {
  return (
    <section>
      <div className="grid grid-cols md:grid-cols-3 gap-4">
        <div className="">
          <div className="">
            <h1 className="text-black-500 font-bold text-xl leading-tight">
              By Subscribing To Our Newsletter You Can Get 30% Off
            </h1>

            <div className="p-3">
              <p className="md:text-sm text-xl text-[#d4d4d4]">
                Details to details is what makes Hexashop different from the
                other themes.
              </p>
            </div>

            <form className="gap-2">
              <div className="">
                <div className="">
                  <div className="w-full md:w-1/2">
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border
                            border-black-500  mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex gap-2">
                    <input
                      className="appearance-none  w-full bg-gray-200 text-gray-700 border
                          border-black-500  leading-tight focus:outline-none focus:bg-white
                           focus:border-gray-500"
                      type="text"
                      placeholder="Your Email Address"
                    /> <div className="bg-black">
                    <FaTelegramPlane size={40} color="white" />
                    </div>
                  </div> 
                  
                  
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="justify-items-center ">
            <div className="p-2">
              <h4 className="text-xl leading-tight font-medium text-black hover:underline">
                Store Location:
              </h4>
              <p className="text-sm text-[#d4d4d4]">
                Sunny Isles Beach, FL 33160, United States
              </p>
            </div>
          
          
            <div className="p-2">
              <h4 className="text-xl leading-tight font-medium text-black hover:underline">
                Phone:
              </h4>
              <p className="text-sm text-[#d4d4d4]">010-020-0340</p>
            </div>
         
          
            <div className="p-2">
              <h4 className="text-xl leading-tight font-medium text-black hover:underline">
                Office Location:
              </h4>
              <p className="text-sm text-[#d4d4d4]">North Miami Beach</p>
            </div>
          
        </div>
        <div className="justify-items-center">
          <div className="p-2">
            <h4 className="text-xl leading-tight font-medium text-black hover:underline ">
              Work Hours:
            </h4>
            <p className="text-sm text-[#d4d4d4]">07:30 AM - 9:30 PM Daily</p>
          </div>
          <div className="p-2">
            <h4 className="text-xl leading-tight font-medium text-black hover:underline ">
              EMAIL:
            </h4>
            <p className="text-sm text-[#d4d4d4]">info@company.com</p>
          </div>
          <div className="p-2">
            <h4 className="text-xl leading-tight font-medium text-black hover:underline">
              Social Media:
            </h4>
            <p className="text-sm text-[#d4d4d4]">Facebook, Instagram, Behance, Linkedin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
