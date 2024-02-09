import { useQuery } from '@tanstack/react-query';
import axiosConfig from '../../api/axiosConfig';

const fetchSelectedContentReviews = async (contentId, contentType) => {
  try {
    const result = await axiosConfig.get(`review/${contentId}/${contentType}`);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const useSelectedContentReviews = (contentId, contentType) => {
  const selectedContentReviewsQuery = useQuery({
    queryKey: ['selectContentReviews', contentId, contentType],
    queryFn: () => fetchSelectedContentReviews(contentId, contentType),
  });

  return { selectedContentReviewsQuery };
};

export default useSelectedContentReviews;
