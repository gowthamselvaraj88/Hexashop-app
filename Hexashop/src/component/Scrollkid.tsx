'use client'
import React from 'react'
// import Carousel from "react-multi-carousel";
import ReactStars from 'react-stars';
import "react-multi-carousel/lib/styles.css";
import "./style/OwelCarousel.css";
import CardData from './CardData';


export default function Scrollkid() {
  const responsive = {
    superdisplay: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }

  };
  const Kids = [
    {
        id:10,
        image01:"./images/kid-01.jpg",
        name:"School Collection",
        price:"$80.00"
    },
    {   id:11,
        image01:"./images/kid-02.jpg",
        name:"Summer cap",
        price:"$12.00"
    },
    {   id:12,
        image01:"./images/kid-03.jpg",
        name:"Classic kid",
        price:"$30.00"
},
{
  id:13,
  image01:"./images/kid-01.jpg",
  name:"SchoolCollection",
  price:"$80.00"
},
{   id:14,
  image01:"./images/kid-02.jpg",
  name:"Summer cap",
  price:"$12.00"
},
{   id:15,
  image01:"./images/kid-03.jpg",
  name:"Classic kid",
  price:"$30.00"
}
]

const KidsData = Kids.map(item=>(<CardData
  imageUrl={item.image01}
  name={item.name}
  price={item.price}
 />))

  return (
    // <div className="row p-5">
    //             <div className="col-lg-12">
    //               <div className="section-heading md:mx-20">
    //                 <h2 className="text-5xl font-bold px-3 py-5">Kid'S Latest</h2>
    //                 <span className="text-sm p-10">
    //                   Details to details is what makes Hexashop different from
    //                   the other themes.
    //                 </span>
    //               </div>
    //             </div>
    //           <div className='md:mx-20 w-3/4 justify-center items-center md:p-10 sm:px-3'>
    //           <Carousel responsive={responsive}>
    //           {KidsData}
    //           </Carousel>
    //           </div>
    //           </div>
    <section className="sm:flex flex-row sm:p-10">
    <div className="grid grid-cols-1">
      <div className="container mx-auto">
        <div className="flex flex-wrap ">
          <div className="container mx-auto">
            <div className="row p-5">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2 className="text-5xl font-bold py-5">Kid'S Latest</h2>
                  <span className="text-sm">
                    Details to details is what makes Hexashop different from
                    the other themes.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex overflow-x-auto space-x-12 body-font">
              <section className="flex-shrink-0 ">
                {/* <div className="overflow-y absolute z-50 item-center w-full">
                  <ul>
                    <li>
                      <svg
                        className="h-6 w-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="12" r="2" />
                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                      </svg>
                    </li>
                    <li>
                      {" "}
                      <svg
                        className="w-4 h-4 ms-1 text-black-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path
                          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534
                         0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 
                         0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226
                          1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523
                           1.523 0 0 0 .387-1.575Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707
                           1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div> */}

                <span>
                  <img
                    src="./images/kid-01.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>
                <div className="mt-4">
                  <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    New Green Jacket
                  </h2>
                  <p className="mt-1">$75.00</p>
                </div>
              </section>
              <section className="flex-shrink-0 ">
                <span>
                  <img
                    src="./images/kid-02.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>

                <div className="mt-4">
                <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Classic Dress
                  </h2>
                  <p className="mt-1">$45.00</p>
                </div>
              </section>
              <section className="flex-shrink-0 ">
                <span>
                  <img
                    src="./images/kid-03.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>
                <div className="mt-4">
                <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Spring collection
                  </h2>
                  <p className="mt-1">$130.00</p>
                </div>
              </section>
              <section className="flex-shrink-0 ">
                <span>
                  <img
                    src="./images/kid-01.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>
                <div className="mt-4">
                <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    New Green Jacket
                  </h2>
                  <p className="mt-1">$75.00</p>
                </div>
              </section>
              <section className="flex-shrink-0 ">
                <span>
                  <img
                    src="./images/kid-02.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>
                <div className="mt-4">
                <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Classic Dress
                  </h2>
                  <p className="mt-1">$45.00</p>
                </div>
              </section>
              <section className="flex-shrink-0 ">
                <span>
                  <img
                    src="./images/kid-03.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>
                <div className="mt-4">
                <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Spring Collection
                  </h2>
                  <p className="mt-1">$130.00</p>
                </div>
              </section>
              <section className="flex-shrink-0 ">
                <span>
                  <img
                    src="./images/kid-01.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>
                <div className="mt-4">
                <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    New Green Jacket
                  </h2>
                  <p className="mt-1">$75.00</p>
                </div>
              </section>
              <section className="flex-shrink-0 ">
                <span>
                  <img
                    src="./images/kid-02.jpg"
                    className="bg-purple-200 h-500 w-500 "
                    alt=""
                  />
                </span>
                <div className="mt-4">
                <div className="inline-flex relative  mb-5">
                  <ReactStars
              count={5}
              size={20}
              color2={'#ffd700'} />
                  </div>  
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Classic Dress
                  </h2>
                  <p className="mt-1">$45.00</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
                );
}
