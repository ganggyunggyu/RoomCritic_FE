import { useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import axiosConfig from '../api/axiosConfig';

const useContentFetch = (mediaType, contentId) => {
  const [content, setContent] = useState({});
  const [reviews, setReviews] = useState([]);

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

  const fetchReview = async () => {
    try {
      const result = await axiosConfig.get('post/review', {
        contentType: mediaType,
        contentId: contentId,
      });
      setReviews(result.data.reviews);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    content,
    fetchContent,
    reviews,
    fetchReview,
  };
};

export default useContentFetch;
