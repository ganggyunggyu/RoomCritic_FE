import { useQuery } from '@tanstack/react-query';
import axiosConfig from '../../api/axiosConfig';
const fetchSelectReview = async (userId, reviewId) => {
  const result = await axiosConfig.get(`review/detail/${userId}/${reviewId}`);
  return result;
};

const useReviewSelect = (userId, reviewId) => {
  const selectReviewQuery = useQuery({
    queryKey: ['selectReview', userId, reviewId],
    queryFn: () => fetchSelectReview(userId, reviewId),
  });
  return { selectReviewQuery };
};

export default useReviewSelect;
