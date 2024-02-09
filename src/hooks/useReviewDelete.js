import { useMutation } from '@tanstack/react-query';
import axiosConfig from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const reviewDelete = (reviewId, userId) => {
  const data = {
    reviewId: reviewId,
    userId: userId,
  };
  try {
    const result = axiosConfig.delete('review/delete', {
      data: data,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const useReviewDelete = (reviewId, userId) => {
  const navigator = useNavigate();
  const reviewDeleteMutate = useMutation({
    mutationFn: () => reviewDelete(reviewId, userId),
    onSuccess: () => {
      console.log('요청 성공');
      navigator(`/mypage/${userId}`);
    },
    onError: () => {
      console.error('에러 발생');
    },
    onSettled: () => {
      console.log('결과에 관계 없이 무언가 실행됨');
    },
  });

  return { reviewDeleteMutate };
};

export default useReviewDelete;
