import { useQuery } from '@tanstack/react-query';
import axiosConfig from '../api/axiosConfig';
import { useState } from 'react';

const useReviewFetch = () => {
  const [selectedContentReviews, setSelectedContentReviews] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState([]);

  const fetchLatestReviews = async () => {
    const result = await axiosConfig.get('review/latest');

    return result;
  };
  const latestReviewsQuery = useQuery({
    queryKey: ['latestReviews'],
    queryFn: fetchLatestReviews,
  });

  const fetchTvContentReviews = async () => {
    try {
      const result = await axiosConfig.get('review/tv');

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const tvContentReviewsQuery = useQuery({
    queryKey: ['tvReviews'],
    queryFn: fetchTvContentReviews,
  });
  const fetchMovieContentReviews = async () => {
    try {
      const result = await axiosConfig.get('review/movie');

      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const movieContentReviewsQuery = useQuery({
    queryKey: ['movieReviews'],
    queryFn: fetchMovieContentReviews,
  });
  const fetchSelectedContentReviews = async (contentId, mediaType) => {
    try {
      const result = await axiosConfig.get(`review/${contentId}/${mediaType}`);

      setSelectedContentReviews(result.data.reviews);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchMyReviews = async (userId) => {
    const result = await axiosConfig.get(`review/${userId}`);
    setMyReviews(result.data.reviews);
  };
  const fetchSelectedReview = async (userId, reviewId) => {
    const result = await axiosConfig.get(`review/detail/${userId}/${reviewId}`);
    setSelectedReview(result.data.review);
  };

  return {
    fetchLatestReviews,
    fetchMovieContentReviews,
    fetchTvContentReviews,
    fetchSelectedContentReviews,
    selectedContentReviews,
    fetchMyReviews,
    myReviews,
    fetchSelectedReview,
    selectedReview,
    latestReviewsQuery,
    movieContentReviewsQuery,
    tvContentReviewsQuery,
  };
};

export default useReviewFetch;
