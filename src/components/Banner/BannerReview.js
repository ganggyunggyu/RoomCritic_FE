import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../util/cn';

const BannerReview = ({ review }) => {
  const [movieColor, setMovieColor] = React.useState(review.movie_color);
  const [hoverColor, setHoverColor] = React.useState(review.hover_color);
  const [isHovering, setIsHovering] = React.useState(false);

  if (movieColor !== review.movie_color) {
    setMovieColor(review.movie_color);
    setHoverColor(review.hover_color);
  }
  return (
    <React.Fragment>
      <div
        className='md:w-5/12 w-6/12 flex items-center opacity-40 blur-lg 
      absolute top-0 bottom-0 pl-20 pr-10 bg-black pointer-events-none transition-all text-viloet-300 text-rose-300 text-green-300 hover:text-rose-700 hover:text-green-700 hover:text-violet-700'
      />
      <div className='md:w-7/12 w-10/12 flex flex-col justify-center gap-1 md:gap-3 transition-all max-w-fit absolute top-0 bottom-0 left-12 md:left-40'>
        <p
          style={{ color: movieColor }}
          className={cn(`md:text-5xl text-xl transition-1s text-${movieColor}-300`)}
        >
          {review.title}
        </p>
        {review.lines.map((line, i) => {
          return (
            <p key={i} className='text-xs md:text-lg max-w-fit text-white'>
              {line}
            </p>
          );
        })}
        <Link
          style={{ color: isHovering ? hoverColor : movieColor }}
          className={cn(
            `transition-all py-1 md:text-3xl text-${movieColor}-300 hover:text-${movieColor}-700`,
          )}
          to={review.link}
          onMouseEnter={() => {
            setIsHovering(!isHovering);
          }}
          onMouseLeave={() => {
            setIsHovering(!isHovering);
          }}
        >
          👉 {review.title} 리뷰 쓰러가기
        </Link>
      </div>
    </React.Fragment>
  );
};

export default BannerReview;
