import React, { useEffect } from 'react';

import { userInfoState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';

import { useNavigate, useParams } from 'react-router-dom';

import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import useReviewFetch from '../hooks/review/useReviewFetch';

export default function MyPage() {
  const { userId } = useParams();
  const navigator = useNavigate();
  const userInfo = useRecoilValue(userInfoState);
  const { fetchMyReviews, myReviews } = useReviewFetch();

  useEffect(() => {
    fetchMyReviews(userId);
  }, []);

  const redirectReview = (review) => {
    navigator(`/detail/review/${review.userId}/${review._id}`);
  };
  return (
    <React.Fragment>
      <ResponsiveProvider direction={'col'}></ResponsiveProvider>
      <CardWrapProvider
        title={`${userInfo.displayName}님이 쓰신 리뷰`}
        cardList={myReviews}
        onClick={redirectReview}
      />
      <div className='w-screen h-screen'></div>
    </React.Fragment>
  );
}
