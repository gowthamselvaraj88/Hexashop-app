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
      <div className='w-full h-full relative'>
        <Header />
        <img className='pt-[130px]' src="./images/products-page-heading.jpg"/>
        <div className='absolute text-white bottom-[30px] left-[65px] md:bottom-[100px] md:left-[175px] lg:bottom-[150px] lg:left-[285px] xl:bottom-[200px] xl:left-[460px] text-center '>
          <h3 className='text-xl md:text-5xl xl:text-6xl font-bold text-center'>About Our Company</h3>
          <p className='italic text-xs md:text-sm lg:text-xl mt-3'>Awesome & Creative HTML CSS layout by TemplateMo</p>
        </div>
      </div>
      <div className='container mx-auto mb-5 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 p-8'>
          <div className='grid-cols-1'>
            <img src='./images/about-left-image.jpg' />
          </div>
          <div className='grid-cols-1 ml-[35px] p-3 md:p-0'>
          <div className='bg-white m-auto p-auto
                           border-y border-dotted-amber-80'>
            <div className='text-black bottom-[40px] left-[70px] md:bottom-[70px] md:left-[150px] lg:bottom-[140px] lg:left-[340px]'>
                <h3 className='text-xl md:text-2xl lg:text-4xl font-bold text-start lg:p-2'>About Us & Our Skills  </h3>
                <p className='p-3 italic mt-3 text-[#a59f9f] text-xs md:text-sm lg:text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
              </div>
              <div className='p-3  flex'>
                <FaQuoteLeft size={30} className="inline-block mr-2" /><p className='text-xs italic'>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiuski mod </p>
              </div>
              <div className='p-3'>
                <p className='italic text-[#a59f9f] text-xs md:text-sm lg:text-md'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </div>
            <div className=' p-5'>
              <ul className='flex'>
                <li><FaFacebook size={25} className="inline-block mr-2  bg-white rounded-full" /></li>
                <li><FaTwitter color={"white"} size={25} className="inline-block mr-2 bg-black rounded-full" /></li>
                <li><FaLinkedin size={25} className="inline-block mr-2  bg-white rounded-full" /></li>
                <li> <FaBehance color={"white"} size={25} className="inline-block mr-2 bg-black rounded-full" /></li>
              </ul>

            </div>
          </div>

        </div>
      </div>
      <div className='p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80'><AboutImage /></div>
      <div className='p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80'><Card /></div>
      <div className='container mx-auto p-10'><Address /></div>
<Footer />
</section>
  )
}

export default About
 