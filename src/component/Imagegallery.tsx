import Link from "next/link";
import React from "react";

const Imagegallery = () => {
  return (
    <div>
      <section className="p-5 bg-white box-border-solid border-y border-dotted-amber-80">
        <div className="flex flex-col md:flex-row ">
          <div className="relative max-sm:mx-auto pb-5 lg:pb-0">
            <img
              className=" object-cover rounded-md"
              src="./images/left-banner-image.jpg"
              alt="kid"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-xl font-bold">
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
          {/* ============================================================<></>=================================================================== */}
          <div className="lg:w-3/4 lg:grid grid-cols-1 md:grid-cols-2 pt-0 pb-0">
            <div className="flex justify-center p-5 pt-0 ">
              <Link
                className="relative block md:w-500 h-500 bg-gray-900 group "
                href="##"
              >
                <img
                  className="absolute inset-0 object-cover  
 								w-full h-full opacity group-hover:opacity-50"
                  src="./images/baner-right-image-01.jpg"
                />
                <div className="transition-all transform 
 								                    translate-y-8 opacity-100 
 								                    group-hover:opacity-0 
 								                    group-hover:translate-y-0">
                  <p className="text-2xl font-bold p-2 mt-10 flex absolute  text-white hover:text-black">
                    WOMEN
                    <span className="text-lg my-5 p-2">
                      Best clothes for Women
                    </span>
                  </p>
                </div>
                <div className="relative">
                  <div
                    className="transition-all transform 
 								                    translate-y-8 opacity-0 
 								                    group-hover:opacity-100 
 								                    group-hover:translate-y-0 
                                    "
                  >
                    <div className="p-2">
                      <h4 className="text-lg text-white">WOMEN</h4>
                      <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet,
                        <span>conservisii ctetur adipiscing elit incid</span>
                      </p>
                      <button
                        className="px-4 py-2 text-sm 
                                  text-white border-solid border border-indigo-100"
                      >
                        Discover More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex justify-center p-5 pt-0">
              <Link
                className="relative block w-500 h-500 bg-gray-900 group"
                href="##"
              >
                <img
                  className="absolute inset-0 object-cover 
 								w-full h-full group-hover:opacity-0"
                  src="./images/baner-right-image-02.jpg"
                />
                <p className="text-2xl font-bold p-2 justify-center mt-10 flex absolute text-white 
                transition-all transform 
 								                    translate-y-8 opacity-100 
 								                    group-hover:opacity-0 
 								                    group-hover:translate-y-0">
                  MEN
                  <span className="text-lg my-5 p-2">Best clothes for Men</span>
                </p>
                <div className="relative mt-10">
                  <div
                    className="transition-all transform 
 								                  translate-y-8 opacity-0 
 								                  group-hover:opacity-100 
 								                  group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <h4 className="text-lg text-white">MEN</h4>
                      <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet,
                        <span>conservisii ctetur adipiscing elit incid</span>
                      </p>
                      <button
                        className="px-4 py-2 text-sm 
                               text-white border-solid border border-indigo-100"
                      >
                        Discover More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-row justify-center p-5 pb-0">
              <Link
                className="relative block w-500 h-500 bg-gray-900 group"
                href="##"
              >
                <img
                  className="absolute inset-0 object-cover
 								w-full h-full group-hover:opacity-0"
                  src="./images/baner-right-image-03.jpg"
                />
                <p className="text-2xl font-bold p-2 justify-center mt-10 flex absolute text-white
                transition-all transform 
                translate-y-8 opacity-100 
                group-hover:opacity-0 
                group-hover:translate-y-0">
                  Kids
                  <span className="text-lg my-5 p-2">Best clothes for Kid</span>
                </p>
                <div className="relative mt-10">
                  <div
                    className="transition-all transform
 								translate-y-8 opacity-0
 								group-hover:opacity-100
 								group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <h4 className="text-lg text-white">KIDS</h4>
                      <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet,
                        <span>conservisii ctetur adipiscing elit incid</span>
                      </p>
                      <button
                        className="px-4 py-2 text-sm
                               text-white border-solid border border-indigo-100"
                      >
                        Discover More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex justify-center p-5 pb-0">
              <Link
                className="relative block w-500 h-500 bg-gray-900 group"
                href="##"
              >
                <img
                  className="absolute inset-0 object-cover 
 								              w-full h-full group-hover:opacity-0"
                  src="./images/baner-right-image-04.jpg"
                />
                <p className="p-2 text-2xl font-bold justify-center mt-10 flex absolute text-white
                transition-all transform 
                translate-y-8 opacity-100 
                group-hover:opacity-0 
                group-hover:translate-y-0">
                  Accessories
                  <span className="text-lg my-3 p-2">
                    Best clothes for Accessories
                  </span>
                </p>

                <div className="relative mt-10">
                  <div
                    className="transition-all transform 
 								translate-y-8 opacity-0 
 								group-hover:opacity-100 
 								group-hover:translate-y-0"
                  >
                    <div className="p-2">
                      <h4 className="text-lg text-white">Accessories</h4>
                      <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet,
                        <span>conservisii ctetur adipiscing elit incid</span>
                      </p>
                      <button
                        className="px-4 py-2 text-sm 
                               text-white border-solid border border-indigo-100"
                      >
                        Discover More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imagegallery;
