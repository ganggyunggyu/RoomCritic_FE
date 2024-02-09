import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { userInfoState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';
import StarIcon from '../icons/StarIcon';
import Button from '../components/AtomComponent/Button';
import DetailBackground from '../components/DetailBackground';

import useReviewCreate from '../hooks/useReviewCreate';
import useContentFetch from '../hooks/useContentFetch';
export default function Create() {
  const userInfo = useRecoilValue(userInfoState);
  const { mediaType, contentId } = useParams();
  const { detailContentQuery } = useContentFetch(mediaType, contentId);
  const [review, setReview] = useState('');
  const [addReview, setAddReview] = useState('');
  const [grade, setGrade] = useState(3);

  const reviewData = {
    userId: userInfo._id,
    userName: userInfo.displayName,
    lineReview: review,
    longReview: addReview,
    grade: grade,
    contentPosterImg: `https://www.themoviedb.org/t/p/original${detailContentQuery.data.data.poster_path}`,
    contentBackdropImg: `https://www.themoviedb.org/t/p/original${detailContentQuery.data.data.backdrop_path}`,
    contentName: detailContentQuery.data.data.title || detailContentQuery.data.data.name,
    contentId: contentId,
    contentType: mediaType,
  };
  const { createMutate } = useReviewCreate(reviewData);

  const stars = [1, 2, 3, 4, 5];
  const isGrade = (star) => {
    setGrade(star);
  };

  return (
    <React.Fragment>
      <DetailBackground path={detailContentQuery.data.data.backdrop_path} />
      <div className='w-full flex flex-col justify-center items-center text-center z-10 pb-20'>
        <div className='w-10/12 sm:w-6/12 flex flex-col justify-center items-center'>
          <h1 className='text-4xl pt-10 pb-5'>
            {detailContentQuery.data.data.title || detailContentQuery.data.data.name}
          </h1>
          <p className='text-3xl pb-5'>감상평을 쓰자</p>
          <div className='flex items-center justify-center gap-1'>
            {stars.map((star, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    isGrade(star, i);
                  }}
                >
                  <StarIcon color={'yellow'} />
                </div>
              );
            })}
          </div>
          <div className='pt-5'>
            <span>
              {userInfo.displayName}님의 평점 <span className='text-red-400'>{grade}점!</span>
            </span>
          </div>
          <div className='py-5 w-full'>
            <input
              className='w-full text-center text-zinc-900 bg-slate-100 p-2 rounded-md shadow-md'
              placeholder='한줄평 쓰기'
              type='text'
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
              // onKeyDown={(e) => {
              //   if (e.key === 'Enter') {
              //     e.preventDefault();
              //     createMutate.mutate();
              //   }
              // }}
            />
          </div>
          <div className='w-full py-5'>
            <textarea
              className='w-full text-center h-80 text-zinc-900 bg-slate-100 p-2 rounded-md shadow-md'
              placeholder='긴평 쓰기'
              value={addReview}
              onChange={(e) => {
                setAddReview(e.target.value);
              }}
              // onKeyDown={(e) => {
              //   if (e.key === 'Enter') {
              //     e.preventDefault();
              //     createMutate.mutate();
              //   }
              // }}
            />
          </div>
          <div className='w-full flex'>
            <div className='grow' />
            <Button label={'발행'} bg={'main'} onClick={createMutate.mutate} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
