import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <>
      <div className='container mx-auto my-8 px-4 lg:px-0'>
        <div className='category flex flex-col md:flex-row gap-4 text-white'>
          <div className='cat w-full md:w-1/2 lg:w-1/3 min-h-[300px] bg-mencategory bg-cover bg-center bg-no-repeat flex flex-col gap-3 items-center justify-center rounded-lg'>
            <h2 className='text-lg font-semibold lg:text-4xl'>Men</h2>
            <Link to={'/'}><button className='px-4 py-1 text-lg font-semibold border-2 transition-all duration-300 hover:border-black'>Shop Now</button></Link>
          </div>

          <div className='cat w-full md:w-1/2 lg:w-1/3 min-h-[300px] bg-womencategory bg-cover bg-center bg-no-repeat flex flex-col gap-3 items-center justify-center rounded-lg'>
            <h2 className='text-lg font-semibold lg:text-4xl'>Women</h2>
            <Link to={'/'}><button className='px-4 py-1 text-lg font-semibold border-2 transition-all duration-300 hover:border-black'>Shop Now</button></Link>
          </div>

          <div className='cat w-full md:w-1/2 lg:w-1/3 min-h-[300px] bg-kidcategory bg-cover bg-center bg-no-repeat flex flex-col gap-3 items-center justify-center rounded-lg'>
            <h2 className='text-lg font-semibold lg:text-4xl'>Kids's</h2>
            <Link to={'/'}><button className='px-4 py-1 text-lg font-semibold border-2 transition-all duration-300 hover:border-black'>Shop Now</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
