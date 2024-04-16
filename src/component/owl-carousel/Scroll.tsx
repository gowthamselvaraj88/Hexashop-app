"use client"
import React from 'react';
import {mens} from "./CarosuelData";

if (typeof window !== 'undefined' && !window.$) {
    window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

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
    return(
        <>
        <section id='menss'>
                <div className='lg:px-52 md:px-32 px-16 lg:pt-24 pt-10 pb-2'>
                    <div>
                        <div className='lg:text-4xl text-2xl font-bold'>Men's Latest</div>
                        <p className='italic text-gray-500 font_size'>Details to details is what makes Hexashop different from the other themes.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:px-52 md:px-32 p-16'>
                    <OwlCarousel className="owl-theme" {...options}>
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

                    </OwlCarousel >
                </div >
            </section>
        </>
    )
}