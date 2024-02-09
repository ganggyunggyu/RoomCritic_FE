import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState, searchContentsState } from '../recoilAtoms';
import useReviewFetch from '../hooks/review/useReviewFetch';
import CardWrapProvider from './WrapProvider/CardWrapProvider';
import ResponsiveProvider from './WrapProvider/ResponsiveProvider';
import Loading from './Loading';

const CategoryReviewList = () => {
  const navigator = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const searchContents = useRecoilValue(searchContentsState);
  const { latestReviewsQuery, tvContentReviewsQuery, movieContentReviewsQuery } = useReviewFetch();
  const redirectContent = (content) => {
    window.scrollTo(0, 0);
    navigator(`/detail/${content.media_type}/${content.id}`);
  };
  const redirectReview = (review) => {
    window.scrollTo(0, 0);
    navigator(`/detail/review/${review.userId}/${review._id}`);
  };

  return (
    <React.Fragment>
      {isLoggedIn && searchContents.length !== 0 && (
        <CardWrapProvider
          title={'최근에 검색한 작품'}
          cardList={searchContents}
          onClick={redirectContent}
        />
      )}
      {latestReviewsQuery.isPending ? (
        <ResponsiveProvider direction={'col'}>
          <Loading />
        </ResponsiveProvider>
      ) : (
        <CardWrapProvider
          title={'최근에 작성된 리뷰들'}
          cardList={latestReviewsQuery.data.data.reviews}
          onClick={redirectReview}
        />
      )}
      {tvContentReviewsQuery.isPending ? (
        <ResponsiveProvider direction={'col'}>
          <Loading />
        </ResponsiveProvider>
      ) : (
        <CardWrapProvider
          title={'TV 시리즈 리뷰들'}
          cardList={tvContentReviewsQuery.data.data.tvContentReviews}
          onClick={redirectReview}
        />
      )}
      {movieContentReviewsQuery.isPending ? (
        <ResponsiveProvider direction={'col'}>
          <Loading />
        </ResponsiveProvider>
      ) : (
        <CardWrapProvider
          title={'영화 리뷰들'}
          cardList={movieContentReviewsQuery.data.data.movieContentReviews}
          onClick={redirectReview}
        />
      )}
    </React.Fragment>
  );
};
export default CategoryReviewList;
