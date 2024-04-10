"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style/OwelCarousel.css";
import CardData from "./CardData";

const OwelCarousel = () => {
  const responsive = {
    superdisplay: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const menData = [
    {
      id: 1,
      image01: "./images/men-01.jpg",
      name: "Classic Spring",
      price: "$120.00",
    },
    {
      id: 2,
      image01: "./images/men-02.jpg",
      name: "Air force 1 X",
      price: "$90.00",
    },
    {
      id: 3,
      image01: "./images/men-03.jpg",
      name: "LoveNana `20",
      price: "$150.00",
    },
    {
      id: 4,
      image01: "./images/men-01.jpg",
      name: "Classic Spring",
      price: "$120.00",
    },
    {
      id: 5,
      image01: "./images/men-02.jpg",
      name: "Air force 1 X",
      price: "$90.00",
    },
    {
      id: 6,
      image01: "./images/men-03.jpg",
      name: "LoveNana `20",
      price: "$150.00",
    },
  ];
  const mensDatas = menData.map((item) => (
    <CardData
      imageUrl={item.image01}
      name={item.name}
      price={item.price}
       />
  ));
  return (
    <div className="row p-5">
    <div className="col-lg-12">
      <div className="section-heading md:mx-20 sm:mb-5">
        <h2 className="text-5xl font-bold px-3 py-5">Men'S Latest</h2>
        <span className="text-sm p-10">
          Details to details is what makes Hexashop different from
          the other themes.
        </span>
      </div>
    </div>
  <div className='md:mx-20 w-full justify-center items-center md:p-10 sm:px-3'>
  <Carousel responsive={responsive}>
  {mensDatas}
  </Carousel>
  </div>
  </div>
  );
};

export default OwelCarousel;