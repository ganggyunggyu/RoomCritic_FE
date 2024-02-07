import { useQuery } from '@tanstack/react-query';
import axiosConfig from '../api/axiosConfig';
import { useState } from 'react';

const useReviewFetch = () => {
  const [latestReviews, setLatestReviews] = useState([]);
  const [tvContentReviews, setTvContentReviews] = useState([]);
  const [movieContentReviews, setMovieContentReviews] = useState([]);
  const [selectedContentReviews, setSelectedContentReviews] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState([]);

  const fetchLatestReviews = async () => {
    const result = await axiosConfig.get('review/latest');
    setLatestReviews(result.data.reviews);
    return result;
  };
  const query = useQuery({
    queryKey: ['latestReviews'],
    queryFn: fetchLatestReviews,
  });
  console.log('React-Query!', query.isPending, query.data);

  const fetchTvContentReviews = async () => {
    try {
      const result = await axiosConfig.get('review/tv');
      setTvContentReviews(result.data.tvContentReviews);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMovieContentReviews = async () => {
    try {
      const result = await axiosConfig.get('review/movie');
      setMovieContentReviews(result.data.movieContentReviews);
    } catch (error) {
      console.log(error);
    }
  };
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
    latestReviews,
    fetchMovieContentReviews,
    movieContentReviews,
    fetchTvContentReviews,
    tvContentReviews,
    fetchSelectedContentReviews,
    selectedContentReviews,
    fetchMyReviews,
    myReviews,
    fetchSelectedReview,
    selectedReview,
    query,
  };
};

export default useReviewFetch;
