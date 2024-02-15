import React, { useEffect, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LeftChevrom from '../icons/LeftChevrom';
import RightChevrom from '../icons/RightChevrom';
import BannerReview from './Banner/BannerReview';
import { BannerImgs, BannerReviews } from '../BannerInfo';

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const carousel = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % BannerImgs.length);
    }, 10000);
    return () => clearInterval(carousel);
  }, []);

  const bannerButton = (e, i) => {
    setBannerIndex(i);
    e.preventDefault();
  };
  const nextBannerButton = (e) => {
    setBannerIndex((prevIndex) => (prevIndex + 1) % BannerImgs.length);
    e.preventDefault();
  };
  const prevBannerButton = (e) => {
    setBannerIndex((prevIndex) => (prevIndex - 1 + BannerImgs.length) % BannerImgs.length);
    e.preventDefault();
  };

  return (
    <div className='relative'>
      <div
        style={{
          backgroundImage: `url(${BannerImgs[bannerIndex]})`,
          backgroundSize: '100% 100%',
          position: 'relative',
          width: '100vw',
          height: '40vw',
          transition: 'background-image 500ms ease-in-out',
          boxShadow:
            'linear-gradient(90deg, rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 50%), linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%), linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%)',
        }}
      >
        <div className='flex h-full justify-between items-center'>
          <button
            onClick={(e) => {
              prevBannerButton(e);
            }}
          >
            <LeftChevrom />
          </button>
          <button
            onClick={(e) => {
              nextBannerButton(e);
            }}
          >
            <RightChevrom />
          </button>
        </div>
        <div className='pb-7 pr-10 flex gap-3 absolute bottom-0 right-0'>
          {BannerImgs.map((img, i) => {
            return (
              <button
                key={i}
                onClick={(e) => {
                  bannerButton(e, i);
                }}
                className={`w-2 h-2 rounded-full transition-1s ${
                  bannerIndex === i ? 'bg-slate-200 w-8' : 'bg-slate-600'
                }`}
              />
            );
          })}
        </div>
      </div>
      <BannerReview review={BannerReviews[bannerIndex]} />
    </div>
  );
};

export default Banner;
