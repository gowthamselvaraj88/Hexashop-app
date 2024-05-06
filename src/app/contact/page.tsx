import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import Address from '../../component/Address';
import Link from 'next/link';
import Header from '@/component/common/Header';
import Footer from '@/component/common/Footer';
import "@/app/globals.css";

const Contact = () => {

  return (
    <section>
      <Header />
      <div className='w-full h-full relative'>
        <img className='w-inherit pt-[130px]' src="./images/about-us-page-heading.jpg" ></img>
        <div className='absolute text-white bottom-[40px] left-[40px] md:bottom-[95px] md:left-[290px]  lg:bottom-[120px] lg:left-[335px]  xl:bottom-[215px] xl:left-[540px] text-center  '>
          <h3 className='text-lg md:text-4xl lg:text-5xl xl:text-7xl font-bold'>Contact Us</h3>
          <p className='text-xs lg:text-lg xl:text-2xl italic'>Awesome, clean & creative HTML5 Template</p></div>
      </div>
      <div className="container mx-auto py-10 px-8 grid grid-col-1 md:grid-cols-2">
        <div className='grid grid-col-1 md:ml-0  lg:ml-0 justify-center'>
          <div
            style={{
              overflow: "hidden",
              resize: "none",
              maxWidth: "85%",
              width: 420,
              height: 400
            }}
          >
            <div
              id="embed-map-canvas"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=Bharathi+Art+Works+267F+24H,+Venkta+Puram,+Saidapet,+Chennai,+Tamil+Nadu+600015&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
            <Link
              className="googl-ehtml"
              href="https://www.bootstrapskins.com/themes"
              id="grab-maps-authorization"
            >
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "#embed-map-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;"
              }}
            />
          </div></div>

        <div className='grid grid-cols-1 '>
          <div className='p-2 md:p-0 mt-3 md:mt-0'>
            <p className='text-3xl font-bold mb-3'>Say Hello.Don't Be Shy!</p>
            <p className='text-sm md:text-md lg:text-xl text-[#a59f9f] '>Details to details is what makes Hexashop different from the other themes.</p>
          </div>
          <div className='justify-between w-3/4'>
            <div className='flex '>
              <input className='border border-black w-1/2 h-[45px] text-center' placeholder='your name' />
              <input className='border border-black w-1/2 ml-[35px] text-center' placeholder='your email' />
            </div>
            <div className='mt-5 items-center'>
              <textarea className='border border-black-900 w-full h-[160px] text-start h-auto' placeholder='your message' />
              <FaTelegramPlane size={40} color="white" className='border border-black bg-black' />
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-10 px-8'><Address /></div>
      <Footer />
    </section>
  )
}

export default Contact
