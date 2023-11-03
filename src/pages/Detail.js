import React, { useEffect, useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import axiosConfig from '../api/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';
import PencilIcon from '../icons/PencilIcon';
import CardReview from '../components/CardReview';
import { isLoggedInState, reviewsState } from '../recoilAtoms';
import { useSetRecoilState, useRecoilValue } from 'recoil';

export default function Detail() {
  const navigator = useNavigate();
  const { mediaType, contentId } = useParams();

  const [content, setContent] = useState({});
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setReviews = useSetRecoilState(reviewsState);
  const reviews = useRecoilValue(reviewsState);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const result = await tmdbAxiosConfig.get(`/${mediaType}/${contentId}`);
        setContent(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContent();
    const fetchReview = async () => {
      const result = await axiosConfig.post('post/review', {
        contentType: mediaType,
        contentId: contentId,
      });
      setReviews(result.data.reviews);
    };
    fetchReview();
  }, [mediaType, contentId, setReviews]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 pt-10">
      <div className="h-84 w-7/12 max-w-fit flex flex-col items-center md:items-start md:flex-row gap-10">
        <img
          className="w-full md:w-6/12 max-h-fit"
          src={`https://www.themoviedb.org/t/p/original/${content.poster_path}`}
          alt="movie_poster"
        />
        <div className="flex flex-col items-center md:items-start gap-5 w-full md:w-6/12">
          <h1 className="text-xl w-72 md:w-96 min-w-fit">{content.title || content.name}</h1>
          {/* <div className="flex gap-3">
            장르 :
            {content.genres.map((genre, i) => {
              return <p className="">{genre.name}</p>;
            })}
          </div> */}
          <div>전세계의 평점 : {content.vote_average}</div>
          <div>빨안스 평론가들의 평점 : {content.vote_average}</div>
          <div className="tracking-wide leading-relaxed w-80 md:w-80 min-w-fit">
            줄거리 : {content.overview}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center hover:text-red-400 cursor-pointer gap-2">
        {isLoggedIn ? (
          <button
            className="flex justify-center items-center gap-2"
            onClick={(e) => {
              navigator(`/create/${mediaType}/${contentId}`);
            }}
          >
            {content.title || content.name} 한줄평 쓰기 <PencilIcon />
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
      <div className="flex overflow-x-scroll gap-3 p-3">
        {reviews.map((review, i) => {
          return (
            <CardReview
              key={i}
              content={review}
              onClick={(e) => {
                navigator(`/detail/review/${review.userId}/${review._id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
