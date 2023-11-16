import React, { useState } from 'react';
import tmdbAxiosConfig from '../api/tmdbAxiosConfig';
import Card from '../components/Card';
import SerchIcon from '../icons/SerchIcon';
import { useNavigate } from 'react-router-dom';
import { searchContentsState } from '../recoilAtoms';
import { useRecoilState } from 'recoil';
import Input from '../components/atom-components/Input';

export default function Serch() {
  const navigator = useNavigate();
  const [searchValue, setSerchValue] = useState('');

  // const [isPending, startTransition] = useTransition();
  const [searchContents, setSerchContents] = useRecoilState(searchContentsState);
  const requestSearchContent = async () => {
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
        <Input
          placeholder={'작품명을 입력하세요!'}
          value={searchValue}
          setValue={setSerchValue}
          name={'search'}
          size={'wfull'}
          btn_func={requestSearchContent}
        />
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
