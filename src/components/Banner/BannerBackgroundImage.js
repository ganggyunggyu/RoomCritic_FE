import React from 'react';
import { BannerImgs } from '../../BannerInfo';
import LeftChevrom from '../../icons/LeftChevrom';
import RightChevrom from '../../icons/RightChevrom';
import { useEffect } from 'react';

const BannerBackgroundImage = ({ bannerIndex, setBannerIndex }) => {
  React.useEffect(() => {
    const carouselInterval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % BannerImgs.length);
    }, 3000);
    return () => clearInterval(carouselInterval);
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
    <div
      style={{
        backgroundImage: `url(${BannerImgs[bannerIndex]})`,
        backgroundSize: '100% 100%',
        position: 'relative',
        width: '100vw',
        height: '40vw',
        transition: 'background-image 500ms ease-in-out',
      }}
    >
      <div className='flex h-full justify-between items-center'>
        <button
          onClick={(e) => {
            prevBannerButton(e);
          }}
          title='left-move-btn'
        >
          <LeftChevrom />
        </button>
        <button
          onClick={(e) => {
            nextBannerButton(e);
          }}
          title='right-move-btn'
        >
          <RightChevrom />
        </button>
      </div>
      <div className='pb-7 pr-10 flex gap-3 absolute bottom-0 right-0'>
        {BannerImgs.map((_, i) => {
          return (
            <button
              key={i}
              onClick={(e) => {
                bannerButton(e, i);
              }}
              title={`banner-select-${i + 1}-btn`}
              className={`w-2 h-2 rounded-full transition-1s ${
                bannerIndex === i ? 'bg-slate-200 w-8' : 'bg-slate-600'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BannerBackgroundImage;
