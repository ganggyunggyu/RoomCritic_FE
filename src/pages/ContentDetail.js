import React from 'react';
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
import CreateForm from '../components/CreateForm';

export default function ContentDetail() {
  const navigator = useNavigate();
  const { contentType, contentId } = useParams();
  const contentInfo = contentType + contentId;
  const [isPrevInfo, setIsPrevInfo] = React.useState(contentInfo);
  const { detailContentQuery } = useContentFetch(contentType, contentId);
  const { selectedContentReviewsQuery } = useSeletedContentReviews(contentType, contentId);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const redirectReview = (review) => {
    navigator(`/detail/review/${review.userId}/${review._id}`);
  };

  if (contentInfo !== isPrevInfo) {
    detailContentQuery.refetch();
    setIsPrevInfo(contentInfo);
  }
  const { isLoading: isContentLoading, data: contentData } = detailContentQuery;
  const { isLoading: isReviewsLoading, data: reviewsData } = selectedContentReviewsQuery;

  if (isContentLoading && isReviewsLoading) {
    return <Loading />;
  }

  if (!isContentLoading && !isReviewsLoading) {
    const content = contentData.data.content;
    const reviews = reviewsData.data.reviews;

    return (
      <React.Fragment>
        <ResponsiveProvider direction={'col'} className={'gap-10'}>
          <DetailBackground path={content.backdrop_path} />
          <ContentInfo content={content} />

          <div className={'flex flex-col w-full gap-5 z-10'}>
            <div className='flex gap-5'>
              <Button label={'봤어요 🤩'} bg={'main'} className={'lg:w-6/12 w-full text-lg'} />
              <Button label={'보고싶어요 🧐'} bg={'main'} className={'lg:w-6/12 w-full text-lg'} />
            </div>
            {isLoggedIn ? (
              <CreateForm content={content} />
            ) : (
              <Button
                label={'로그인'}
                bg={'main'}
                className={'lg:w-3/12 w-full text-lg'}
                onClick={() => navigator(`/login`)}
              />
            )}
          </div>
          <React.Fragment>
            {reviews.length === 0 ? (
              <p className='pt-10 text-lg'>남겨진 리뷰가 없어요 🥲</p>
            ) : (
              <CardWrapProvider
                title={`${content.title}에 남겨진 리뷰`}
                cardList={reviews}
                onClick={redirectReview}
                isHover={true}
              />
            )}
          </React.Fragment>
        </ResponsiveProvider>
        <CategoryReviewList />
        <Footer />
      </React.Fragment>
    );
  }
}
