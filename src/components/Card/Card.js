import React, { useState } from 'react';
import CardImage from './CardImage';
import CardHover from './CardHover';

export default function Card({ content, onClick, isHover }) {
  const [cardHover, setCardHover] = useState(false);
  const [stars, setStars] = useState([]);
  const cardMouseOver = () => {
    setCardHover(true);
  };

  return (
    <div
      onClick={onClick}
      onMouseOver={cardMouseOver}
      onMouseLeave={() => setCardHover(false)}
      className='relative hover:scale-105 transition-all rounded-md cursor-pointer py-3 shadow-lg'
    >
      {cardHover && <CardHover review={content.lineReview} />}
      {isHover && <CardHover review={content.lineReview} />}
      <div className={`text-center flex gap-5 flex-col md:w-64 w-32 transition-1s`}>
        <CardImage
          path={content.contentPosterImg || content.poster_path || content.backdrop_path}
        />
        <p>{content.title || content.name || content.contentName}</p>
      </div>
    </div>
  );
}
