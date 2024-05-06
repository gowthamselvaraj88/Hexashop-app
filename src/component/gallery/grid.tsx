'use client'
import Link from "next/link";
import React from "react";

const Grid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex-auto">
                <figure className="relative">
                    
                        <img className="flex" src="/images/baner-right-image-01.jpg" alt="" />
                    
                    <figcaption className="absolute px-4 text-lg text-white bottom-6 ">
                        <div className="mb-24 ml-20 md:mb-28 md:ml-24 lg:mb-10 lg:ml-8 xl:mb-20 xl:ml-12 text-center">
                            <p className="text-3xl font-bold">Women</p>
                            <p className="text-sm p-3">Best clothes for Women</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
             <div className="flex-auto">
                <figure className="relative">
                    
                        <img className="" src="/images/baner-right-image-02.jpg" alt="" />
                    
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <div className="mb-24 ml-20 md:mb-28 md:ml-24 lg:mb-10 lg:ml-10 xl:mb-20 xl:ml-20 text-center">
                            <p className="text-3xl font-bold">Men</p>
                            <p className="text-sm p-3">Best clothes for Men</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="flex-auto">
                <figure className="relative">
                  
                        <img className="" src="/images/baner-right-image-03.jpg" alt="" />
                  
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <div className="mb-24 ml-20 md:mb-28 md:ml-24 lg:mb-8 lg:ml-12 xl:mb-20 xl:ml-20 text-center">
                            <p className="text-3xl font-bold">kid's</p>
                            <p className="text-sm p-3">Best clothes for Kids</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
             <div className="flex-auto">
                <figure className="relative">
                   
                        <img className="" src="/images/baner-right-image-04.jpg" alt="" />
                   
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <div className="mb-24 ml-20 md:mb-28 md:ml-24 lg:mb-12 lg:ml-12 xl:mb-20 xl:ml-20 text-center">
                            <p className="text-3xl font-bold">Accessoris</p>
                            <p className="text-sm p-3">Best Trend Accessoris</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Grid;
