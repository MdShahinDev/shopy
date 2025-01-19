import React from 'react';
import productimg from '../assets/p_img1.png';
import { IoIosGitCompare, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Slider from 'react-slick';
const FeaturedProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For devices with width <= 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='slider my-8'>
        <div className='container mx-auto px-4 lg:px-0'>
          <Slider {...settings}>
            <div className='singleProduct sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
              <div className='relative group'>
                <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
                <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                  <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
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

            <div className='singleProduct sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
              <div className='relative group'>
                <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
                <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                  <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
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
            <div className='singleProduct sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
              <div className='relative group'>
                <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
                <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                  <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
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
            <div className='singleProduct sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
              <div className='relative group'>
                <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
                <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                  <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
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
            <div className='singleProduct sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
              <div className='relative group'>
                <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
                <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                  <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
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
            <div className='singleProduct sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
              <div className='relative group'>
                <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={productimg} alt='' />
                <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                  <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
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
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
