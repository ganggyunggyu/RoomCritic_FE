import { useRecoilValue } from 'recoil';
import CardWrapProvider from '../components/wraper-components/CardWrapProvider';
import { isLoggedInState, searchContentsState } from '../recoilAtoms';
import useReviewFetch from '../hooks/useReviewFetch';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useContentFetch from '../hooks/useContentFetch';

const Contents = () => {
  const { mediaType, contentId } = useParams();

  const navigator = useNavigate();
  const { fetchContent } = useContentFetch(mediaType, contentId);
  const { fetchReview, reviews } = useReviewFetch();
  const redirectContent = (content) => {
    navigator(
      `/detail/${content.contentType || content.media_type}/${content.contentId || content.id}`,
    );
  };
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const searchContents = useRecoilValue(searchContentsState);
  useEffect(() => {
    fetchReview();
    fetchContent();
  }, []);
  return (
    <>
      {isLoggedIn && searchContents.length !== 0 && (
        <CardWrapProvider
          title={'최근에 검색한 작품'}
          cardList={searchContents}
          onClick={redirectContent}
        />
      )}
      <CardWrapProvider
        title={'최근에 리뷰가 남겨진 작품'}
        cardList={reviews}
        onClick={redirectContent}
      />
    </>
  );
};
export default Contents;
