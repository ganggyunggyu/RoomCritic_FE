import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import PencilIcon from '../icons/PencilIcon';

import { isLoggedInState, reviewsState } from '../recoilAtoms';
import { useRecoilValue } from 'recoil';
import useContentFetch from '../hooks/useContentFetch';

import CardWrapProvider from '../components/wraper-components/CardWrapProvider';
import Contents from './Contents';

export default function Detail() {
  const navigator = useNavigate();
  const { mediaType, contentId } = useParams();
  const { content, fetchContent, reviews, fetchReview } = useContentFetch(mediaType, contentId);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const redirectReview = (review) => {
    navigator(`/detail/review/${review.userId}/${review._id}`);
  };
  useEffect(() => {
    fetchReview();
    window.scrollTo(0, 0);
  }, [mediaType, contentId]);

  useEffect(() => {
    fetchContent();
    window.scrollTo(0, 0);
  }, [mediaType, contentId]);
  console.log(content);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <img src={`https://www.themoviedb.org/t/p/original/${content.backdrop_path}`} alt="" />
      <div className="h-84 w-11/12 max-w-fit flex flex-col items-center md:items-start md:flex-row gap-10 p-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-2xl">{content.title || content.name}</h1>
            {isLoggedIn ? (
              <button
                className="flex flex-col items-center gap-1"
                onClick={(e) => {
                  navigator(`/create/${mediaType}/${contentId}`);
                }}
              >
                <PencilIcon />
                한줄평 쓰기
              </button>
            ) : (
              <button
                onClick={() => {
                  navigator('/login');
                }}
              >
                로그인 하고 한줄평 쓰자!
              </button>
            )}
          </div>
          <div>전세계의 평점 : {content.vote_average}</div>
          <div>빨안스 평론가들의 평점 : {content.vote_average}</div>
          <div className="tracking-wide leading-relaxed w-full">줄거리 : {content.overview}</div>
        </div>
      </div>

      <CardWrapProvider
        title={`${content.title || content.name}에 남겨진 리뷰`}
        cardList={reviews}
        onClick={redirectReview}
      />
      {reviews.length === 0 && <p>남겨진 리뷰가 없어요 ... 하나 써주시지요</p>}
      <Contents />
    </div>
  );
}
