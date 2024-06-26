import * as React from "react";
import Scroll from "@/component/owl-carousel/Scroll";
import Socialmedia from "@/component/Social-media/Socialmedia";
import Address from "@/component/Address";
import Exploreproduct from "@/component/Exploreproduct";
import Header from "@/component/common/Header";
import Footer from "@/component/common/Footer";
import Scrollwomen from "@/component/owl-carousel/Scrollwomen";
import Scrollkid from "@/component/owl-carousel/Scrollkid";
import Imagegallery from "@/component/gallery/Imagegallery";

export default function MediaCard() {
  return (
    <section className="w-full h-full ">
      <section>
        <Header />
      </section>

      <section>
        <Imagegallery />
      </section>
      <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80"
        id="mens"
      >
        <Scroll />
      </section>

      <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80"
        id="womens"
      >
        <Scrollwomen />
      </section>
      <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80"
        id="kids"
      >
        <Scrollkid />
      </section>

      <section
       className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
       section1 border-y border-dotted-amber-80"
      >
        <Socialmedia />
      </section>
      <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto"
        id="Explore border-y border-dotted-amber-80"
      >
        <Exploreproduct />
      </section>
      <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
       border-y border-dotted-amber-80"
      >
        <Address />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}
