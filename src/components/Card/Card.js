import React, { useState } from 'react';
import CardImage from './CardImage';
import CardHover from './CardHover';

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
      className="hover:scale-105 transition-all rounded-md cursor-pointer py-3 shadow-md"
    >
      {cardHover && <CardHover review={content.review} />}
      <div className={`text-center flex gap-5 flex-col md:w-64 w-32 transition-all`}>
        <CardImage
          path={content.contentPosterImg || content.poster_path || content.backdrop_path}
        />
        <p>{content.title || content.name || content.contentName}</p>
      </div>
    </div>
  );
}
