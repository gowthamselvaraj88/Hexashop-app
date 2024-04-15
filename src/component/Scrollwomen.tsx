"use client";
import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import "../app/globals.css";
import ReactStars from "react-stars";
import { height, width } from "@mui/system";

if (typeof window !== "undefined" && !window.$) {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const carouselItems = [
  {
    imageSrc: "./images/men-01.jpg",
    name: "Classic Spring",
    price: "$120.00",
  },
  {
    imageSrc: "./images/men-02.jpg",
    name: "Air force 1 X",
    price: "$90.00",
  },
  {
    imageSrc: "./images/men-03.jpg",
    name: "LoveNana `20",
    price: "$150.00",
  },
  // {
  //   imageSrc: "./images/men-01.jpg",
  //   name: "Classic Spring",
  //   price: "$120.00",
  // },
  // {
  //   imageSrc: "./images/men-02.jpg",
  //   name: "Air force 1 X",
  //   price: "$90.00",
  // },
  // {
  //   imageSrc: "./images/men-03.jpg",
  //   name: "LoveNana `20",
  //   price: "$150.00",
  // },
];

const options = {
  loop: true,
  margin: 30,
  items: 3,
  autoplay: false,
  nav: false,
  center: true,
  number:100,
  autoWidth: true,
  smartSpeed: 3,
  Object:true,
  responsive:{
      0: {
    items: 1,
},
    768: {
      items: 3,
  }
}
};

export default function Slider() {
  return (
    <div className="grid grid-cols-1">
      <div className="font-bold ">
        <p className="p-5 md:text-2xl text-sm owl-head">Men'S Latest</p>
      </div>
      <div className="font-light sm:text-sm md:text-xl owl-text text-[#d4d4d4] mt-1 ml-8">
        Details to details is what makes Hexashop different from the other
        themes.
      </div>
      <div className="flex">
      <OwlCarousel className="owl-theme" {...options}>
        {carouselItems.map((item, index) => (
          <div className="item" key={index}>
            <div className="pe-5 media-flex ">
              <div className="p-5">
                <img
                  src={item.imageSrc}
                  className="rounded mt-2"
                  style={{ width: "350px", height: "400px" }}
                />
              </div>
                <div className="p-5">
                  <div className="ml-[274px]">
                    <ReactStars count={5} size={18} color2={"#ffd700"} />
                  </div>
                  <div className="font-bold owl-head mt-[-21px]">
                   <p>{item.name}</p>
                  </div>
                  <div className="font-light sm:text-sm owl-text text-[#d4d4d4] mt-1">
                    <p>{item.price}</p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
      </div>
    </div>
  );
}
