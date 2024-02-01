import React, { useState } from 'react';
import CardImage from '../components/CardImage';
import CardHover from '../components/CardHover';

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
      className="hover:scale-105 transition-all rounded-md"
    >
      {cardHover && <CardHover review={content.review} />}
      <div className={`text-center flex gap-3 flex-col`}>
        <CardImage
          path={content.contentPosterImg || content.poster_path || content.backdrop_path}
        />
        {content.userName ? (
          <p className="">{content.contentName}</p>
        ) : (
          <p className="">{content.title || content.name || content.contentName}</p>
        )}
      </div>
    </div>
  );
}
