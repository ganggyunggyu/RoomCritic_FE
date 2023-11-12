import { useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';

const useContentFetch = (mediaType, contentId) => {
  const [content, setContent] = useState({});
  const fetchContent = async () => {
    try {
      if (mediaType !== undefined && contentId !== undefined) {
        const result = await tmdbAxiosConfig.get(`${mediaType}/${contentId}`);
        const copyContent = result.data;
        setContent(copyContent);
      } else {
        console.error('mediaType or contentId is undefined');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { content, fetchContent };
};

export default useContentFetch;
