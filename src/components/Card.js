/** @format */

import React from 'react';
import styled from './Card.module.css';

export default function Card({ content, onClick }) {
  return (
    <div className={`${styled.CardStyled}`} onClick={onClick}>
      <div className={`w-64 h-80 text-center border rounded-md shadow-md p-1`}>
        <img
          className="w-full h-5/6"
          src={
            content.contentPosterImg ||
            `https://www.themoviedb.org/t/p/original${content.poster_path || content.backdrop_path}`
          }
          alt="카드 이미지"
        />
        <div className="p-3 z-10">{content.title || content.name || content.contentName}</div>
      </div>
    </div>
  );
}
