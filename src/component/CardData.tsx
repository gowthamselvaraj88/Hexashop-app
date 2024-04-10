import React from 'react';
import ReactStars from 'react-stars';

const CardData = (props: any) => {
  return (
    <div className="sm:justify-center  mt-10 ml-5">
            <img
            className="rounded "
            src={props.imageUrl}
            width={250}
            height={250}
          />
            <div className='flex md:gap-15'><p className='mr-5'>{props.name}</p>
            <ReactStars
              count={5}
              size={14}
              color2={'#ffd700'} /></div>
            <div className='p-2'><p>{props.price}</p></div>
    </div>
  )
}

export default CardData
