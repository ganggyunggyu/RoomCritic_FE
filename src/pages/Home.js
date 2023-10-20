/** @format */

import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { searchContentsState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../api/axiosConfig';

export default function Home() {
  const navigator = useNavigate();
  const searchContentsValue = useRecoilValue(searchContentsState);
  const [reviews, setReviews] = useState([]);

  const fetchReview = async () => {
    const result = await axiosConfig.get('post/review');
    setReviews(result.data.reviews);
  };

  useEffect(() => {
    fetchReview();
  }, []);
  return (
    <div className='flex flex-col items-center justify-center'>
      <Banner />

      <div className='w-11/12 py-5'>
        <h1 className='pb-5'>
          최근 검색한 <span className='text-red-400'>작품</span>
        </h1>
        <div className='flex overflow-x-scroll gap-3 p-3'>
          {searchContentsValue.map((content, i) => {
            return (
              <div
                onClick={() => {
                  navigator(`/detail/${content.media_type}/${content.id}`);
                }}
                key={i}
              >
                <Card content={content} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='w-11/12 py-5'>
        <h1 className='pb-5'>
          최근 리부를 남긴 <span className='text-red-400'>작품</span>
        </h1>
        <div className='flex overflow-x-scroll gap-3 p-3'>
          {reviews.map((content, i) => {
            return (
              <div
                onClick={() => {
                  navigator(
                    `/detail/${content.contentType}/${content.contentId}`
                  );
                }}
                key={i}
              >
                <Card content={content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
