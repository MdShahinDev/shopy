import React from 'react';
import productimg from '../assets/p_img1.png';
import { IoIosGitCompare, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
const TrendyProduct = () => {
  return (
    <>
      <div className='section container mx-auto px-4 my-8 lg:px-0'>
        <div className='productSection w-full flex gap-y-3 flex-wrap'>
          <div className='singleProduct w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
            <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
            <div className='quickPanel flex gap-4 justify-center mt-4'>
              <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-2xl' />
              <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-2xl' />
              <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-2xl' />
            </div>
            <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>Ladies Three Piece</h2>
            <div className='price flex justify-center gap-4'>
              <h2 className='text-lg font-semibold text-center'>$12.99</h2>
              <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
            </div>
          </div>
          <div className='singleProduct w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
            <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
            <div className='quickPanel flex gap-4 justify-center mt-4 text-lg lg:text-xl'>
              <IoIosGitCompare className='cursor-pointer text-xl' />
              <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
              <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
            </div>
            <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>Ladies Three Piece</h2>
            <div className='price flex justify-center gap-4'>
              <h2 className='text-lg font-semibold text-center'>$12.99</h2>
              <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
            </div>
          </div>
          <div className='singleProduct w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
            <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
            <div className='quickPanel flex gap-4 justify-center mt-4 text-lg lg:text-xl'>
              <IoIosGitCompare className='cursor-pointer text-xl' />
              <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
              <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
            </div>
            <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>Ladies Three Piece</h2>
            <div className='price flex justify-center gap-4'>
              <h2 className='text-lg font-semibold text-center'>$12.99</h2>
              <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
            </div>
          </div>
          <div className='singleProduct w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
            <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
            <div className='quickPanel flex gap-4 justify-center mt-4 text-lg lg:text-xl'>
              <IoIosGitCompare className='cursor-pointer text-xl' />
              <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
              <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
            </div>
            <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>Ladies Three Piece</h2>
            <div className='price flex justify-center gap-4'>
              <h2 className='text-lg font-semibold text-center'>$12.99</h2>
              <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
            </div>
          </div>
          <div className='singleProduct w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
            <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
            <div className='quickPanel flex gap-4 justify-center mt-4 text-lg lg:text-xl'>
              <IoIosGitCompare className='cursor-pointer text-xl' />
              <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
              <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
            </div>
            <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>Ladies Three Piece</h2>
            <div className='price flex justify-center gap-4'>
              <h2 className='text-lg font-semibold text-center'>$12.99</h2>
              <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
            </div>
          </div>
          <div className='singleProduct w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
            <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
            <div className='quickPanel flex gap-4 justify-center mt-4 text-lg lg:text-xl'>
              <IoIosGitCompare className='cursor-pointer text-xl' />
              <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
              <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
            </div>
            <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>Ladies Three Piece</h2>
            <div className='price flex justify-center gap-4'>
              <h2 className='text-lg font-semibold text-center'>$12.99</h2>
              <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default TrendyProduct;
