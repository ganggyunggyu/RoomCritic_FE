/** @format */

import React, { useState } from 'react';
import styled from './Card.module.css';

export default function CardReview({ content, onClick }) {
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
          {content.review}
        </p>
      ) : null}

      <div className={`w-64 h-80 text-center border shadow-md`}>
        <img className='w-full h-5/6' src={content.contentImg} />
        <div className='p-3'>
          <p>
            {content.userName} 평론가님의{' '}
            <span className='text-red-400'>한줄평</span>
          </p>
        </div>
      </div>
    </div>
  );
}
