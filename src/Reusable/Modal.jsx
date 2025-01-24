import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
const Modal = ({ isOpen, onClose, productId }) => {
  if (!isOpen) return null;
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const product = products.find((item) => item.id === productId);
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div className='bg-white relative rounded-lg shadow-lg p-6 w-11/12 max-w-4xl'>
          <button onClick={onClose} className='my-2 text-black absolute top-2 right-6 text-2xl'>
              <IoClose/>
            </button>
          <div className='productinfo mt-6 flex gap-4'>
            <div className='left w-full md:w-1/3'>
              <img src={product.image[0]} alt='' />
            </div>
            <div className='right w-full md:w-1/2'>
              <h2 className='text-xl font-semibold mb-4'>{product.name}</h2>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_dull_icon} alt='' className='w-3 5' />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='text-xl font-semibold mb-4'>
                {currency}
                {product.price}
              </p>
              <p>Available Size:</p>
              <div className='flex gap-4'>
                {product.sizes.map((item) => (
                  <p className='border py-2 px-4 bg-gray-100'>{item}</p>
                ))}
              </div>
              <p className='mt-4'>Category: {product.category}</p>
              <Link to={`/product/${product.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: product.id }}><button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-6'>View Details</button></Link>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
