import React, { useState } from 'react';
import CardImage from './CardImage';
import CardHover from './CardHover';
import { cva } from 'class-variance-authority';
import { cn } from '../../util/cn';
import { formatDateWithTime } from '../../util/Regs';
export const CardWrapVariants = cva(``);

export default function Card({ content, onClick, isHover }) {
  const { formattedMonthEnd } = formatDateWithTime(content.release_date);
  const [cardHover, setCardHover] = useState(false);
  const cardMouseOver = () => {
    setCardHover(true);
  };

  return (
    <div
      onClick={onClick}
      onMouseOver={cardMouseOver}
      onMouseLeave={() => setCardHover(false)}
      className='relative hover:scale-105 transition-all rounded-md cursor-pointer py-2 shadow-lg'
    >
      {cardHover && <CardHover review={content.lineReview} />}
      {isHover && <CardHover review={content.lineReview} />}
      <div
        className={`text-center flex gap-2 flex-col md:w-[card-img-w] w-[card-img-sm-w] transition-1s`}
      >
        <CardImage
          path={content.contentPosterImg || content.poster_path || content.backdrop_path}
        />
        <p className='whitespace-nowrap	overflow-hidden text-ellipsis text-lg	z-10'>
          {content.title || content.contentName}
        </p>

        {content.countvote_average === 0 ? (
          <p className='text-sm z-10'>별점 정보가 없네요</p>
        ) : (
          <p className='text-sm z-10'>
            ⭐️{' '}
            <span className='text-yellow-500'>
              {content.grade || (content.vote_average / 2).toFixed(1)}
            </span>
          </p>
        )}
        <p className='text-sm z-10'>
          <span className='text-violet-500'>{content.userName || formattedMonthEnd}</span>
        </p>
      </div>
    </div>
  );
}
