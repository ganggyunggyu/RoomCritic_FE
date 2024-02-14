import React, { useEffect, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LeftChevrom from '../icons/LeftChevrom';
import RightChevrom from '../icons/RightChevrom';
import { Link } from 'react-router-dom';
const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const BannerImgs = [
    'https://www.themoviedb.org/t/p/original/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg',
    'https://an2-img.amz.wtchn.net/image/v2/Zi2FmJJFiKq7ZP1OEf3JGA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1Ua3lNSGd4TURnd2NUZ3dJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UWTBORFk0T1RjNE5qZ3pOVGN5TURZM01DSjkudjg3TUgtTDBWXzdJRUdURFZ2d2JENUhldXdfa0NyLUlKdUFvbmFCc2tlOA',
    'https://www.themoviedb.org/t/p/original/lxD5ak7BOoinRNehOCA85CQ8ubr.jpg',
    // 'https://an2-img.amz.wtchn.net/image/v2/R35VkhPU8YTNjcKWwFh0Pg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1Ua3lNSGd4TURnd2NUZ3dJbDBzSW5BaU9pSXZkakV2YldzNGJYUnVMVE01TXpjaWZRLmtyck1zSFZKODdQaUxQOEFzY0I2Q3ZKREx1XzVNVmtNYUNkU1RTd25uT0k',
  ];

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

  const BannerReviews = [
    {
      title: '인사이드 아웃',
      reviews: [
        '나는 이제 너에게도 슬픔을 주겠다.',
        '사랑보다 소중한 슬픔을 주겠다.',
        "(정호승의 시 '슬픔이 기쁨에게')",
      ],
      link: '/detail/movie/150540',
      movie_color: 'violet',
    },
    {
      title: '라라랜드',
      reviews: ['달콤 쌉사름한 그 모든 감정에', '화룡점정하는 마법같은 순간.'],
      link: '/detail/movie/313369',
      movie_color: 'violet',
    },
    {
      title: '토이스토리',
      reviews: ['넌 나의 친구야,', '영원한 친구야.'],
      link: '/detail/movie/862',
      movie_color: 'green',
    },
    // {
    //   title: '황해',
    //   reviews: ['야심도 재능이다.'],
    //   link: '/detail/movie/862',
    //   movie_color: 'black',
    // },
  ];

  return (
    <div className='relative'>
      <div
        style={{
          backgroundImage: `url(${BannerImgs[bannerIndex]})`,
          // filter: 'blur(1px)',
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
              ></button>
            );
          })}
        </div>
      </div>
      <React.Fragment>
        <BannerReview
          title={BannerReviews[bannerIndex].title}
          reviews={BannerReviews[bannerIndex].reviews}
          link={BannerReviews[bannerIndex].link}
          movie_color={BannerReviews[bannerIndex].movie_color}
        />
      </React.Fragment>
    </div>
  );
};

export default Banner;

const BannerReview = ({ title, reviews, link, movie_color }) => {
  return (
    <React.Fragment>
      <div className='md:w-5/12 w-6/12 flex items-center opacity-40 blur-lg absolute top-0 bottom-0 pl-20 pr-10 bg-black pointer-events-none transition-all' />
      <div className='md:w-7/12 w-10/12 flex flex-col justify-center gap-1 md:gap-3 transition-all max-w-fit absolute top-0 bottom-0 left-12 md:left-40'>
        <p className={`md:text-5xl text-xl text-${movie_color}-300 transition-1s`}>{title}</p>
        {reviews.map((line, i) => {
          return (
            <p key={i} className='text-xs md:text-lg max-w-fit text-white'>
              {line}
            </p>
          );
        })}
        <Link
          className={`text-${movie_color}-300 hover:text-${movie_color}-700 transition-all py-1 text-3xl`}
          // className={`text-violet-400 hover:text-violet-700 transition-all py-1`}
          to={link}
        >
          <i>👉 {title} 리뷰 쓰러가기</i>
        </Link>
      </div>
    </React.Fragment>
  );
};
