"use client"
import React from 'react';
import "@/app/product/Product.css"
import "@/app/globals.css";
import { mens } from '@/component/owl-carousel/CarosuelData';
import { Womens } from '@/component/owl-carousel/CarosuelData';
import { kids } from '@/component/owl-carousel/CarosuelData';


if (typeof window !== 'undefined' && !window.$) {
    window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Header from '@/component/common/Header';
import Footer from '@/component/common/Footer';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const options = {
    loop: true,
    margin: 10,
    items: 3,
    autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        540: {
            items: 2,
        },
        1025: {
            items: 3,
        }
    },
};

export default function product() {
    return (
        <section>
            <Header />
            <div className='flex items-center justify-center pt-[150px]'>
            <div className='relative'><img src="./images/products-page-heading.jpg"></img></div>
                <div className='absolute text-white'>
                    <h3 className='text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center'>Check Our Products</h3>
                    <p className='italic mt-3 text-xs md:text-sm lg:text-xl'>Awesome & Creative HTML CSS layout by TemplateMo</p>
                </div>
            </div>
            <div className='container mx-auto px-8 md:px-10 lg:px-12 xl:px-12  lg:pt-24 pt-10 pb-2'>
                <div>
                    <div className='text-2xl lg:text-4xl font-bold'>Our Latest Products</div>
                    <p className='italic text-sm lg:text-xl text-gray-500 font_size p-3'>Check out all of our products.</p>
                </div>
            </div>
            <div className='container mx-auto grid-cols-1 px-12 lg:px-22 gap-3'>
                <OwlCarousel className="owl-theme " {...options}>
                    {mens.map((a) => (
                        <div className="relative">
                            <img src={a.men} />
                            <div className='pt-8'>
                                <p className='font-bold text-lg'>{a.heading}</p>
                                <p className='lg:absolute lg:end-0 lg:bottom-6'>{a.ratings}</p>
                                <p className='text-gray-400 font-bold'>{a.price}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
                <OwlCarousel className="owl-theme" {...options}>
                    {Womens.map((a) => (
                        <div className="relative">
                            <img src={a.women} />
                            <div className='pt-8'>
                                <p className='font-bold text-lg'>{a.heading}</p>
                                <p className='lg:absolute lg:end-0 lg:bottom-6'>{a.ratings}</p>
                                <p className='text-gray-400 font-bold'>{a.price}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
                <OwlCarousel className="owl-theme" {...options}>
                    {kids.map((a) => (
                        <div className="relative">
                            <img src={a.kid} />
                            <div className='pt-8'>
                                <p className='font-bold text-lg'>{a.heading}</p>
                                <p className='lg:absolute lg:end-0 lg:bottom-6'>{a.ratings}</p>
                                <p className='text-gray-400 font-bold'>{a.price}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
                <div className='flex justify-center gap-5 mt-5 p-10 '>
                    <button ><Link className='border border-black p-2' href={'/product'} >1</Link></button>
                    <button><Link className='border border-black p-2' href={'/product'} >2</Link></button>
                    <button><Link className='border border-black p-2' href={'/product'} >3</Link></button>
                    <button><Link className='border border-black p-2' href={'/product'} >4</Link></button>
                    <button><Link className='border border-black p-2' href={'/product'} >5</Link></button>
                </div>
            </div >
            <div><Footer /></div>
        </section>

    )
}