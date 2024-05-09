import React from 'react'
import Card from './Card'
import AboutImage from './AboutImage'
import { FaQuoteLeft, FaLinkedin, FaFacebook, FaBehance, FaTwitter } from 'react-icons/fa';
import Address from '@/component/Address';
import Header from '@/component/common/Header';
import Footer from '@/component/common/Footer';
import "@/app/globals.css";

const About = () => {
  return (
    <section>
      <div><Header /></div>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='relative'><img className='pt-[130px]' src="./images/about-us-page-heading.jpg"/></div>
        <div className='absolute text-white pt-[110px] md:pt-0'>
          <h3 className='text-xl md:text-5xl xl:text-6xl font-bold text-center'>About Our Company</h3>
          <p className='italic text-xs md:text-sm lg:text-xl mt-3'>Awesome & Creative HTML CSS layout by TemplateMo</p>
        </div>
      </div>
      <div className='container mx-auto mb-5 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 p-8'>
          <div className='grid-cols-1'>
            <img src='./images/about-left-image.jpg' />
          </div>
          <div className='grid-cols-1 ml-0 md:ml-[35px] py-10 md:p-0'>
          <div className='bg-white m-auto p-auto
                           border-y border-dotted-amber-80'>
            <div className='text-black items-center justify-center'>
                <h3 className='text-xl md:text-2xl lg:text-4xl font-bold text-start lg:p-2'>About Us & Our Skills  </h3>
                <p className='p-3 italic mt-3 text-[#a59f9f] text-xs md:text-sm lg:text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
              </div>
              <div className='p-3  flex'>
                <FaQuoteLeft size={40} className="inline-block mr-2" /><p className='text-xs italic'>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiuski mod </p>
              </div>
              <div className='p-3'>
                <p className='italic text-[#a59f9f] text-xs md:text-sm lg:text-md'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </div>
            <div className='sm:p-5 md:p-0 '>
              <ul className='flex'>
                <li><FaFacebook size={35} className="inline-block mr-2  bg-white rounded-full" /></li>
                <li><FaTwitter color={"white"} size={35} className="inline-block mr-2 p-2 bg-black rounded-full" /></li>
                <li><FaLinkedin size={35} className="inline-block mr-2 bg-white rounded-full" /></li>
                <li> <FaBehance color={"white"} size={35} className="inline-block mr-2 p-2 bg-black rounded-full" /></li>
              </ul>

            </div>
          </div>

        </div>
      </div>
      <div className='border-y border-dotted border-gray-300'><AboutImage /></div>
      <div className='border-y border-dotted border-gray-300'><Card /></div>
      <div className='container mx-auto p-10'><Address /></div>
<Footer />
</section>
  )
}

export default About
