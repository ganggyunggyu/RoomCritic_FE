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
import useReviewFetch from '../hooks/useReviewFetch';

export default function ReviewDetail() {
  const { userId, reviewId } = useParams();
  const navigator = useNavigate();

  const { fetchSelectedReview, selectedReview } = useReviewFetch();
  const user = useRecoilValue(userInfoState);
  //클라이언트에 리뷰 데이터가 있다면 그것을 사용하고 그렇지 않을 시 서버요청을 하고싶음
  useEffect(() => {
    fetchSelectedReview(userId, reviewId);
  }, []);

  const Stars = Array.from({ length: +selectedReview.grade }, () => 0);

  return (
    <React.Fragment>
      <DetailBackground path={selectedReview.contentBackdropImg} />
      <ResponsiveProvider direction={'col'} className={'gap-5 z-10'}>
        <p>
          {selectedReview.userName}님의 {selectedReview.contentName} 리뷰
        </p>
        <p>{formatDateWithTime(selectedReview.createTime)} 작성</p>
        <p className='border border-b-4 p-2 text-center'>{selectedReview.lineReview}</p>
        {selectedReview.longReview !== '' && <p>{selectedReview.longReview}</p>}

        <p className='flex flex-row gap-1'>
          {Stars.map((_, i) => {
            return <StarIcon key={i} color={'yellow'} />;
          })}
        </p>
      </ResponsiveProvider>
      <ResponsiveProvider direction={'col'} className={'gap-5 z-10 lg:flex-row transition-all'}>
        <Button label={'좋아요 🤩'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
        <Button label={'별로에요 🧐'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
        {user._id === selectedReview.userId && (
          <>
            <Button label={'삭제'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
            <Button label={'수정'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
          </>
        )}
      </ResponsiveProvider>
      <ResponsiveProvider>
        <h1
          className='text-xl cursor-pointer hover:text-red-400 z-10'
          onClick={() => {
            console.log(selectedReview);
            navigator(`/detail/${selectedReview.contentType}/${selectedReview.contentId}`);
          }}
        >
          {selectedReview.contentName} 다른 리뷰도 보러가기 ! <span className='text-3xl'>👈</span>
        </h1>
      </ResponsiveProvider>
      <Contents />
      <Footer />
    </React.Fragment>
  );
}
