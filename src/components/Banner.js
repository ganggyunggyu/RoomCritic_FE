// import React from 'react';

// export default function Banner() {
//   return (
//     <div className='flex justify-around bg-pink-400 text-slate-50 w-screen'>
//       <div className='md:w-7/12 w-10/12 md:h-60 py-3 flex flex-col justify-center gap-3 transition-all'>
//         <p className='md:text-3xl text-md'>Room Critic = 방구석 평론가</p>
//         <p className='text-sm md:text-lg'>Room = 방</p>
//         <p className='text-sm md:text-lg'>Critic = 평론가</p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LeftChevrom from '../icons/LeftChevrom';
import RightChevrom from '../icons/RightChevrom';
const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const BannerImgs = [
    // 'https://image.laftel.net/carousel/22992b76-4eea-4942-b642-efc1bfd24aad.jpg?Expires=1694077669&Signature=foMBwjh28X~4jxQdlw4SGYpDWajfQPzwVyCEnEesWRlXODwCtJr4DjgL-AKh4XbbOKmDk835WBJVNc~~AbGbiOCCzwDSKXVtBW6VfbZ8AOEohbIxF10AM5L9yoW7z186P5kTYvTksREOKH2m2XG2AVmI834Hine8zBksiZtLayda~Pv125J6BhxFe-XvNAcYSfi4mXn8JUdGMEAGk8bh708RJQG5S7lZeH0-RfVyRKCkiWtKQ4V6RjkmqFA9dLAHpy9XB3VdIg2m5OdE-vhfikigcMBV711d58DtYQU9fM9XZpptvvdo~2Y1gobXXVWHoy-kEjTSbgstjAJwBJTdaA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A',
    // 'https://image.laftel.net/carousel/09bac204-da72-4df6-894d-a7896badc316.jpg?Expires=1694148134&Signature=Z3S6YFQvY4xpOnrHjOi4FcVCRqhMv27nXzeqAdqbS5InZUXFTgDG1l~8Tz28b~jmQqxNkTEVzwfY-6U9WvulNl0shKazer5ayffo0chRair742Q~7Xm8OLVG-RkKELZmXX-S6rzeh1yzoTy1Cw3hK-jtdR-P85LN9BEuk4cFltO5JbWghhxPui~3EVYVQHvysob5guMfyXIisMGEq25tqOcQTLYq553OMMy0QruuRpOsa5uXm15nEy~XZJ-NupGRrYE-B173cI4xzWtdCEF4WJUGDBsHi7GuAGSpuoV4sisuX27NU3fO5aI~H-SVU1XEJe9uWV4PKG09ah9EfY2INg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A',
    // 'https://image.laftel.net/carousel/dcca75c5-8cf2-4cd7-898a-10bc136ecc0f.jpg?Expires=1694148134&Signature=WEV~nWDTzQs~FDCV1MuhMvXKuI-CPyAhde6rWaWmsJaE1--txqz5LvuA7kpHu7K3Ys43uCGZ~haG8katJXee3uwGIKpBhiefsgVOEN4tOwwmDpwL0AH9jugIXXHo0S9viGqTAgJh57~nkD0cUOmr6MRYySl7nBAtww4P3JsHSK4Vy78YSyk7POvWW2P~4g~CUHvOXeRYIbp2HIYXI9KcyrA8dU447FnHdrPTJcXCJU5yVA0sOFNS1bIOvlE2k8OiVmYs75OBjRhPvSnmwVl2bHKdq4TKn1X3FcLz5EkAc7KzPA1zqxuIiNaQrbSEtoI-c27YZM5GlZz4-qCUd1IdOg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A',
    // 'https://www.themoviedb.org/t/p/original/xBSwwkAYl9h8QVG2OxNpSaSgJwr.jpg',
    // 'https://www.themoviedb.org/t/p/original/etBZfuOie3uODTKTV5xnbAKB4Fr.jpg',
    // 'https://e1.pxfuel.com/desktop-wallpaper/457/124/desktop-wallpaper-la-la-land-movie-poster-la-la-land-movie.jpg',
    // 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4696ee110518553.609aa6c4c39fc.jpg',
    // 'https://www.themoviedb.org/t/p/original/xxoiSvieKC0w2MRkKcE2lajHcJ.jpg',
    // 'https://i.pinimg.com/originals/fe/38/3c/fe383c682b6bcb3eaac106196114c9fe.jpg',
    'https://www.themoviedb.org/t/p/original/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg',
    'https://an2-img.amz.wtchn.net/image/v2/Zi2FmJJFiKq7ZP1OEf3JGA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1Ua3lNSGd4TURnd2NUZ3dJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UWTBORFk0T1RjNE5qZ3pOVGN5TURZM01DSjkudjg3TUgtTDBWXzdJRUdURFZ2d2JENUhldXdfa0NyLUlKdUFvbmFCc2tlOA',
    'https://an2-img.amz.wtchn.net/image/v2/ES4CKkWzv8ByNhG3Tx3pFQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1Ua3lNSGd4TURnd2NUZ3dJbDBzSW5BaU9pSXZkakV2YlRneFlqTm9MVEV4TmpRaWZRLkN0OWtuM3pEeXB1c29LdTJaVmlITEc0QmtKTXdBeUExcHJwcTF0ZlhzVzA',
  ];

  useEffect(() => {
    const carousel = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % BannerImgs.length);
    }, 5000);
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
    },
    {
      title: '라라랜드',
      reviews: ['달콤 쌉사름한 그 모든 감정에', '화룡점정하는 마법같은 순간.'],
    },
    {
      title: '토이스토리',
      reviews: ['넌 나의 친구야,', '영원한 친구야.'],
    },
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
        <div className='text-white flex h-full justify-between items-center text-'>
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
        {/* <div className='md:w-5/12 w-6/12 flex items-center opacity-40 blur-lg absolute top-0 bottom-0 pl-20 pr-10 bg-black pointer-events-none' />
        <div className='md:w-7/12 w-10/12 flex flex-col justify-center gap-3 transition-all min-w-fit absolute top-0 bottom-0 left-20'>
          <p className='md:text-5xl text-2xl text-violet-300 transition-1s'>인사이드 아웃</p>
          <p className='text-sm md:text-lg'>나는 이제 너에게도 슬픔을 주겠다.</p>
          <p className='text-sm md:text-lg'>사랑보다 소중한 슬픔을 주겠다.</p>
          <p className='text-sm md:text-lg'>(정호승의 시 '슬픔이 기쁨에게')</p>
        </div> */}
        <BannerReview
          title={BannerReviews[bannerIndex].title}
          reviews={BannerReviews[bannerIndex].reviews}
        />
      </React.Fragment>
    </div>
  );
};

export default Banner;

const BannerReview = ({ title, reviews }) => {
  return (
    <React.Fragment>
      <div className='md:w-5/12 w-6/12 flex items-center opacity-40 blur-lg absolute top-0 bottom-0 pl-20 pr-10 bg-black pointer-events-none transition-1s' />
      <div className='md:w-7/12 w-10/12 flex flex-col justify-center gap-3 transition-all min-w-fit absolute top-0 bottom-0 left-20'>
        <p className='md:text-5xl text-2xl text-violet-300 transition-1s'>{title}</p>
        {reviews.map((line, i) => {
          return <p className='text-sm md:text-lg'>{line}</p>;
        })}
      </div>
    </React.Fragment>
  );
};
