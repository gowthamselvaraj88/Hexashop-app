import Link from "next/link";
import React from "react";
import Grid from "./grid";

const Imagegallery = () => {
 

  return (
    
      <section className="pt-[100px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-3">
          <div className="lg:col-span-2 lg:row-span-2 ">
            <div className="relative">
              <img src="./images/left-banner-image.jpg" alt="kid"/>
              <div className="text-center absolute inset-0 flex flex-col justify-center items-center  text-white text-xl font-bold">  
                  <h2 className="text-2xl lg:text-5xl font-bold">We Are Hexashop</h2>
                  <p className="p-1">
                    <span className="text-sm l:text-md p-1">
                      Awesome, clean & creative HTML5 Template
                    </span>
                  </p>
                  <button className="border border-indigo-100 px-2 py-1 text-sm text-white bg-block-600">
                    Purchase Now!
                  </button>
              </div>
            </div>
          </div>
          {/* ============================================================<></>=================================================================== */}
         <div className="justify-center grid-cols flex lg:col-span-2 lg:row-span-2 "><Grid /></div>
         </div>
      </section>
  );
};

export default Imagegallery;
