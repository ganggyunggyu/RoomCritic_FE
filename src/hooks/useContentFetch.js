import { useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import { useRecoilState } from 'recoil';
import { searchContentsState } from '../recoilAtoms';

const useContentFetch = () => {
  const [content, setContent] = useState({});
  const [searchContents, setSerchContents] = useRecoilState(searchContentsState);

  const fetchSearchContents = async (searchValue) => {
    const result = await tmdbAxiosConfig.get(
      `/search/multi?include_adult=false&query=${searchValue}`,
    );
    console.table(result.data.results);
    setSerchContents(result.data.results);
  };

  const fetchContent = async (mediaType, contentId) => {
    try {
      if (mediaType !== undefined && contentId !== undefined) {
        const result = await tmdbAxiosConfig.get(`${mediaType}/${contentId}`);
        console.log(result);
        const copyContent = result.data;
        setContent(copyContent);
      } else {
        console.log('mediaType or contentId is undefined');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    fetchContent,
    content,
    fetchSearchContents,
    searchContents,
  };
};

export default useContentFetch;
