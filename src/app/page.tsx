import * as React from "react";
import Scroll from "@/component/owl-carousel/Mens";
import Socialmedia from "@/component/Social-media/Socialmedia";
import Address from "@/component/Address";
import Header from "@/component/common/Header";
import Footer from "@/component/common/Footer";
import Scrollwomen from "@/component/owl-carousel/Women";
import Scrollkid from "@/component/owl-carousel/Kids";
import Imagegallery from "@/component/gallery/Imagegallery";
import Exploreproduct from "@/component/Explore/Exploreproduct";
import "./globals.css";

export default function MediaCard() {
  return (
    <section className="">
       <div>
        <Header />
      </div>
     
      <div  className=" py-10 border-b border-dotted-amber-80">
        <Imagegallery />
      </div>
      <div  className="border-b border-dotted-amber-80"
        id="mens"
      >
        <Scroll />
      </div>

      <div className="border-b border-dotted-amber-80" 
        id="womens"
      >
        <Scrollwomen />
      </div>
      <div className="border-b border-dotted-amber-80"
        id="kids">
        <Scrollkid />
      </div> 
      
      <div  className="py-5 border-b border-dotted-amber-80">
        <Exploreproduct />
      </div>
      <div  className="py-10 border-b border-dotted-amber-80">
         <Socialmedia /> 
      </div> 
      <div  className="py-10 border-b border-dotted-amber-80">
        <Address />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
