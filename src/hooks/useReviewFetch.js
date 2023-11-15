import axiosConfig from '../api/axiosConfig';
import { useState } from 'react';

const useReviewFetch = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReview = async () => {
    const result = await axiosConfig.get('post/review');
    setReviews(result.data.reviews);
  };

  return { fetchReview, reviews };
};

export default useReviewFetch;
