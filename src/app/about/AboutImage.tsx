import React from 'react'

const AboutImage = () => {
  return (
    <div>
        <div className='container mx-auto py-10'>
             <div className='md:ml-[150px] lg:ml-[330px]  items-center justify-center p-3'>
            <h3 className='text-2xl md:text-4xl font-bold'>Our Amazing Team</h3>
            <p className='text-[#d4d4d4] italic text-xs md:text-sm'>Details to details is what makes Hexashop different from the other themes.</p>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto p-5'>
                <div className='grid-cols-1 p-3'>
                    <img src='/images/team-member-01.jpg'/>
                    <div className='p-3 items-center justify-center'>
                    <h3 className='fond-extrabold text-xl  md:text-2xl lg:text-3xl '>Ragnar Lodbrok</h3>
                    <p className='text-sm ml-3 md:ml-5 text-[#d4d4d4] italic md:p-2'>Product Caretaker</p>
                    </div>
                </div>
                <div className='grid-cols-1 p-3 justify-center'>
                    <img src='/images/team-member-02.jpg'/>
                    <div className='p-3 ml-8'>
                    <h3 className='fond-extrabold text-xl  md:text-2xl lg:text-3xl '>Ragnar Lodbrok</h3>
                    <p className='text-sm ml-3 md:ml-5 text-[#d4d4d4] italic md:p-2'>Product Caretaker</p>
                    </div>
                </div>
                <div className='grid-cols-1 p-3'>
                    <img src='/images/team-member-03.jpg'/>
                    <div className='p-3 ml-8'>
                    <h3 className='fond-extrabold text-xl md:text-2xl lg:text-3xl '>Ragnar Lodbrok</h3>
                    <p className='text-sm ml-3 md:ml-5 text-[#d4d4d4] italic md:p-2'>Product Caretaker</p>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default AboutImage
