/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewsState } from '../recoilAtoms';

export default function DetailReview() {
  const reviews = useRecoilValue(reviewsState);
  const { userId, reviewId } = useParams();
  const [selectReview, setSelectReview] = useState({});
  const isReviewSelet = () => {
    for (const review of reviews) {
      if (review._id === reviewId) {
        setSelectReview(review);
        break;
      }
    }
  };

  useEffect(() => {
    isReviewSelet();
    console.log(selectReview);
  }, []);
  return (
    <div>
      <h1
        onClick={() => {
          console.log(selectReview);
        }}
      >
        {selectReview.contentName}
      </h1>
      <p>{selectReview.userName}평론가의 리뷰</p>
      <p>{selectReview.review}</p>
      <p>{selectReview.addReview}</p>
      <p>{selectReview.grade}점드립니다</p>
    </div>
  );
}
