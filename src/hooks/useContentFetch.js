import tmdbAxiosConfig from '../api/tmdbAxiosConfig';

import { useQuery } from '@tanstack/react-query';

const useContentFetch = (mediaType, contentId) => {
  const fetchDetailContent = async () => {
    try {
      if (mediaType !== undefined && contentId !== undefined) {
        const result = await tmdbAxiosConfig.get(`${mediaType}/${contentId}`);
        return result;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const detailContentQuery = useQuery({
    queryKey: ['detailContent'],
    queryFn: fetchDetailContent,
  });
  return {
    detailContentQuery,
  };
};

export default useContentFetch;
