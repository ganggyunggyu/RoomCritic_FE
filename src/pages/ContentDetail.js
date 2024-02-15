import React, { useEffect } from 'react';
import ContentInfo from '../components/ContentDetail/ContentInfo';
import { useNavigate, useParams } from 'react-router-dom';
import ResponsiveProvider from '../components/WrapProvider/ResponsiveProvider';
import useContentFetch from '../hooks/content/useContentFetch';
import CardWrapProvider from '../components/WrapProvider/CardWrapProvider';
import Footer from '../components/Footer';
import CategoryReviewList from '../components/CategoryReviewList';
import DetailBackground from '../components/DetailBackground';
import Button from '../components/AtomComponent/Button';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '../recoilAtoms';
import useSeletedContentReviews from '../hooks/content/useSelectedContentReviewsQuery';
import Loading from '../components/Loading';

export default function ContentDetail() {
  const navigator = useNavigate();
  const { mediaType, contentId } = useParams();
  const contentInfo = mediaType + contentId;
  const [isPrevInfo, setIsPrevInfo] = React.useState(contentInfo);
  const { detailContentQuery } = useContentFetch(mediaType, contentId);
  const { selectedContentReviewsQuery } = useSeletedContentReviews(contentId, mediaType);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const redirectReview = (review) => {
    navigator(`/detail/review/${review.userId}/${review._id}`);
  };

  if (contentInfo !== isPrevInfo) {
    detailContentQuery.refetch();
    setIsPrevInfo(contentInfo);
  }
  if (detailContentQuery.isPending || selectedContentReviewsQuery.isLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <DetailBackground path={detailContentQuery.data.data.backdrop_path} />
      <ContentInfo content={detailContentQuery.data.data} />
      <ResponsiveProvider direction={'col'} className={'gap-5 z-10 lg:flex-row'}>
        <Button label={'봤어요 🤩'} bg={'main'} className={'lg:w-6/12 w-full text-lg'} />
        <Button label={'보고싶어요 🧐'} bg={'main'} className={'lg:w-6/12 w-full text-lg'} />
        {isLoggedIn ? (
          <Button
            label={'리뷰 쓰러가기'}
            bg={'main'}
            className={'lg:w-3/12 w-full text-lg'}
            onClick={() => navigator(`/create/${mediaType}/${contentId}`)}
          />
        ) : (
          <Button
            label={'로그인'}
            bg={'main'}
            className={'lg:w-3/12 w-full text-lg'}
            onClick={() => navigator(`/login`)}
          />
        )}
      </ResponsiveProvider>
      <React.Fragment>
        {selectedContentReviewsQuery.data.data.reviews.length === 0 ? (
          <p className='pt-10 text-lg'>남겨진 리뷰가 없어요 🥲</p>
        ) : (
          <CardWrapProvider
            title={`${
              detailContentQuery.data.data.title || detailContentQuery.data.data.name
            }에 남겨진 리뷰`}
            cardList={selectedContentReviewsQuery.data.data.reviews}
            onClick={redirectReview}
            isHover={true}
          />
        )}
      </React.Fragment>

      <CategoryReviewList />
      <Footer />
    </React.Fragment>
  );
}
