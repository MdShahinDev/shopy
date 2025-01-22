import React, { useContext, useEffect, useState } from 'react';
import PageHeader from '../Components/PageHeader';
import productimg from '../assets/p_img1.png';
import { IoIosGitCompare, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
const Category = () => {
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const { name } = useParams();
  const [categoryProduct, setCategoryProduct] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter((product) => product.category === name);
    setCategoryProduct(filteredProducts.slice(0, 20));
  }, [products, name]);

  return (
    <>
      <PageHeader pagename={`${name} Category`} pagename2={`${name} Category`} />
      <div className='section container mx-auto px-4 my-8 lg:px-0'>
        <div className='title px-4 text-center lg:text-xl my-4 lg:text-start'>
          <h2>{`You are Seeing ${name} categories Product`}</h2>
        </div>
        <div className='productSection  flex gap-y-3 flex-wrap'>
          {categoryProduct.map((item,index) => (
            <div className='singleProduct text-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
              <div className='relative group'>
                <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                <img className='w-full transition-all duration-300 hover:shadow-lg' src={item.image[0]} alt='' />
                
                </Link>
                <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                  <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                  <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                  <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                </div>
                <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                
                <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 md:text-xl py-4'>{item.name}</h2>
                </Link>
                <div className='price flex justify-center gap-4'>
                  <h2 className='text-lg font-semibold text-center'>{currency}{item.price}</h2>
                  <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
                </div>
              </div>
              <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                <button className='my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
