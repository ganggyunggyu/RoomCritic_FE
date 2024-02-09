import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../recoilAtoms';

import { formatDateWithTime } from '../util/Regs';
import Contents from './Contents';
import Footer from '../components/Footer';
import DetailBackground from '../components/DetailBackground';
import Button from '../components/AtomComponent/Button';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import StarIcon from '../icons/StarIcon';
import useReviewDelete from '../hooks/useReviewDelete';
import useReviewSelect from '../hooks/useReviewSelect';
import Loading from '../components/Loading';

export default function ReviewDetail() {
  const { userId, reviewId } = useParams();
  const navigator = useNavigate();
  const [stars, setStars] = React.useState([]);
  const { selectReviewQuery } = useReviewSelect(userId, reviewId);
  const { reviewDeleteMutate } = useReviewDelete(reviewId, userId);
  const user = useRecoilValue(userInfoState);

  useEffect(() => {
    if (!selectReviewQuery.isLoading) {
      const stars = Array.from({ length: +selectReviewQuery.data.data.review.grade }, () => 0);
      setStars(stars);
    }
  }, [selectReviewQuery.isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      {selectReviewQuery.isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <DetailBackground path={selectReviewQuery.data.data.review.contentBackdropImg} />
          <ResponsiveProvider direction={'col'} className={'gap-5 z-10'}>
            <p>
              {selectReviewQuery.data.data.review.userName}님의
              {selectReviewQuery.data.data.review.contentName} 리뷰
            </p>
            <p>{formatDateWithTime(selectReviewQuery.data.data.review.createTime)} 작성</p>
            <p className='border border-b-4 p-2 text-center'>
              {selectReviewQuery.data.data.review.lineReview}
            </p>
            {selectReviewQuery.data.data.review.longReview !== '' && (
              <p>{selectReviewQuery.data.data.review.longReview}</p>
            )}

            <p className='flex flex-row gap-1'>
              {stars.map((_, i) => {
                return <StarIcon key={i} color={'yellow'} />;
              })}
            </p>
          </ResponsiveProvider>
          <ResponsiveProvider direction={'col'} className={'gap-5 z-10 lg:flex-row transition-all'}>
            <Button label={'좋아요 🤩'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
            <Button label={'별로에요 🧐'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
            {user._id === selectReviewQuery.data.data.review.userId && (
              <>
                <Button
                  onClick={reviewDeleteMutate.mutate}
                  label={'삭제'}
                  bg={'main'}
                  className={'lg:w-4/12 w-full text-lg'}
                />
                <Button label={'수정'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
              </>
            )}
          </ResponsiveProvider>
          <ResponsiveProvider>
            <h1
              className='text-xl cursor-pointer hover:text-red-400 z-10'
              onClick={() => {
                navigator(
                  `/detail/${selectReviewQuery.data.data.review.contentType}/${selectReviewQuery.data.data.review.contentId}`,
                );
              }}
            >
              {selectReviewQuery.data.data.review.contentName} 다른 리뷰도 보러가기 !{' '}
              <span className='text-3xl'>👈</span>
            </h1>
          </ResponsiveProvider>
        </React.Fragment>
      )}
      <Contents />
      <Footer />
    </React.Fragment>
  );
}
