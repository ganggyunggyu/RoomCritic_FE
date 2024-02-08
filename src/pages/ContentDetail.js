import React, { useEffect } from 'react';
import ContentInfo from '../components/ContentDetail/ContentInfo';
import { useNavigate, useParams } from 'react-router-dom';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import useContentFetch from '../hooks/useContentFetch';
import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import Footer from '../components/Footer';
import Contents from './Contents';
import DetailBackground from '../components/DetailBackground';
import Button from '../components/AtomComponent/Button';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '../recoilAtoms';
import useReviewFetch from '../hooks/useReviewFetch';

export default function ContentDetail() {
  const navigator = useNavigate();
  const { mediaType, contentId } = useParams();

  const { detailContentQuery } = useContentFetch(mediaType, contentId);
  const { selectedContentReviews } = useReviewFetch();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const redirectReview = (review) => {
    navigator(`/detail/review/${review.userId}/${review._id}`);
  };

  useEffect(() => {
    detailContentQuery.refetch();
    window.scrollTo(0, 0);
  }, [mediaType, contentId]);

  return (
    <React.Fragment>
      {detailContentQuery.isLoading ? (
        <p>loding</p>
      ) : (
        <React.Fragment>
          <DetailBackground path={detailContentQuery.data.data.backdrop_path} />
          <ContentInfo content={detailContentQuery.data.data} />
          <ResponsiveProvider direction={'col'} className={'gap-5 z-10 lg:flex-row'}>
            <Button label={'좋아요 🤩'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
            <Button label={'별로에요 🧐'} bg={'main'} className={'lg:w-4/12 w-full text-lg'} />
            {isLoggedIn ? (
              <Button
                label={'리뷰 쓰러가기'}
                bg={'main'}
                className={'lg:w-4/12 w-full text-lg'}
                onClick={() => navigator(`/create/${mediaType}/${contentId}`)}
              />
            ) : (
              <Button
                label={'로그인하고 리뷰쓰자!'}
                bg={'main'}
                className={'lg:w-4/12 w-full text-lg'}
                onClick={() => navigator(`/login`)}
              />
            )}
          </ResponsiveProvider>
          {selectedContentReviews.length === 0 ? (
            <p className='pt-10'>남겨진 리뷰가 없어요 🥲</p>
          ) : (
            <CardWrapProvider
              title={`${
                detailContentQuery.data.data.title || detailContentQuery.data.data.name
              }에 남겨진 리뷰`}
              cardList={selectedContentReviews}
              onClick={redirectReview}
            />
          )}
          <Contents />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
