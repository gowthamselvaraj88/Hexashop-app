"use client";
import React, { useState } from "react";

export default function Scroll() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const scrollData = [
    {id:0,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-01.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },
    {id:1,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-02.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },
    {id:3,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-03.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },
    {id:4,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-01.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },
    {id:5,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-02.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },
    {id:6,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-03.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },{id:7,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-01.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },
    {id:8,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-02.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    },
    {id:9,
      image:<img
      className="rounded-sm p-3"
      src="./images/men-03.jpg"
      width={300}
      height={300}
      alt=""
    />,
    name:"classic",
    price:"$345.00",

    }
  ];
  
  const handleClick = (type: "left" | "right") => {
    if (type === "left") {
      const newStartIndex = startIndex - 3 < 0 ? 0 : startIndex - 1;
      const newEndIndex = newStartIndex + 3;
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    } else {
      const newEndIndex = endIndex + 3 > scrollData.length ? scrollData.length : endIndex + 1;
      const newStartIndex = newEndIndex - 3;
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    }
  };
  
  
  return(
    <>
  <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="text-5xl font-bold">MEN'S Lastest</h2>
                <span className="text-sm">
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
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
        {scrollData.map((item) => (
          (item.id >= startIndex && item.id < endIndex) && (
            <div key={item.id} className="scroll-item">
              <div className="img">{item.image}</div>
              <div className="img"><p>{item.name}</p></div>

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
        </>
  )}

