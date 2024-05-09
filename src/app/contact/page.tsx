// import React from 'react'
// import { FaTelegramPlane } from 'react-icons/fa';
// import Address from '../../component/Address';
// import Link from 'next/link';
// import Header from '@/component/common/Header';
// import Footer from '@/component/common/Footer';
// import "@/app/globals.css";

// const Contact = () => {

//   return (
//     <section className='container mx-auto  max-w-screen-2xl'>
//       <Header />
//       <div className='relative py-10 border-y border-dotted border-gray-300'>
//         <img className='pt-[130px]' src="./images/about-us-page-heading.jpg" ></img>
//         <div className='absolute text-white bottom-[40px] left-[40px] md:bottom-[95px] md:left-[290px]  lg:bottom-[120px] lg:left-[335px]  xl:bottom-[125px] xl:left-[540px] 2xl:bottom-[225px] 2xl:left-[600px] text-center'>
//           <h3 className='text-lg md:text-5xl lg:text-6xl font-bold p-5'>Contact Us</h3>
//           <p className='text-xs lg:text-xl font-bold italic'>Awesome, clean & creative HTML5 Template</p></div>
//       </div>
//       <div className="container mx-auto py-20 px-8 grid grid-col-1 md:grid-cols-2 border-y border-dotted border-gray-300">
//       <div className='grid grid-cols-1 md:grid-cols-2 md:ml-0 lg:ml-0 justify-center'>
//   <div className="md:mr-4 lg:mr-0">
//     <div
//       style={{
//         overflow: "hidden",
//         resize: "none",
//         maxWidth: "85%",
//         width: "100%",
//         height: "450px"
//       }}
//     >
//       <div
//         id="embed-map-canvas"
//         style={{ height: "100%", width: "100%", maxWidth: "100%" }}
//       >
//         <iframe
//           style={{ height: "100%", width: "100%", border: 0 }}
//           src="https://www.google.com/maps/embed/v1/place?q=Bharathi+Art+Works+267F+24H,+Venkta+Puram,+Saidapet,+Chennai,+Tamil+Nadu+600015&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//         />
//       </div>
//       <Link
//         className="googl-ehtml"
//         href="https://www.bootstrapskins.com/themes"
//         id="grab-maps-authorization"
//       >
//       </Link>
//       <style
//         dangerouslySetInnerHTML={{
//           __html:
//             "#embed-map-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;"
//         }}
//       />
//     </div>
//   </div>
//   <div className='p-2 md:p-0 mt-3 md:mt-0'>
//     <p className='text-4xl font-bold mb-3'>Say Hello. Don't Be Shy!</p>
//     <p className='text-md text-[#a59f9f]'>Details to details is what makes Hexashop different from the other themes.</p>
//     <div className='flex flex-col md:flex-row justify-between mt-3'>
//       <input className='border border-black w-full md:w-[48%] h-[40px] italic mb-3 md:mb-0' placeholder='Your Name' />
//       <input className='border border-black w-full md:w-[48%] h-[40px] italic' placeholder='Your Email' />
//     </div>
//     <textarea className='border border-black-900 w-full h-[130px] text-start h-auto mb-5' placeholder='Your Message' />
//     <div className='flex justify-end'>
//       <FaTelegramPlane size={40} color="white" className='border border-black bg-black py-2 px-4 cursor-pointer' />
//     </div>
//   </div>
// </div>

//         <div className='grid grid-col-1 md:ml-0  lg:ml-0 justify-center'>
//           <div
//             style={{
//               overflow: "hidden",
//               resize: "none",
//               maxWidth: "85%",
//               width: 650,
//               height: 450
//             }}
//           >
//             <div
//               id="embed-map-canvas"
//               style={{ height: "100%", width: "100%", maxWidth: "100%" }}
//             >
//               <iframe
//                 style={{ height: "100%", width: "100%", border: 0 }}
//                 src="https://www.google.com/maps/embed/v1/place?q=Bharathi+Art+Works+267F+24H,+Venkta+Puram,+Saidapet,+Chennai,+Tamil+Nadu+600015&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//               />
//             </div>
//             <Link
//               className="googl-ehtml"
//               href="https://www.bootstrapskins.com/themes"
//               id="grab-maps-authorization"
//             >
//             </Link>
//             <style
//               dangerouslySetInnerHTML={{
//                 __html:
//                   "#embed-map-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;"
//               }}
//             />
//           </div></div>

