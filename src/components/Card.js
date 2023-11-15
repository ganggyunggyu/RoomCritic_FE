import React, { useState } from 'react';
import styled from './Card.module.css';

export default function Card({ content, onClick }) {
  const [cardHover, setCardHover] = useState(false);
  const cardMouseOver = () => {
    setCardHover(true);
  };
  return (
    <div
      onClick={onClick}
      onMouseOver={cardMouseOver}
      onMouseLeave={() => setCardHover(false)}
      className={`${styled.CardStyled}`}
    >
      {cardHover ? (
        <p className={`${styled.CardReview} absolute z-10 text-white p-1`}>
          {content.review && content.review}
        </p>
      ) : null}
      <div className={`w-64 h-80 text-center border rounded-md shadow-md p-1`}>
        <img
          className="w-full h-5/6"
          src={
            content.contentPosterImg ||
            `https://www.themoviedb.org/t/p/original${content.poster_path || content.backdrop_path}`
          }
          alt="카드 이미지"
        />
        {content.userName ? (
          <p className="p-3">
            {content.userName} 평론가님의 <span className="text-red-400">한줄평</span>
          </p>
        ) : (
          <p className="p-3 z-10">{content.title || content.name || content.contentName}</p>
        )}
      </div>
    </div>
  );
}
