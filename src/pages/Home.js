import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Contents from './Contents';

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <Contents />
      <Footer />
    </React.Fragment>
  );
}
