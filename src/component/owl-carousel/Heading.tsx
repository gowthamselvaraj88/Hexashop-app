import React from 'react'

const Heading = (props:any) => {
    const { MenTitle,MansDescribe,item } = props;
    return (
        <div className='px-3 md:px-32 lg:px-42 py-5 md:py-10' key={item}>
            <div className='contents'>
                <div className='lg:text-4xl text-2xl font-bold'>{MenTitle}</div>
                <p className='italic text-gray-500 font_size'>{MansDescribe}</p>
            </div>
        </div>
    )
}

export default Heading;
