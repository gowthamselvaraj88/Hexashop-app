import Link from 'next/link'
import React from 'react'


const Card = () => {
    return (
        <div className='container mx-auto py-10 '>
             <div className='md:ml-[150px] lg:ml-[300px] items-center justify-center'>
            <h3 className='text-2xl md:text-5xl font-bold p-3'>Our Services</h3>
            <p className='text-[#a59f9f] italic text-xs md:text-sm p-2'>Details to details is what makes Hexashop different from the other themes.</p>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto p-5'>
                <div className='grid-cols-1 p-3'>
                    <div className="p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  text-center">
                        <div className="">
                           <Link href="#">
                                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Synther Vaporware</h5>
                            </Link>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                        </div>
                        <Link href="#">
                            <img className="h-auto w-auto mx-auto" src="./images/service-01.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className='grid-cols-1 p-3'>
                    <div className="p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  text-center">
                        <div className=" ">
                            <Link href="#">
                                <h5 className="mb-2 text-[16px] md:text-sm lg:text-md font-bold tracking-tight text-gray-900 dark:text-white">Locavore Squidward</h5>
                            </Link>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                        </div>
                        <Link href="#">
                            <img className="h-auto w-auto mx-auto" src="./images/service-02.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className='grid-cols-1 p-3'>
                    <div className="p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  text-center">
                        <div className="">
                            <Link href="#">
                                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Health Gothfam</h5>
                            </Link>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                        </div>
                        <Link href="#">
                            <img className="h-auto w-auto mx-auto"  src="./images/service-03.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
