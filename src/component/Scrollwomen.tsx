'use client'
import React, { useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import "./style/OwelCarousel.css";

export default function Scrollkid() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  
  const women = [
    {
        id:1,
        image:<img
      className="rounded-sm p-3"
      src="./images/women-01.jpg"
      width={300}
      height={300}
      alt=""
    />,
        name:"New Green Jacket",
        price:"$75.00"
    },
    {   id:2,
      image:<img
      className="rounded-sm p-3"
      src="./images/women-02.jpg"
      width={300}
      height={300}
      alt=""
    />,
        name:"Classic Dress",
        price:"$45.00"
    },
    {   id:3,
      image:<img
      className="rounded-sm p-3"
      src="./images/women-03.jpg"
      width={300}
      height={300}
      alt=""
    />,
        name:"Spring Collection",
        price:"$130.00"
},
{
  id:7,
  image:<img
      className="rounded-sm p-3"
      src="./images/women-01.jpg"
      width={300}
      height={300}
      alt=""
    />,
  name:"New Green Jacket",
  price:"$75.00"
},
{   id:8,
  image:<img
  className="rounded-sm p-3"
  src="./images/women-02.jpg"
  width={300}
  height={300}
  alt=""
/>,
  name:"Classic Dress",
  price:"$45.00"
},
{   id:9,
  image:<img
      className="rounded-sm p-3"
      src="./images/women-03.jpg"
      width={300}
      height={300}
      alt=""
    />,
  name:"Spring Collection",
  price:"$130.00"
}
]

const handleClick = (type: "left" | "right") => {
  if (type === "left") {
    const newStartIndex = startIndex - 3 < 0 ? 0 : startIndex - 1;
    const newEndIndex = newStartIndex + 3;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  } else {
    const newEndIndex = endIndex + 3 > women.length ? women.length : endIndex + 1;
    const newStartIndex = newEndIndex - 3;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }
};

  return (
    <div className="row p-5">
    <div className="col-lg-12">
      <div className="section-heading md:mx-20">
        <h2 className="text-5xl font-bold px-3 py-5">Women'S Latest</h2>
        <span className="text-sm p-10">
          Details to details is what makes Hexashop different from
          the other themes.
        </span>
      </div>
    </div>
  <div className='md:mx-20 w-3/4 justify-center items-center md:p-10 sm:px-3'>
  <div className="scroll-items flex flex-row-1 sm:p-10">
          <div className="border-solid border border-indigo-100 justify-content: sm:flex-start w-50 h-10 my-32">
            <button id="1" onClick={() => handleClick("left")}>
              <img
                className="rounded-md mt-100 p-2"
                src="./images/prev.png"
                width={50}
                height={50}
                alt="left"
              />
            </button>
          </div>
          
          <div className="overflow-x-auto w-500 h-500 scroll-pr-0.5 flex flex-row">
        {women.map((item) => (
          (item.id >= startIndex && item.id < endIndex) && (
            <div key={item.id} className="scroll-item">
              <div className="img">{item.image}</div>
              <div className="name"><p>{item.name}</p></div>

              <div className="price">{item.price}</div>
            </div>
          )
        ))}
      </div>         
          <div className="border-solid border border-indigo-100 flex-end w-50 h-10 my-32">
            <button id="2" onClick={() => handleClick("right")}>
              <img
                className="rounded-md mt-100 p-2"
                src="./images/next.png"
                width={50}
                height={50}
                alt="left"
              />
            </button>
          </div>
          </div>
  </div>
  </div>


  );
}

