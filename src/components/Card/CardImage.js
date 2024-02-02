import React from 'react';

const CardHover = ({ path }) => {
  return (
    <img
      className="md:h-96 h-48 rounded-sm shadow-lg"
      src={`https://www.themoviedb.org/t/p/original/${path}`}
      alt="movie-img"
    />
  );
};

export default CardHover;
