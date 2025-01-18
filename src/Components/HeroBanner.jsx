import React from 'react';
import { assets } from '../assets/assets';

const HeroBanner = () => {
  return (
    <div className='w-full lg:h-[700px] relative'>
      <img className='w-full h-full object-cover lg:object-cover ' src={assets.banner2} alt='Banner Image' />
      <div className="container mx-auto absolute inset-0 flex justify-center items-center z-10">
      </div>
    </div>
  );
};

export default HeroBanner;
