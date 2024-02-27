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
      className='relative hover:scale-105 transition-all rounded-md cursor-pointer py-3 shadow-lg'
    >
      {cardHover && <CardHover review={content.lineReview} />}
      {isHover && <CardHover review={content.lineReview} />}
      <div
        className={`text-center flex gap-5 flex-col md:w-[card-img-w] w-[card-img-sm-w] transition-1s`}
      >
        <CardImage
          path={content.contentPosterImg || content.poster_path || content.backdrop_path}
        />
        <p className='whitespace-nowrap	overflow-hidden text-ellipsis	'>
          {content.title || content.contentName}
        </p>
        {content.vote_average && (
          <React.Fragment>
            <p>
              회원 점수{' '}
              <span className='text-yellow-400'>{Math.round(content.vote_average * 10)}%</span>
            </p>
            <p>
              개봉 날짜 <span className='text-violet-400'>{formattedMonthEnd}</span>
            </p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
