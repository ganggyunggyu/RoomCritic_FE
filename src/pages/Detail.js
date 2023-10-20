/** @format */

import React, { useEffect, useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import axiosConfig from '../api/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';
import PencilIcon from '../icons/PencilIcon';
import CardReview from '../components/CardReview';
import { isLoggedInState, reviewsState } from '../recoilAtoms';
import { useSetRecoilState, useRecoilValue } from 'recoil';

export default function Detail({}) {
  const navigator = useNavigate();
  const { mediaType, contentId } = useParams();

  const [content, setContent] = useState({});
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setReviews = useSetRecoilState(reviewsState);
  const reviews = useRecoilValue(reviewsState);

  const fetchContent = async () => {
    try {
      const result = await tmdbAxiosConfig.get(`/${mediaType}/${contentId}`);
      setContent(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchReview = async () => {
    const result = await axiosConfig.post('post/review', {
      contentType: mediaType,
      contentId: contentId,
    });
    setReviews(result.data.reviews);
  };
  useEffect(() => {
    fetchContent();
  }, []);
  useEffect(() => {
    fetchReview();
    console.log('reviews : ', reviews);
  }, []);
  return (
    <div className='w-full flex flex-col items-center justify-center gap-5'>
      <h1 className='text-2xl pt-5'>{content.title || content.name}</h1>
      <div className='h-80'>
        <img
          className='w-full h-full'
          src={`https://www.themoviedb.org/t/p/original/${content.poster_path}`}
          alt=''
        />
      </div>
      <div className='flex items-center justify-center hover:text-red-400 cursor-pointer gap-2'>
        {isLoggedIn ? (
          <button
            onClick={(e) => {
              navigator(`/create/${mediaType}/${contentId}`);
            }}
          >
            {content.title || content.name} 한줄평 쓰기 <PencilIcon />
          </button>
        ) : (
          <button
            onClick={() => {
              navigator('/login');
            }}
          >
            로그인 하고 한줄평 쓰자!
          </button>
        )}
      </div>
      <div className='flex overflow-x-scroll gap-3 p-3'>
        {reviews.map((review, i) => {
          return (
            <div
              key={i}
              onClick={(e) => {
                navigator(`/detail/review/${review.userId}/${review._id}`);
              }}
              className='flex gap-1 hover:text-red-400 cursor-pointer relative'
            >
              <CardReview content={review} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
