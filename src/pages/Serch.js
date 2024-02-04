import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import React, { useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import Card from '../components/Card/Card';
import SerchIcon from '../icons/SerchIcon';
import { useNavigate } from 'react-router-dom';
import { searchContentsState } from '../recoilAtoms';
import { useRecoilState } from 'recoil';
import Input from '../components/AtomComponent/Input';
import Button from '../components/AtomComponent/Button';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
export default function Serch() {
  const navigator = useNavigate();
  const [searchValue, setSerchValue] = useState('');

  // const [isPending, startTransition] = useTransition();
  const [searchContents, setSerchContents] = useRecoilState(searchContentsState);
  const submitSearch = async () => {
    const result = await tmdbAxiosConfig.get(
      `/search/multi?include_adult=false&query=${searchValue}`,
    );
    console.log(result.data.results);
    setSerchContents(result.data.results);
  };

  const isDetailReview = (content) => {
    navigator(`/detail/${content.media_type}/${content.id}`);
  };

  return (
    <>
      <ResponsiveProvider direction={'col'}>
        <div className="w-2/3 relative">
          <Input
            value={searchValue}
            onChange={(e) => {
              setSerchValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                submitSearch();
              }
            }}
            name={'search'}
            className="w-full"
          />
          <Button
            item={<SerchIcon />}
            bg={'main'}
            className={'absolute right-0 top-0'}
            onClick={submitSearch}
          />
        </div>
      </ResponsiveProvider>
      {searchContents.length === 0 ? (
        <>
          <p className="pt-14 text-8xl animate-bounce">👆</p>
          <p className="text-xl">원하는 작품을 검색해보세요!</p>
        </>
      ) : (
        <CardWrapProvider
          // title={`${searchValue}에 대한 검색결과`}
          title={'검색결과'}
          cardList={searchContents}
          onClick={isDetailReview}
        />
      )}
    </>
  );
}
