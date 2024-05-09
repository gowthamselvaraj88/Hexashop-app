// import React from 'react'

// const Imagepattern = () => {
//   return (
//     <div className=''>
//       <div className="overflow-x-auto mx-auto md:max-w-7xl gap-4">
//           <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
//             <div className="flex items-center md:w-[263px] md:h-[263px] bg-[#c2b8b8]">
//               <div className="p-4"> <h3 className="text-4xl font-bold">Leather Bags</h3>
//               <p className='pt-5 text-sm'>Latest Collection</p></div>
//             </div>
            
//             <div className="flex justify-center">
//               <img src="./images/explore-image-01.jpg"/>
//             </div>
//           </div>
        
          
//           <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
//             <div className="flex justify-center">
//               <img src="./images/explore-image-02.jpg"/>
//             </div>
//             <div className="flex items-center bg-[#c2b8b8] md:w-[263px] md:h-[263px]">
//               <div className="p-4"> <h3 className="text-4xl font-semibold">Different Types</h3>
//               <p className='pt-5 text-sm'>Over 304 Products</p></div>
//             </div>

//           </div>
//         </div>
      
//     </div>
//   )
// }

// export default Imagepattern

import React from 'react'

const Imagepattern = () => {
  return (
    <div className='overflow-x-auto mx-auto max-w-7xl gap-4'>
      <div className='flex flex-col md:flex-row gap-5 mt-5 justify-center'>
        <div className='flex items-center md:w-[263px] md:h-[263px] bg-[#c2b8b8]'>
          <div className='p-4'>
            <h3 className='text-4xl font-bold'>Leather Bags</h3>
            <p className='pt-5 text-sm'>Latest Collection</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src='./images/explore-image-01.jpg' className='w-full md:max-w-[400px]' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-5 mt-5 justify-center'>
        <div className='flex justify-center'>
          <img src='./images/explore-image-02.jpg' className='w-full md:max-w-[400px]' />
        </div>
        <div className='flex items-center bg-[#c2b8b8] md:w-[263px] md:h-[263px]'>
          <div className='p-4'>
            <h3 className='text-4xl font-semibold'>Different Types</h3>
            <p className='pt-5 text-sm'>Over 304 Products</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Imagepattern
