import { useRecoilValue } from 'recoil';
import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import { isLoggedInState, searchContentsState } from '../recoilAtoms';
import useReviewFetch from '../hooks/useReviewFetch';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';

const Contents = () => {
  const navigator = useNavigate();
  const {
    fetchLatestReviews,
    latestReviews,
    fetchMovieContentReviews,
    movieContentReviews,
    fetchTvContentReviews,
    tvContentReviews,
    query,
  } = useReviewFetch();
  const redirectContent = (content) => {
    navigator(
      `/detail/${content.contentType || content.media_type}/${content.contentId || content.id}`,
    );
  };

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const searchContents = useRecoilValue(searchContentsState);
  useEffect(() => {
    fetchLatestReviews();
    fetchMovieContentReviews();
    fetchTvContentReviews();
  }, []);
  return (
    <React.Fragment>
      {isLoggedIn && searchContents.length !== 0 && (
        <CardWrapProvider
          title={'최근에 검색한 작품'}
          cardList={searchContents}
          onClick={redirectContent}
        />
      )}
      {query.isPending ? (
        <ResponsiveProvider direction={'col'}>
          <p>Loading</p>
        </ResponsiveProvider>
      ) : (
        <CardWrapProvider
          title={'최근에 작성된 리뷰들'}
          cardList={query.data.data.reviews}
          onClick={redirectContent}
        />
      )}
      <CardWrapProvider
        title={'영화 리뷰들'}
        cardList={movieContentReviews}
        onClick={redirectContent}
      />
      <CardWrapProvider
        title={'TV 시리즈 리뷰들'}
        cardList={tvContentReviews}
        onClick={redirectContent}
      />
    </React.Fragment>
  );
};
export default Contents;
