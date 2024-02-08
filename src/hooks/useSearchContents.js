import { useSetRecoilState } from 'recoil';

import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import { useQuery } from '@tanstack/react-query';
import { searchContentsState } from '../recoilAtoms';

const useSearchContents = (searchValue) => {
  const setSerchContents = useSetRecoilState(searchContentsState);

  const fetchSearchContents = async () => {
    const result = await tmdbAxiosConfig.get(
      `/search/multi?include_adult=false&query=${searchValue}`,
    );
    setSerchContents(result.data.results);
    return result;
  };
  const searchContentsQuery = useQuery({
    queryKey: ['searchContents', searchValue],
    queryFn: fetchSearchContents,
  });

  return { searchContentsQuery };
};

export default useSearchContents;
