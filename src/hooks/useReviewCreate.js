import { useMutation } from '@tanstack/react-query';
import axiosConfig from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const reviewCreate = async (reviewData) => {
  try {
    const result = await axiosConfig.post(
      'review/create',
      { reviewData },
      { withCredentials: true },
    );

    return result;
  } catch (err) {
    console.log(err);
  }
};

const useReviewCreate = (reviewData) => {
  const navigator = useNavigate();
  const createMutate = useMutation({
    mutationFn: () => reviewCreate(reviewData),
    onSuccess: () => {
      console.log('글쓰기 성공');
      navigator(`/detail/${reviewData.contentType}/${reviewData.contentId}`);
    },
    onError: () => {
      console.error('에러 발생');
    },
    onSettled: () => {
      console.log('결과에 관계 없이 무언가 실행됨');
    },
  });

  return { createMutate };
};

export default useReviewCreate;
