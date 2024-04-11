import Link from "next/link";
import React from "react";
import Grid from "./grid";

const Imagegallery = () => {
 

  return (
    <div>
      <section className="p-5 bg-white box-border-solid border-y border-dotted-amber-80">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 md:grid-cols-1 gap-3">
          <div className="lg:col-span-2 lg:row-span-2 ">
            <div className="relative pb-5 lg:pb-0">
              <img
                className=" object-cover rounded-md"
                src="./images/left-banner-image.jpg"
                alt="kid"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center  text-white text-xl font-bold">
                <div className=" text-center">
                  <h2 className="text-2xl font-bold">We Are Hexashop</h2>
                  <p className="p-1">
                    <span className="text-sm">
                      Awesome, clean & creative HTML5 Template
                    </span>
                  </p>
                  <button className="border border-indigo-100 px-2 py-1 text-sm text-white bg-block-600">
                    Purchase Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================<></>=================================================================== */}
         <div className="sm:justify-center sm:flex lg:col-span-2 lg:row-span-2 sm:grid-cols"><Grid /></div>
         
         </div>
      </section>
    </div>
  );
};

export default Imagegallery;
