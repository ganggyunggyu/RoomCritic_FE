import React, { useState } from 'react';

export default function CardReview({ content, onClick }) {
  const [cardHover, setCardHover] = useState(false);
  const cardMouseOver = () => {
    setCardHover(true);
  };
  return (
    <div onClick={onClick} onMouseOver={cardMouseOver} onMouseLeave={() => setCardHover(false)}>
      {cardHover ? <p className={` absolute z-10 text-white p-1`}>{content.review}</p> : null}

      <div className={`w-64 h-80 text-center border shadow-md`}>
        <img className="w-full h-5/6" src={content.contentPosterImg} alt="" />
        <div className="p-3">
          <p>
            {content.userName} 평론가님의 <span className="text-red-400">한줄평</span>
          </p>
        </div>
      </div>
    </div>
  );
}
