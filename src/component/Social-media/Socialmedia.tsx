import React from "react";
import  SocialmediaImage  from "./SocialmediaImage";

const Socialmedia = () => {
  const Socialmediaimg = [
    {
      id: 1,
      imgUrl: "./images/instagram-01.jpg",
      category: "Faction",
    },
    {
      id: 2,
      imgUrl: "./images/instagram-02.jpg",
      category: "New",
    },
    {
      id: 3,
      imgUrl: "./images/instagram-03.jpg",
      category: "Brand",
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
     
  ];

  const Socialmediaimg2 = [
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

  const mediaImg = Socialmediaimg.map((item) => (
    <SocialmediaImage iamgeLink={item.imgUrl} category={item.category} />
  ));

  const mediaImg2 = Socialmediaimg2.map((item) => (
    <SocialmediaImage iamgeLink={item.imgUrl} category={item.category} />
  ));

  return (
    <section className="container mx-auto px-15">
        <div className="mb-5 lg:mb-8 px-5">
          <h2 className="text-2xl lg:text-5xl font-bold">Social Media</h2>
          <span className="text-sm lg:text-lg text-[#a59f9f]">
            Details to details is what makes Hexashop different from the other
            themes.
          </span>
        </div>    
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 p-3">{mediaImg} </div>       
    </section>
  );
};

export default Socialmedia;
