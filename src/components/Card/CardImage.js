import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardHover = ({ path }) => {
  return (
    <LazyLoadImage
      className='md:w-[card-img-w] md:h-[card-img-h] w-[card-img-sm-w] h-[card-img-sm-h] rounded-sm shadow-lg'
      src={
        path
          ? `https://www.themoviedb.org/t/p/original/${path}`
          : 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'
      }
      alt='path'
      effect='blur'
      // width={'256px'}
      // height={'384px'}
    />
  );
};

export default CardHover;