//         <div className='grid grid-cols-1 '>
//           <div className='p-2 md:p-0 mt-3 md:mt-0'>
//             <p className='text-4xl font-bold mb-3'>Say Hello.Don't Be Shy!</p>
//             <p className='text-md text-[#a59f9f]'>Details to details is what makes Hexashop different from the other themes.</p>
//           </div>
//           <div className='justify-between'>
//             <div className='flex '>
//               <input className='border border-black w-1/2 h-[40px] italic' placeholder='your name' />
//               <input className='border border-black w-1/2 ml-[35px] italic' placeholder='your email' />
//             </div>
//             <div className='mt-5 items-center'>
//               <textarea className='border border-black-900 w-full h-[130px] text-start h-auto mb-5' placeholder='your message' />
//               <FaTelegramPlane size={40} color="white" className='border border-black bg-black py-2' />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='container mx-auto py-10 px-8'><Address /></div>
//       <Footer />
//     </section>
//   )
// }

// export default Contact

import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Address from '../../component/Address';
import Link from 'next/link';
import Header from '@/component/common/Header';
import Footer from '@/component/common/Footer';
import "@/app/globals.css";

const Contact = () => {
  return (
    <section className='mx-auto justify-center max-w-screen-2xl'>
      <div><Header /></div>
      <div className='flex items-center justify-center py-10 border-y border-dotted border-gray-300'>
      <div className='relative'><img className='pt-[130px]' src="./images/about-us-page-heading.jpg" alt="About Us" /></div>
        <div className='absolute text-white '>
          <h3 className='text-lg md:text-5xl lg:text-6xl font-bold p-5'>Contact Us</h3>
          <p className='text-xs lg:text-xl font-bold italic'>Awesome, clean & creative HTML5 Template</p>
        </div>
      </div>
      <div className="container mx-auto py-20 px-8 grid grid-col-1 lg:grid-cols-2 border-y border-dotted border-gray-300">
        <div className='grid-col-1 justify-center'>
          <div
            style={{
              overflow: "hidden",
              resize: "none",
              maxWidth: "85%",
              width: 500 , 
              height: 450
            }}
          >
            <div
              id="embed-map-canvas"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                title="Google Maps"
                style={{ height: "100%", width: "100%", border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=Bharathi+Art+Works+267F+24H,+Venkta+Puram,+Saidapet,+Chennai,+Tamil+Nadu+600015&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
            <Link className="googl-ehtml" href="https://www.bootstrapskins.com/themes" id="grab-maps-authorization" />
            <style dangerouslySetInnerHTML={{ __html: "#embed-map-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;" }} />
          </div>
        </div>
        <div className='grid-cols-1'>
          <div className='mt-3 md:mt-0 py-5 lg:py-0'>
            <p className='text-4xl font-bold mb-3'>Say Hello. Don't Be Shy!</p>
            <p className='text-md text-[#a59f9f]'>Details to details is what makes Hexashop different from the other themes.</p>
          </div>
          <div className='justify-between'>
            <div className='flex md:flex-row'> 
              <input className='border border-black  h-[40px] italic mb-2 md:mb-0 md:mr-2 p-2' placeholder='Your Name' />
              <input className='border border-black  h-[40px] italic p-2' placeholder='Your Email' />
            </div>
            <div className='mt-5 items-center'>
              <textarea className='border border-black-900 w-full h-[130px] text-start h-auto mb-5 p-2' placeholder='Your Message' />
              <FaTelegramPlane size={40} color="white" className='border border-black bg-black py-2 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-10 px-8'><Address /></div>
      <Footer />
    </section>
  )
}

export default Contact;

