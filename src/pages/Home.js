import React from 'react';
import Banner from '../components/Banner';
import CategoryReviewList from '../components/CategoryReviewList';

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <CategoryReviewList />
    </React.Fragment>
  );
}
