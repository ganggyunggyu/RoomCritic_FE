import { useRecoilValue } from 'recoil';
import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import { isLoggedInState, searchContentsState } from '../recoilAtoms';
import useReviewFetch from '../hooks/useReviewFetch';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contents = () => {
  const navigator = useNavigate();
  const {
    fetchLatestReviews,
    latestReviews,
    fetchMovieContentReviews,
    movieContentReviews,
    fetchTvContentReviews,
    tvContentReviews,
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
      <CardWrapProvider
        title={'최근에 리뷰가 남겨진 작품'}
        cardList={latestReviews}
        onClick={redirectContent}
      />
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
