import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BannerReview from './Banner/BannerReview';
import { BannerReviews } from '../BannerInfo';
import BannerBackgroundImage from './Banner/BannerBackgroundImage';
const Banner = () => {
  const [bannerIndex, setBannerIndex] = React.useState(0);
  return (
    <div className='relative'>
      <BannerBackgroundImage bannerIndex={bannerIndex} setBannerIndex={setBannerIndex} />
      <BannerReview review={BannerReviews[bannerIndex]} />
    </div>
  );
};

export default Banner;
