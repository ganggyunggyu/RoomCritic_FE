import React from 'react';

import { userInfoState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';

import { useNavigate, useParams } from 'react-router-dom';

import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import useMyReviewFetch from '../hooks/review/useMyReviewFetch';
import Loading from '../components/Loading';

export default function MyPage() {
  const { userId } = useParams();
  const navigator = useNavigate();
  const userInfo = useRecoilValue(userInfoState);
  const { myReviewQuery } = useMyReviewFetch(userId);

  const redirectReview = (review) => {
    navigator(`/detail/review/${review.userId}/${review._id}`);
  };
  return (
    <React.Fragment>
      {myReviewQuery.isLoading ? (
        <Loading />
      ) : (
        <CardWrapProvider
          title={`${userInfo.displayName}님이 쓰신 리뷰`}
          cardList={myReviewQuery.data.data.reviews}
          onClick={redirectReview}
        />
      )}
    </React.Fragment>
  );
}
