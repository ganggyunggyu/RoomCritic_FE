/** @format */

import React, { useEffect, useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import axiosConfig from '../api/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';
import PencilIcon from '../icons/PencilIcon';
import CardReview from '../components/CardReview';

export default function Detail({}) {
  const navigator = useNavigate();
  const { mediaType, contentId } = useParams();

  const [content, setContent] = useState({});
  const [reviews, setReviews] = useState([]);

  const fetchMovie = async () => {
    try {
      const result = await tmdbAxiosConfig.get(`/${mediaType}/${contentId}`);

      setContent(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchReview = async () => {
    const result = await axiosConfig.post(
      'post/review',
      { contentType: mediaType, contentId: contentId },
      {
        withCredentials: true,
      }
    );
    setReviews(result.data.reviews);

  };
  useEffect(() => {
    fetchMovie();
  }, []);
  useEffect(() => {
    fetchReview();

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
        <button
          onClick={(e) => {
            navigator(`/create/${mediaType}/${contentId}`);
          }}
        >
          {content.title || content.name} 한줄평 쓰기
        </button>
        <PencilIcon />
      </div>
      <div className='flex overflow-x-scroll gap-3 p-3'>
        {reviews.map((review, i) => {
          return (
            <div
              key={i}
              onClick={(e) => {
                navigator(`/detailreview/${review._id}`);
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
