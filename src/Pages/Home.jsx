import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import SectionHeader from '../Reusable/SectionHeader';
import TopSellingProduct from '../Components/TopSellingProduct';
import PromotionalBanner from '../Components/PromotionalBanner';
import FeaturedProduct from '../Components/FeaturedProduct';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SectionHeader title='Top Selling' description='Cum doctus civibus efficiantur in imperdiet deterruisset' />
      <TopSellingProduct/>
      <PromotionalBanner/>
      <SectionHeader title='Featured' description='Cum doctus civibus efficiantur in imperdiet deterruisset' />
      <FeaturedProduct/>
    </>
  );
};

export default Home;
