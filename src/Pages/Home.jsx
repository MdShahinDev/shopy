import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import SectionHeader from '../Reusable/SectionHeader';
import TopSellingProduct from '../Components/TopSellingProduct';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SectionHeader title='Top Selling' description='Cum doctus civibus efficiantur in imperdiet deterruisset' />
      <TopSellingProduct/>
    </>
  );
};

export default Home;
