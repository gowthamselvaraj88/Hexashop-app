import React from "react";
import SocialmediaImage from "./SocialmediaImage";

const Socialmedia = () => {

  const Socialmediaimg =[
    {
        id:1,
        imgUrl:"./images/instagram-01.jpg",
        category:"Faction"
    },
    {
        id:2,
        imgUrl:"./images/instagram-02.jpg",
        category:"New"
    },
    {
        id:3,
        imgUrl:"./images/instagram-03.jpg",
        category:"Brand"
    },
    {
        id:4,
        imgUrl:"./images/instagram-04.jpg",
        category:"Makeup"
    },
    {
        id:5,
        imgUrl:"./images/instagram-05.jpg",
        category:"Leather"
    },
    {
      id:6,
      imgUrl:"./images/instagram-06.jpg",
      category:"Bag"
  }
]

const mediaImg = Socialmediaimg.map((item) =>(<SocialmediaImage iamgeLink={item.imgUrl} category={item.category} /> ));

  return (
    // <div className="mx-auto px-4 sm:px-2 lg:px-8 max-w-7xl ">
    <section>
      <div className="mx-auto">
        <div className="grid grid-row">
          
            <div className="p-5">
              <h2 className="text-5xl m-6 p-5 font-bold">Social Media</h2>
              <span className="text-md ">
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
         
        </div>
      </div>
      <div className="md:flex p-10 md:p-5">                         {/* //md:flex flex-row */}
         {mediaImg}
        </div>
      </section>
    // </div>
  );
};

export default Socialmedia;

