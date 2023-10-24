/** @format */

import React, { useEffect, useState } from 'react';
import axiosConfig from '../api/axiosConfig';
import { userInfoState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';

import CardReview from '../components/CardReview';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const navigator = useNavigate();
  const userInfo = useRecoilValue(userInfoState);
  const [myReviews, setMyReviews] = useState([]);
  const fetchReview = async () => {
    const result = await axiosConfig.post(
      `post/myreview`,
      {
        userId: userInfo.id,
      },
      { withCredentials: true }
    );
    setMyReviews(result.data.reviews);
  };

  useEffect(() => {
    fetchReview();
    console.log(userInfo);
    console.log(myReviews);
  }, []);

  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center p-10'>
        <div className='flex flex-col'>
          <p>이름 : {userInfo.displayName}</p>
        </div>
        <p>
          {userInfo.displayName}평론가님 께서 그동안 쓰신 리부의 갯수는{' '}
          {userInfo.posts}
        </p>
        <div className='flex w-11/12 overflow-x-scroll gap-3 p-3'>
          {myReviews.map((review, i) => {
            return (
              <div
                onClick={(e) => {
                  navigator(`/detail/review/${review.userId}/${review._id}`);
                }}
                key={i}
              >
                <CardReview key={i} content={review} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
