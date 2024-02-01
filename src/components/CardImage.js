import React from 'react';

const CardHover = ({ path }) => {
  return (
    <img
      className="w-full h-94"
      loading="lazy"
      decoding="async"
      src={`https://www.themoviedb.org/t/p/original/${path}`}
      alt="movie-img"
    />
  );
};

export default CardHover;
