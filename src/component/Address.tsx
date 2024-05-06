import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Address = () => {
  return (
      <div className="grid grid-cols md:grid-cols-2 gap-4">
        <div className="justify-center items-center pl-[50px]">
          <div className="grid justify-center">
            <h1 className="text-black-500 font-bold text-lg leading-tight">
              By Subscribing To Our Newsletter You Can Get 30% Off
            </h1>

            <div className="py-3">
              <p className="text-sm lg:text-md text-[#a59f9f]">
                Details to details is what makes Hexashop different from the
                other themes.
              </p>
            </div>

            <form className="gap-3 w-full contents md:flex">
              
                  <div className="md:flex gap-3">
                    <input
                      className=" w-full lg:w-1/2 text-gray-700 border
                            border-black-500 mb-3  focus:outline-black "
                      type="text"
                      placeholder="Your Name"
                    />
                  
                  <div className="md:flex ">
                    <input
                      className="w-full  text-gray-700 border
                      border-black-500  mb-3 focus:outline-black "
                      type="text"
                      placeholder="Your Email Address"
                    /> </div> 
                    <FaTelegramPlane className="bg-black" size={40} color="white" />
                    </div> 
            </form>
          </div>
        </div>
<div className="grid grid-col md:grid-cols-2 gap-4">
        <div className="justify-items-center ">
            <div className="ml-3 pb-3">
              <h4 className="text-lg leading-tight font-bold text-black hover:underline">
                Store Location:
              </h4>
              <p className="text-xs text-[#a59f9f]">
                Sunny Isles Beach, FL 33160, United States
              </p>
            </div>
          
          
            <div className="p-3">
              <h4 className="text-lg leading-tight font-bold text-black hover:underline">
                Phone:
              </h4>
              <p className="text-xs  text-[#a59f9f]">010-020-0340</p>
            </div>
         
          
            <div className="p-3">
              <h4 className="text-lg leading-tight font-bold text-black hover:underline">
                Office Location:
              </h4>
              <p className="text-xs  text-[#a59f9f]">North Miami Beach</p>
            </div>
          
        </div>
        <div className="justify-items-center">
          <div className="ml-3 pb-3">
            <h4 className="text-lg leading-tight font-bold text-black hover:underline ">
              Work Hours:
            </h4>
            <p className="text-xs  text-[#a59f9f]">07:30 AM - 9:30 PM Daily</p>
          </div>
          <div className="p-3">
            <h4 className="text-lg leading-tight font-bold text-black hover:underline ">
              EMAIL:
            </h4>
            <p className="text-xs  text-[#a59f9f]">info@company.com</p>
          </div>
          <div className="p-3">
            <h4 className="text-lg leading-tight font-bold text-black hover:underline">
              Social Media:
            </h4>
            <p className="text-xs  text-[#a59f9f]">Facebook, Instagram, Behance, Linkedin</p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Address;
