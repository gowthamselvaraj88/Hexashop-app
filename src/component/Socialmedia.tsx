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
  //   {
  //       id:1,
  //       imgUrl:"./images/instagram-04.jpg",
  //       category:"Makeup"
  //   },
  //   {
  //       id:2,
  //       imgUrl:"./images/instagram-05.jpg",
  //       category:"Leather"
  //   },
  //   {
  //     id:3,
  //     imgUrl:"./images/instagram-06.jpg",
  //     category:"Bag"
  // }
]
const Socialmediaimg2 =[
  {
          id:1,
          imgUrl:"./images/instagram-04.jpg",
          category:"Makeup"
  },
  {
    id:2,
    imgUrl:"./images/instagram-05.jpg",
    category:"Leather"
},
{
  id:3,
  imgUrl:"./images/instagram-06.jpg",
  category:"Bag"
}
]

const mediaImg = Socialmediaimg.map((item) =>(<SocialmediaImage iamgeLink={item.imgUrl} category={item.category} /> ));

const mediaImg2 = Socialmediaimg2.map((item) =>(<SocialmediaImage iamgeLink={item.imgUrl} category={item.category} /> ));

  return (
  
    <section>
      <div className="mx-auto">
       
          
            <div className="p-5">
              <h2 className="text-5xl m-6 p-5 font-bold">Social Media</h2>
              <span className="text-md text-[#d4d4d4] ">
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
         <div className=" flex justify-center">
        <div  className="grid grid-cols-3 lg:grid-cols-6 ">                       
            <div>{mediaImg}<div>{mediaImg2}</div></div>
            
        </div>
        </div>
    </div>
    {/* className="md:flex flex-row lg:width-1/2 xl:width-full object-contain p-10 md:p-5" 
    className="flex grid-col-3 lg:grid-cols-6 " */}
      </section>
    
  );
};

export default Socialmedia;

