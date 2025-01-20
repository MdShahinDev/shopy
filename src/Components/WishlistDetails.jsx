import React from 'react';
import productimg from '../assets/p_img1.png';
import { IoMdClose } from 'react-icons/io';
import { LuTrash2 } from 'react-icons/lu';
const WishlistDetails = () => {
  return (
    <>
      <div className='wishlistPage my-8 px-4 lg:px-0'>
        <div className='container mx-auto'>
          <div className='itemcard w-full '>
            <div className='wishlistheading flex justify-between py-4 font-semibold text-base lg:text-2xl'>
              <div className='w-2/5 flex justify-start'>Product</div>
              <div className='w-1/6 flex justify-start'>Price</div>
              <div className='w-1/5 flex justify-center'>Action</div>
              <div className='w-1/5 flex justify-center'>Remove</div>
            </div>
            <div className='wishlist-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl'>
              <div className='w-2/5 flex justify-start '>
                <div className='product-info flex gap-2 relative'>
                  <img src={productimg} className='w-20 bg-slate-200' alt='' />
                  <IoMdClose className='absolute left-16 bottom-[5rem] cursor-pointer' />
                  <div className='product-details'>
                    <p className='text-base font-normal'>Ladies Three Piece</p>
                    <p className='text-base font-normal'>Size: XL</p>
                  </div>
                </div>
              </div>
              <div className='w-1/6 flex justify-start text-base md:text-lg'>$12.99</div>
              <div className='w-1/5 flex justify-center'>
                <div className='qty-change flex items-center  overflow-hidden'>
                  <button className='text-xs border px-2 py-1 transition-all duration-300 font-normal hover:border-black  lg:px-4 md:text-xl '>Add To Cart</button>
                </div>
              </div>
              <button className='w-1/5 flex justify-center text-base lg:text-lg text-gray-500 hover:text-gray-700'>
                <LuTrash2 />
              </button>
            </div>
            <div className='wishlist-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl'>
              <div className='w-2/5 flex justify-start '>
                <div className='product-info flex gap-2 relative'>
                  <img src={productimg} className='w-20 bg-slate-200' alt='' />
                  <IoMdClose className='absolute left-16 bottom-[5rem] cursor-pointer' />
                  <div className='product-details'>
                    <p className='text-base font-normal'>Ladies Three Piece</p>
                    <p className='text-base font-normal'>Color: Brown</p>
                    <p className='text-base font-normal'>Size: XL</p>
                  </div>
                </div>
              </div>
              <div className='w-1/6 flex justify-start text-base md:text-lg'>$12.99</div>
              <div className='w-1/5 flex justify-center'>
                <div className='qty-change flex items-center  overflow-hidden'>
                  <button className='text-xs border px-2 py-1 transition-all duration-300 font-normal hover:border-black  lg:px-4 md:text-xl '>Add To Cart</button>
                </div>
              </div>
              <button className='w-1/5 flex justify-center text-base lg:text-lg text-gray-500 hover:text-gray-700'>
                <LuTrash2 />
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default WishlistDetails;
