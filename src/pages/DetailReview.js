/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewsState } from '../recoilAtoms';
import { seletReview } from '../recoilAtoms';
import { useRecoilState } from 'recoil';
import axiosConfig from '../api/axiosConfig';

export default function DetailReview() {
  const reviews = useRecoilValue(reviewsState);
  const { userId, reviewId } = useParams();

  const [selectReview, setSelectReview] = useRecoilState(seletReview);

  //클라이언트에 리뷰 데이터가 있다면 그것을 사용하고 그렇지 않을 시 서버요청을 하고싶음
  const isReviewSelet = async () => {
    try {
      if (reviews.length !== 0) {
        for (const review of reviews) {
          if (review._id === reviewId) {
            setSelectReview(review);
            break;
          }
        }
      }
      const result = await axiosConfig.get(`post/review/${userId}/${reviewId}`);
      console.log(result);

      setSelectReview(result.data.review);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isReviewSelet();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-10 pt-10'>
      <img
        className='w-8/12'
        src={
          selectReview.contentBackdropImg ||
          selectReview.contentPosterImg ||
          selectReview.contentImg
        }
        alt=''
      />
      <h1
        onClick={() => {
          console.log(selectReview);
        }}
      >
        영화 제목 : {selectReview.contentName}
      </h1>
      <p>{selectReview.userName} 평론가의 리뷰</p>
      <p>글 쓴 시간 : {selectReview.createTime}</p>
      <p>한줄평 : {selectReview.review}</p>
      <p>그 외 .. : {selectReview.addReview}</p>
      <p>{selectReview.grade}점드립니다</p>
    </div>
  );
}
