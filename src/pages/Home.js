import React from 'react';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CategoryReviewList from '../components/CategoryReviewList';

export default function Home() {
  return (
    <React.Fragment>
      {/* <Banner /> */}
      <CategoryReviewList />
      <Footer />
    </React.Fragment>
  );
}
