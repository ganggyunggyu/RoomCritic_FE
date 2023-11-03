/** @format */

import React, { useDeferredValue, useEffect, useState, useTransition } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import Card from '../components/Card';
import SerchIcon from '../icons/SerchIcon';
import { useNavigate } from 'react-router-dom';
import { searchContentsState } from '../recoilAtoms';
import { useRecoilState } from 'recoil';

export default function Serch() {
  const navigator = useNavigate();
  const [searchValue, setSerchValue] = useState('');

  // const [isPending, startTransition] = useTransition();
  const [searchContents, setSerchContents] = useRecoilState(searchContentsState);
  const fetchSearchMovie = async () => {
    const result = await tmdbAxiosConfig.get(
      `/search/multi?include_adult=false&query=${searchValue}`,
    );
    console.log(result.data.results);
    setSerchContents(result.data.results);
  };

  const isDetailReview = (content) => {
    navigator(`/detail/${content.media_type}/${content.id}`);
  };
  // useEffect(() => {
  //   fetchSearchMovie();
  //   console.log(searchValue);
  // }, [setSerchValue]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-5">
      <div className="w-11/12 sm:w-96 relative">
        <input
          className="border focus:border-red-400 focus:bg-slate-50 w-full p-3 rounded-md text-zinc-900"
          type="text"
          placeholder="작품명을 검색해봐요!"
          onChange={(e) => {
            setSerchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              fetchSearchMovie();
            }
          }}
        />
        <button
          onClick={fetchSearchMovie}
          type="button"
          className="absolute top-3 right-3 text-white text-sm rounded-md bg-red-400 w-10 h-6 hover:bg-red-500 flex items-center justify-center"
        >
          <SerchIcon />
        </button>
      </div>
      <div className="w-11/12 flex flex-wrap items-center justify-center gap-3">
        {searchContents.map((content, i) => {
          return (
            <Card
              key={i}
              content={content}
              onClick={() => {
                isDetailReview(content);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
