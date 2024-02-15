import React, { useState } from 'react';
import StarIcon from '../../icons/StarIcon';

const CardHover = ({ review }) => {
  const [stars, setStars] = useState([]);

  return (
    <React.Fragment>
      <div
        className={`absolute z-10 w-full h-full flex items-center justify-center shadow-lg flex-col`}
      >
        <div className='absolute w-full h-full bg-black opacity-40 rounded-md'></div>
        <p className='text-white z-20 p-3 text-center leading-loose'>{review && review}</p>
        <p className='flex flex-row gap-1 z-30'>
          {stars.map((_, i) => {
            return <StarIcon key={i} color={'yellow'} />;
          })}
        </p>
      </div>
    </React.Fragment>
  );
};
export default CardHover;
