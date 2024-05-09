"use client";
import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Footer from '@/component/common/Footer';
import "@/app/globals.css";
import Header from '@/component/common/Header';

const Singleproduct = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="container mx-auto">
      <div><Header /></div>
      <div className="flex items-center justify-center pt-[150px]">
        <div className='relative'><img src="./images/products-page-heading.jpg" alt="Products Page Heading" /></div>
        <div className="absolute text-white">
          <h3 className="text-lg md:text-4xl font-bold">
            Single Product Page
          </h3>
          <p className="text-xs lg:text-md italic mt-3">
            Awesome & Creative HTML CSS layout by TemplateMo
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-5 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:p-5">
          <div className="md:col-span-2">
              <div className="mb-8">
                <img src="./images/single-product-01.jpg" alt="Product Image 1" />
              </div>
              <div>
                <img src="./images/single-product-02.jpg" alt="Product Image 2" />
              </div>
          </div>
          <div className="">
            <div className="border-b border-dotted-amber-80 pb-3">
              <div className="text-xl">
                <h4 className="flex mb-[-29px] font-bold">New Green Jacket </h4>
                <p className="ml-[260px]">★★★★★</p>
              </div>
              <p className="p-2 text-[#d4d4d4] font-bold">$75.00</p>
            </div>
            <div className="border-y border-dotted-amber-80">
              <div className="text-sm md:text-xs font-bold text-[#d4d4d4] p-3">
                <p className="">
                  Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.
                </p>
              </div>
              <div className="flex">
                <FaQuoteLeft size={80} className="inline-block mr-2" />
                <p className="italic text-xs font-bold mt-5">
                  Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiuski mod
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-5 bg-white border-y border-dotted-amber-80">
              <p className="text-[#d4d4d4] font-bold md:mr-24 xl:mr-24">No.of Orders</p>
              <div className="flex">
                <button className="border border-[#beb3b3] p-1" onClick={() => setCount(count + 1)}>+</button>
                <p className="flex border border-[#beb3b3] p-1">{count}</p>
                <button className="border border-[#beb3b3] p-1" onClick={() => setCount(count - 1)}>-</button>
              </div>
            </div>
            <div className="flex justify-between items-center p-5 bg-white border-y border-dotted-amber-80">
              <p className="text-[#d4d4d4] text-sm font-bold">Total:$250.00</p>
              <button className="flex border border-black p-3 text-black text-xs bg-white">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Singleproduct;
