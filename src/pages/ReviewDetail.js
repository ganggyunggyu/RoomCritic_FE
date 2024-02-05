import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewsState, userInfoState } from '../recoilAtoms';
import { selectReviewState } from '../recoilAtoms';
import { useRecoilState } from 'recoil';
import axiosConfig from '../api/axiosConfig';
import { formatDateWithTime } from '../util/Regs';
import Contents from './Contents';
import Footer from '../components/Footer';
import DetailBackground from '../components/DetailBackground';
import Button from '../components/AtomComponent/Button';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import StarIcon from '../icons/StarIcon';

export default function ReviewDetail() {
  const reviews = useRecoilValue(reviewsState);
  const { userId, reviewId } = useParams();
  const navigator = useNavigate();
  const [selectReview, setSelectReview] = useRecoilState(selectReviewState);
  const user = useRecoilValue(userInfoState);
  //클라이언트에 리뷰 데이터가 있다면 그것을 사용하고 그렇지 않을 시 서버요청을 하고싶음
  const isReviewSelet = async () => {
    try {
      if (reviews.length !== 0) {
        for (const review of reviews) {
          if (review._id === reviewId) {
            setSelectReview(review);
            break;
          }
        }
      }
      const result = await axiosConfig.get(`post/review/${userId}/${reviewId}`);
      setSelectReview(result.data.review);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isReviewSelet();
  }, []);

  const Stars = Array.from({ length: +selectReview.grade }, () => 0);

  return (
    <React.Fragment>
      <DetailBackground
        path={
          selectReview.contentBackdropImg ||
          selectReview.contentPosterImg ||
          selectReview.contentImg
        }
      />
      <ResponsiveProvider direction={'col'} className={'gap-5 z-10'}>
        <p>
          {selectReview.userName}님의 {selectReview.contentName} 리뷰
        </p>
        <p>{formatDateWithTime(selectReview.createTime)} 작성</p>
        <p className='border border-b-4 p-2 text-xl'>{selectReview.review}</p>
        {selectReview.addReview !== '' && <p>{selectReview.addReview}</p>}
        {/* <p>평점은 {selectReview.grade}점 드립니다</p> */}
        <p className='flex flex-row gap-1'>
          {Stars.map((_, i) => {
            return <StarIcon key={i} color={'yellow'} />;
          })}
        </p>
      </ResponsiveProvider>
      <ResponsiveProvider direction={'col'} className={'gap-5 z-10 lg:flex-row transition-all'}>
        <Button label={'좋아요 🤩'} bg={'main'} className={'lg:w-4/12 w-2/3 text-lg'} />
        <Button label={'별로에요 🧐'} bg={'main'} className={'lg:w-4/12 w-2/3 text-lg'} />
        {user._id === selectReview.userId && (
          <>
            <Button label={'삭제'} bg={'main'} className={'lg:w-4/12 w-2/3 text-lg'} />
            <Button label={'수정'} bg={'main'} className={'lg:w-4/12 w-2/3 text-lg'} />
          </>
        )}
      </ResponsiveProvider>
      <ResponsiveProvider>
        <h1
          className='text-xl cursor-pointer hover:text-red-400 z-10'
          onClick={() => {
            console.log(selectReview);
            navigator(`/detail/${selectReview.contentType}/${selectReview.contentId}`);
          }}
        >
          {selectReview.contentName} 다른 리뷰도 보러가기 ! <span className='text-3xl'>👈</span>
        </h1>
      </ResponsiveProvider>
      <Footer />
    </React.Fragment>
  );
}
