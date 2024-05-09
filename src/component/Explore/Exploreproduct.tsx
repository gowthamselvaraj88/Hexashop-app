// import Link from "next/link";
// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import Imagepattern from "./Imagepattern";

// export default function Exploreproduct () {
//   return (
//     <section id="explore">
//       <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
//         <div className="mb-2">
//           <div className="button xl:text-xl">
//             <Link
//               href="#"
//               className="block mt-1 text-2xl lg:text-5xl font-bold leading-tight text-black hover:underline"
//             >
//               Explore Our Products
//               </Link>
//             <p className="mt-4 text-sm lg:text-md  text-[#a59f9f]">
//               You are allowed to use this HexaShop HTML CSS template. You can
//               feel free to modify or edit this layout. You can convert this
//               template as any kind of ecommerce CMS theme as you wish.
//             </p>
           
            
//               <p className="mt-4 text-slate-500 flex">
//                 <FaQuoteLeft size={50} className="inline-block text-black mr-2" />
//                 <span className="mt-2 text-lg  text-black">
//                   You are not allowed to redistribute this template ZIP file on any other website.
//                 </span>
//               </p>

//             <p className="mt-4 text-sm lg:text-md text-[#a59f9f]">
//               There are 5 pages included in this HexaShop Template and we are
//               providing it to you for absolutely free of charge at our
//               TemplateMo website. There are web development costs for us.
//             </p>
//             <p className="mt-4 text-sm lg:text-md  text-[#a59f9f]">
//               If this template is beneficial for your website or business,
//               please kindly{" "}
//               <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//                 support us
//               </span>{" "}
//               a little via PayPal. Please also tell your friends about our great
//               website. Thank you.
//             </p>
//           </div>

//           <button className="hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mt-5 mx-30">
//             Describe me
//           </button>
//         </div>

//         <Imagepattern/>
//       </div>
//       </section>
//   );
// };


import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Imagepattern from "./Imagepattern";

export default function Exploreproduct() {
  return (
    <section id="explore" className="py-12 2xl:px-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-20 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-2">
          <div className="button">
            <Link
              href="#"
              className="block text-2xl lg:text-5xl font-bold leading-tight text-black hover:underline"
            >
              Explore Our Products
            </Link>
            <p className="mt-4 text-sm lg:text-md text-[#a59f9f]">
              You are allowed to use this HexaShop HTML CSS template. You can
              feel free to modify or edit this layout. You can convert this
              template as any kind of ecommerce CMS theme as you wish.
            </p>
            <p className="mt-4 text-sm lg:text-md text-[#a59f9f] flex items-center">
              <FaQuoteLeft size={20} className="mr-2 text-black" />
              <span className="text-lg text-black">
                You are not allowed to redistribute this template ZIP file on any other website.
              </span>
            </p>
            <p className="mt-4 text-sm lg:text-md text-[#a59f9f]">
              There are 5 pages included in this HexaShop Template and we are
              providing it to you for absolutely free of charge at our
              TemplateMo website. There are web development costs for us.
            </p>
            <p className="mt-4 text-sm lg:text-md text-[#a59f9f]">
              If this template is beneficial for your website or business,
              please kindly{" "}
              <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                support us
              </span>{" "}
              a little via PayPal. Please also tell your friends about our great
              website. Thank you.
            </p>
          </div>
          <button className="hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mt-5">
            Describe me
          </button>
        </div>
        <Imagepattern />
      </div>
    </section>
  );
};
