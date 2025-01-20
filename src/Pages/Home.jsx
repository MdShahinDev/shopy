import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import SectionHeader from '../Reusable/SectionHeader';
import TopSellingProduct from '../Components/TopSellingProduct';
import PromotionalBanner from '../Components/PromotionalBanner';
import FeaturedProduct from '../Components/FeaturedProduct';
import CategorySection from '../Components/CategorySection';
import TrendyProduct from '../Components/TrendyProduct';
import EmailSubscription from '../Components/EmailSubscription';
import BottomFeatured from '../Components/BottomFeatured';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SectionHeader bgtext='category' title='Brows By' description='Navigate by category faster' />
      <CategorySection/>
      <SectionHeader bgtext='Products' title='Top Selling' description='Cum doctus civibus efficiantur in imperdiet deterruisset' />
      <TopSellingProduct/>
      <PromotionalBanner/>
      <SectionHeader bgtext='Products' title='Featured' description='Cum doctus civibus efficiantur in imperdiet deterruisset' />
      <FeaturedProduct/>
      <SectionHeader bgtext='products' title='Trendy' description='Cum doctus civibus efficiantur in imperdiet deterruisset'/>
      <TrendyProduct/>
      <EmailSubscription/>
      <BottomFeatured/>
    </>
  );
};

export default Home;
