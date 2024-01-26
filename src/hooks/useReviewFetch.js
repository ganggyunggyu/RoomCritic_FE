import axiosConfig from '../api/axiosConfig';
import { useState } from 'react';

const useReviewFetch = () => {
  const [reviews, setReviews] = useState([]);
  const [tvContents, setTvContents] = useState([]);
  const [movieContents, setMovieContents] = useState([]);

  const fetchReview = async () => {
    const result = await axiosConfig.get('post/review');
    setReviews(result.data.reviews);
  };
  const fetchTvContentReviews = async () => {
    try {
      const result = await axiosConfig.get('post/review/tv');
      setTvContents(result.data.tvContentReviews);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMovieContentReviews = async () => {
    try {
      const result = await axiosConfig.get('post/review/movie');
      setMovieContents(result.data.movieContentReviews);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    fetchReview,
    reviews,
    fetchMovieContentReviews,
    movieContents,
    fetchTvContentReviews,
    tvContents,
  };
};

export default useReviewFetch;
