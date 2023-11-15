import React from 'react';
import Banner from '../components/Banner';
import WrapProvider from '../components/wraper-components/WrapProvider';
import Footer from '../components/Footer';
import Contents from './Contents';

export default function Home() {
  return (
    <WrapProvider type={'centering'} className={'gap-10'}>
      <Banner />
      <Contents />
      <Footer />
    </WrapProvider>
  );
}
