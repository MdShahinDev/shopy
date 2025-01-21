import React, { useState } from 'react';
import { LuSettings2 } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import productimg from '../assets/p_img1.png';
import { IoIosGitCompare, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
const ShopPage = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
    document.body.style.overflow = visible ? 'auto' : 'hidden';
  };
  return (
    <>
      <div className='shop container mb-8 mx-auto px-4 lg:px-0'>
        <div className='headerSection'>
          <div className='minifilter w-full flex gap-4 justify-between lg:justify-start  mb-6'>
            <div className='page w-full flex justify-between gap-4 items-center '>
              <div className='flex gap-2 items-center'>
              <p>Per Page:</p>
              <input className=' border-gray-300 border w-28 p-1 focus:ring-0 focus:outline-none' type='text' />
              </div>
              <button onClick={toggleSidebar} className=' flex items-center gap-1 lg:hidden'>Filter
                <LuSettings2 />
              </button>
              {/* Sidebar  */}
              <div className={`fixed top-0 left-0 bottom-0 bg-white shadow-lg px-4 z-50 w-3/4 transform transition-transform duration-300 ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='container mx-auto px-4 py-2 my-2 border-b-2 flex justify-between items-center'>
                  <h2 className='text-xl'>Filters</h2>
                  <button onClick={toggleSidebar} className='text-2xl font-bold'>
                    <IoMdClose />
                  </button>
                </div>

                <h2 className='text-xl mb-2'>Filter By Category</h2>
                <ul className='flex flex-col gap-2 mt-2 text-lg'>
                  <Link>
                    <li className='hover:text-gray-950'>Men</li>
                  </Link>
                  <Link>
                    <li>Men</li>
                  </Link>
                  <Link>
                    <li>Men</li>
                  </Link>
                </ul>
                <h2 className='text-xl mb-2'>Filter By Sub Category</h2>
                <ul className='flex flex-col gap-2 mt-2 text-lg'>
                  <Link>
                    <li className='hover:text-gray-950'>Men</li>
                  </Link>
                  <Link>
                    <li>Men</li>
                  </Link>
                  <Link>
                    <li>Men</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className='sorted hidden lg:block'>
              
              <select name='' className='ml-2 border p-2 focus:outline-none'>
                <option value=''>Short By Latest</option>
                <option value=''>Price Low to High</option>
                <option value=''>Price High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className='productSection flex gap-3'>
          <div className='sidebar hidden w-1/4 lg:block '>
            <h2 className='text-3xl font-semibold mb-4'>Filter</h2>
            <div className='category'>
              <h2 className='text-2xl font-semibold mb-3'>Filter By Category</h2>
              <ul>
                <li className='text-2xl cursor-pointer'>Men</li>
                <li className='text-2xl cursor-pointer'>Men</li>
              </ul>
            </div>
          </div>
          <div className='product w-full lg:w-3/4'>
            <div className='productSection  flex gap-y-3 flex-wrap'>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
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
                  <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                </div>
              </div>
              <div className="pagignation w-full flex justify-center gap-6 my-2 text-lg lg:text-xl">
                <button className='border px-4'>Prev</button>
                <div className="number">
                    <ul className='flex gap-4'>
                        <li className='border px-4 cursor-pointer'>1</li>
                        <li className='border px-4 cursor-pointer'>2</li>
                        <li className='border px-4 cursor-pointer'>3</li>
                        <li className='border px-4 cursor-pointer'>4</li>
                        
                    </ul>
                </div>
                <button className='border px-4'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
