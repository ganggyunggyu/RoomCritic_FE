/** @format */

import React, { useEffect, useState } from 'react';
import axiosConfig from '../api/axiosConfig';
import { userInfoState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';
export default function MyPage() {
  const [myReviews, setMyReviews] = useState([]);
  const fetchReview = async () => {
    const result = await axiosConfig.get('post/review');
    setMyReviews(result.data.reviews);
  };
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    fetchReview();
    console.log(userInfo);
  }, []);

  return <div className=''>{userInfo.displayName}</div>;
}
