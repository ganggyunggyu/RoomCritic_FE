/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewsState } from '../recoilAtoms';
import { seletReview } from '../recoilAtoms';
import { useRecoilState } from 'recoil';
import axiosConfig from '../api/axiosConfig';
import { formatDateWithTime } from '../util/Regs';

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
    console.log(formatDateWithTime(selectReview.createTime));
  }, []);

  return (
    <div className="md:w-full md:flex-row gap-10 pt-10 flex items-center justify-center">
      <div className="w-10/12 flex flex-col md:flex-row justify-center gap-10">
        <img
          className="w-full md:w-6/12 "
          src={
            selectReview.contentBackdropImg ||
            selectReview.contentPosterImg ||
            selectReview.contentImg
          }
          alt=""
        />
        <div className="w-full md:w-6/12 flex flex-col gap-5 justify-start items-center p-3">
          <h1
            onClick={() => {
              console.log(selectReview);
            }}
          >
            {selectReview.contentName}
          </h1>
          <p>{selectReview.userName} 평론가의 리뷰</p>
          <p>{formatDateWithTime(selectReview.createTime)}</p>
          <p>{selectReview.review}</p>
          <p>{selectReview.addReview}</p>
          <p>평점은 {selectReview.grade}점 드립니다</p>
        </div>
      </div>
    </div>
  );
}
