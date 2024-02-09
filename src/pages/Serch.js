import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import React, { useState } from 'react';
import SerchIcon from '../icons/SerchIcon';
import { useNavigate } from 'react-router-dom';
import Input from '../components/AtomComponent/Input';
import Button from '../components/AtomComponent/Button';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import useSearchContents from '../hooks/content/useSearchContents';
import Loading from '../components/Loading';
export default function Serch() {
  const [searchValue, setSerchValue] = useState('');
  const { searchContentsQuery } = useSearchContents(searchValue);
  const isSearchValue = searchValue.length === 0;

  const navigator = useNavigate();

  const isDetailReview = (content) => {
    navigator(`/detail/${content.media_type}/${content.id}`);
  };

  return (
    <React.Fragment>
      <ResponsiveProvider direction={'col'}>
        <div className='w-2/3 relative'>
          <Input
            value={searchValue}
            onChange={(e) => {
              setSerchValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                searchContentsQuery.refetch();
              }
            }}
            name={'search'}
            className='w-full'
          />
          <Button
            item={<SerchIcon />}
            bg={'main'}
            className={'absolute right-0 top-0'}
            onClick={searchContentsQuery.refetch}
          />
        </div>
      </ResponsiveProvider>
      {isSearchValue ? (
        <React.Fragment>
          <p className='pt-14 text-8xl animate-bounce'>👆</p>
          <p className='text-xl'>원하는 작품을 검색해보세요!</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {searchContentsQuery.isLoading ? (
            <Loading />
          ) : (
            <CardWrapProvider
              title={'검색결과'}
              cardList={searchContentsQuery.data.data.results}
              onClick={isDetailReview}
            />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
