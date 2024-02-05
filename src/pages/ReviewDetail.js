import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reviewsState, userInfoState } from '../recoilAtoms';
import { seletReview } from '../recoilAtoms';
import { useRecoilState } from 'recoil';
import axiosConfig from '../api/axiosConfig';
import { formatDateWithTime } from '../util/Regs';
import Contents from './Contents';
import Footer from '../components/Footer';
import DetailBackground from '../components/DetailBackground';
import Button from '../components/AtomComponent/Button';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';

export default function ReviewDetail() {
  const reviews = useRecoilValue(reviewsState);
  const { userId, reviewId } = useParams();
  const navigator = useNavigate();
  const [selectReview, setSelectReview] = useRecoilState(seletReview);
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
      console.log(result);

      setSelectReview(result.data.review);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isReviewSelet();
  }, []);

  console.log(userId, user);

  return (
    <React.Fragment>
      <DetailBackground
        path={
          selectReview.contentBackdropImg ||
          selectReview.contentPosterImg ||
          selectReview.contentImg
        }
      />
      <div className="gap-10 pt-10 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-10 z-10">
          <h1
            className="text-2xl cursor-pointer hover:text-red-400"
            onClick={() => {
              console.log(selectReview);
              navigator(`/detail/${selectReview.contentType}/${selectReview.contentId}`);
            }}
          >
            {selectReview.contentName} 다른 리뷰도 보러가요
          </h1>
          <p>{selectReview.userName}님의 리뷰</p>
          <p>{formatDateWithTime(selectReview.createTime)}</p>
          <p className="">한줄 평</p>
          <p>{selectReview.review}</p>

          <p className="">긴 평</p>
          <p>{selectReview.addReview}</p>

          <p>평점은 {selectReview.grade}점 드립니다</p>
        </div>
      </div>
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
      <Footer />
    </React.Fragment>
  );
}
