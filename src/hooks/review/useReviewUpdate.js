import { useMutation } from '@tanstack/react-query';
import axiosConfig from '../../api/axiosConfig';

const reviewUpdate = async (updateData) => {
  console.log(updateData);
  const result = await axiosConfig.patch('review/update', { updateData });

  return result;
};

const useReviewUpdate = (updateData) => {
  const updateMutate = useMutation({
    mutationFn: () => reviewUpdate(updateData),
    onSuccess: () => {
      console.log('수정 성공');
      navigator(`/detail/${updateData.userId}/${updateData.reviewId}`);
    },
    onError: () => {
      console.error('에러 발생');
    },
    onSettled: () => {
      console.log('결과에 관계 없이 무언가 실행됨');
    },
  });

  return { updateMutate };
};

export default useReviewUpdate;
