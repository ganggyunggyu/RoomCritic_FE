import { useQuery } from '@tanstack/react-query';
import axiosConfig from '../../api/axiosConfig';

const fetchMyReviews = async (userId) => {
  const result = await axiosConfig.get(`review/${userId}`);
  return result;
};

const useMyReviewFetch = (userId) => {
  const myReviewQuery = useQuery({
    queryKey: ['myReview', userId],
    queryFn: () => fetchMyReviews(userId),
  });
  return { myReviewQuery };
};

export default useMyReviewFetch;
