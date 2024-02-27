import axiosConfig from '../../api/axiosConfig';

import { useQuery } from '@tanstack/react-query';

const fetchDetailContent = async (contentType, contentId) => {
  try {
    const result = await axiosConfig.get(`content/${contentType}/${contentId}`);
    return result;
  } catch (err) {
    console.log(err);
  }
};
const useContentFetch = (contentType, contentId) => {
  const detailContentQuery = useQuery({
    queryKey: ['detailContent', contentType, contentId],
    queryFn: () => fetchDetailContent(contentType, contentId),
  });

  return {
    detailContentQuery,
  };
};

export default useContentFetch;
