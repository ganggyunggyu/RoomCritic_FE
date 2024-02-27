import { useQuery } from '@tanstack/react-query';
import axiosConfig from '../../api/axiosConfig';

const fetchSelectedContentReviews = async (contentType, contentId) => {
  try {
    const result = await axiosConfig.get(`review/${contentType}/${contentId}`);
    return result;
  } catch (err) {
    console.log(err);
  }
};
const useSelectedContentReviews = (contentType, contentId) => {
  const selectedContentReviewsQuery = useQuery({
    queryKey: ['selectContentReviews', contentType, contentId],
    queryFn: () => fetchSelectedContentReviews(contentType, contentId),
  });
  return { selectedContentReviewsQuery };
};

export default useSelectedContentReviews;
