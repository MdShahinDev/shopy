import React, { useContext, useEffect, useState } from 'react';
import {  IoMdHeartEmpty, IoIosHeart } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import Modal from '../Reusable/Modal';
import { addToWish } from './Slices/wishListSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
const TrendyProduct = () => {
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const [trendyProduct, setTrendyProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const wishlist = useSelector((state) => state.wishItemManager.wishItems);
  const wishid = wishlist.map((item) => item.id);

  useEffect(() => {
    setTrendyProduct(products.slice(16, 22));
  }, []);

  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };
  const dispatch = useDispatch();
  const handleAddToWish = (item) => {
    dispatch(addToWish(item));
    toast.success('Addes To Wishlist');
  };
  return (
    <>
      <div className='section container mx-auto px-4 my-8 lg:px-0'>
        <div className='productSection w-full flex gap-y-3 flex-wrap'>
          {trendyProduct.map((item, index) => (
            <div className='singleProduct text-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4'>
              <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                <img className='w-full transition-all duration-300 hover:shadow-lg' src={item.image[0]} alt='' />
              </Link>
              <div className='quickPanel flex gap-4 justify-center mt-4'>
                {wishid.includes(item.id) ? (
                  <Link to={'/wishlist'}>
                    <IoIosHeart className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                  </Link>
                ) : (
                  <IoMdHeartEmpty onClick={() => handleAddToWish(item)} className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                )}
                <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-2xl' onClick={() => handleOpenModal(item.id)} />
              </div>
              <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 md:text-xl py-4'>{item.name}</h2>
              </Link>
              <div className='price flex justify-center gap-4'>
                <h2 className='text-lg font-semibold text-center'>
                  {currency}
                  {item.price}
                </h2>
                <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
              </div>
              <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                <button className=' my-2 border px-3 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} productId={selectedProductId} />
    </>
  );
};

export default TrendyProduct;
