import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Exploreproduct () {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-10 mb-2">
          <div className="button">
            <Link
              href="#"
              className="block mt-1 text-4xl leading-tight font-medium text-black hover:underline"
            >
              Explore Our Products
              </Link>
            <p className="mt-8 text-[#d4d4d4]">
              You are allowed to use this HexaShop HTML CSS template. You can
              feel free to modify or edit this layout. You can convert this
              template as any kind of ecommerce CMS theme as you wish.
            </p>
           
            
              <p className="mt-8 text-slate-500">
                <FaQuoteLeft className="inline-block mr-2" />
                <span className="mt-2 text-sm text-black">
                  You are not allowed to redistribute this template ZIP file on any other website.
                </span>
              </p>

            <p className="mt-8 text-[#d4d4d4]">
              There are 5 pages included in this HexaShop Template and we are
              providing it to you for absolutely free of charge at our
              TemplateMo website. There are web development costs for us.
            </p>
            <p className="mt-8 text-[#d4d4d4]">
              If this template is beneficial for your website or business,
              please kindly{" "}
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                support us
              </div>{" "}
              a little via PayPal. Please also tell your friends about our great
              website. Thank you.
            </p>
          </div>

          <button
            className="bg-transparent hover:bg-black-500 text-black-700 
                      font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded mt-5 mx-30"
          >
            Describe me
          </button>
        </div>

        {/* women */}

        <div className="overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 md:max-w-7xl sm:grid-cols-1 gap-4">
          <div
            className="md:flex flex-row 
               lg:flex-row mt-5"
          >
            <div className="flex items-center mt-1 p-5">
              <Link className="relative block w-500 h-200 group" href="#">
                <div className="relative flex-row-1">
                  <img
                    className=" bg-indigo-500 opacity-5 w-full h-full object-cover rounded-md"
                    src="./images/left-banner-image.jpg"
                    width={200}
                    height={200}
                    alt="kid"
                  />
                  <div
                    className="absolute inset-0 items-center grid grid-row-2
                                      justify-center text-black font-bold break-words "
                  >
                    <h2 className="text-5xl ">Leather Bags</h2>
                    <div className="rounded-lg">
                      <p className=" break-all">
                        <span>Latest Collection</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* Women */}
            <div className="flex items-center justify-center mt-1 p-5">
              <img
                className=""
                src="./images/explore-image-01.jpg"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* leather  */}
          <div className="md:flex flex-row mt-2">
            <div className="flex items-center justify-center mt-1 p-5">
              <img
                className="w-50 h-50"
                src="./images/explore-image-02.jpg"
                width={500}
                height={700}
              />
            </div>
            {/* accessories  */}
            <div className="flex items-center mt-1 p-5">
              <Link className="relative block w-500 h-200 group" href="#">
                <div className="relative flex-row-1">
                  <img
                    className=" bg-indigo-500 opacity-5 w-full h-full object-cover rounded-md"
                    src="./images/left-banner-image.jpg"
                    width={200}
                    height={200}
                    alt="kid"
                  />
                  <div
                    className="absolute inset-0 items-center grid grid-row-2
                                      justify-center text-black font-bold break-words "
                  >
                    <h2 className="text-5xl ">Different Types</h2>
                    <div className="rounded-lg">
                      <p className=" break-all">
                        <span>Over 304 Products</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


