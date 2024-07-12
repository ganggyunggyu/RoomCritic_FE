import { useMutation } from '@tanstack/react-query';
import axiosConfig from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useSelectedContentReviews from '../content/useSelectedContentReviewsQuery';

const reviewCreate = async (createData) => {
  try {
    const result = await axiosConfig.post(
      'review/create',
      { createData },
      { withCredentials: true },
    );

    return result;
  } catch (err) {
    console.log(err);
  }
};

const useReviewCreate = (createData, setReview) => {
  const { selectedContentReviewsQuery } = useSelectedContentReviews(
    createData.contentType,
    createData.contentId,
  );
  const [isWritingCompleted, setIsWritingCompleted] = useState(false);

  const createMutate = useMutation({
    mutationFn: () => reviewCreate(createData),
    onSuccess: () => {
      console.log('글쓰기 성공');

      setIsWritingCompleted(true);
      selectedContentReviewsQuery.refetch();
      setReview('');
    },
    onError: () => {
      console.error('에러 발생');
    },
    onSettled: () => {
      console.log('결과에 관계 없이 무언가 실행됨');
    },
  });

  return { createMutate, isWritingCompleted };
};

export default useReviewCreate;
