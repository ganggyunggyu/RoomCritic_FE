import { useRecoilValue } from 'recoil';
import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import { isLoggedInState, searchContentsState } from '../recoilAtoms';
import useReviewFetch from '../hooks/useReviewFetch';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import Loading from '../components/Loading';
const Contents = () => {
  const navigator = useNavigate();
  const { latestReviewsQuery, tvContentReviewsQuery, movieContentReviewsQuery } = useReviewFetch();
  const redirectContent = (content) => {
    navigator(
      `/detail/${content.contentType || content.media_type}/${content.contentId || content.id}`,
    );
  };

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const searchContents = useRecoilValue(searchContentsState);

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
          onClick={redirectContent}
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
          onClick={redirectContent}
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
          onClick={redirectContent}
        />
      )}
    </React.Fragment>
  );
};
export default Contents;
