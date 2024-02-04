import React, { useEffect, useState } from 'react';
import axiosConfig from '../api/axiosConfig';
import { userInfoState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';

import CardReview from '../components/CardReview';
import { useNavigate, useParams } from 'react-router-dom';
import { reviewsState } from '../recoilAtoms';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
export default function MyPage() {
  const { userId } = useParams();
  const navigator = useNavigate();
  const userInfo = useRecoilValue(userInfoState);
  const [reviews, setReviews] = useRecoilState(reviewsState);
  const fetchReview = async () => {
    const result = await axiosConfig.get(`post/myreview/${userId}`, {
      withCredentials: true,
    });
    setReviews(result.data.reviews);
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    // <div className="flex flex-col items-center justify-center p-10">
    //   <p className="pb-10">나 {userInfo.displayName}이 쓴 리뷰들</p>
    //   <div className="flex w-11/12 overflow-x-scroll gap-3 p-3">
    //     {reviews.map((review, i) => {
    //       return (
    //         <CardReview
    //           key={i}
    //           content={review}
    //           onClick={() => {
    //             navigator(`/detail/review/${review.userId}/${review._id}`);
    //           }}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
    <React.Fragment>
      <ResponsiveProvider direction={'col'}></ResponsiveProvider>
      <CardWrapProvider title={`${userInfo.displayName}님이 쓰신 리뷰`} cardList={reviews} />
    </React.Fragment>
  );
}
