"use client"
import React from 'react';
import {Womens} from "./CarosuelData";

if (typeof window !== 'undefined' && !window.$) {
    window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Heading from '@/component/owl-carousel/Heading';


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

export default function Owlcarosuel1(){

    const womenheading =[
        {
            id:0,
            menname:"Women's Latest",
            mendescribe:"Details to details is what makes Hexashop different from the other themes."
        }
    ];
    
    const Scrollheading = womenheading.map((item) => (
        <Heading MenTitle={item.menname} MansDescribe={item.mendescribe} />
      ));

    return(
        
        <section id='womens' className='container mx-auto px-4'>
                {Scrollheading}
                <div className='grid grid-cols-1 lg:px-32 md:px-20'>
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

                    </OwlCarousel >
                </div >
            </section>
        
    )
}