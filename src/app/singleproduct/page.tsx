"use client"
import Footer from '@/component/common/Footer'
import Header from '@/component/common/Header'
import { Span } from 'next/dist/trace'
import { useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Singleproduct = () => {
  const [count, setCount] = useState(0)


  return (
    <section>
      <Header />
      <div className='relative pt-[150px]'><img src="./images/products-page-heading.jpg"></img>
        <div className='absolute text-white bottom-[40px] left-[40px] md:bottom-[95px] md:left-[240px]  lg:bottom-[120px] lg:left-[225px]  xl:bottom-[185px] xl:left-[440px] 2xl:bottom-[185px] 2xl:left-[440px] text-center  '>
          <h3 className='text-lg md:text-4xl lg:text-6xl xl:text-7xl font-bold'>Single Product Page</h3>
          <p className='text-xs lg:text-lg xl:text-xl italic'>Awesome & Creative HTML CSS layout by TemplateMo</p></div></div>
      <div className="container mx-auto">
        <div className="grid grid-col-1 md:grid-cols-3 p-5 ">
          <div className='col-span-2'>
            <div className="justify-center">
              <div className='mb-8'><img src="./images/single-product-01.jpg"></img></div>
              <div><img src="./images/single-product-02.jpg"></img></div>
            </div>
          </div>
          <div className="cols-1 p-3">
            <div className='className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-b border-dotted-amber-80' >
              <div className="text-xl">
                <h4 className='flex mb-[-29px] font-bold'>New Green Jacket </h4>
                <p className="ml-[260px]">★★★★★</p>
              </div>
              <p className="p-2">$75.00</p>
            </div>
            <div className='p-3 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80'>
              <div className='text-sm text-[#d4d4d4] p-3'>
                <p className='italic text-md'>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
              </div>

              <div className='flex'>
                <FaQuoteLeft size={80} className="inline-block mr-2" /> <p className='text-sm p-3'>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiuski mod </p>
              </div>
            </div>
            <div className='justify-space-between '>
              <div className="justify-start p-5 flex bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80 " ><p className='text-[#4b4a4a] font-bold mr-24 lg:mr-[5.50rem] xl:mr-24'>No.of Orders</p>
                <div className='contents '>
                  <button className='border border-black p-1' onClick={() => (setCount(count + 1))}>+</button>
                  <p className='flex border border-black p-1'>{count}</p>
                  <button className='border border-black p-1 ' onClick={() => (setCount(count - 1))}>-</button>
                </div>
              </div>
              <div className='flex p-5'>
                <p className='text-[#4b4a4a] font-bold'> Total Amount:$250.00</p>
                <div className='ml-[20px]'>
                  <button className='border border-black p-1 text-black text-[12px] bg-white'>Add to Card</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Singleproduct
