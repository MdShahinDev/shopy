import React, { useContext } from 'react';
import { LuTrash2 } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import { deleteWishItem } from './Slices/wishListSlice';
import { FaArrowLeft, FaRegHeart } from 'react-icons/fa';
const WishlistDetails = () => {
  const wishlist = useSelector((state) => state.wishItemManager.wishItems);
  const { currency } = useContext(ShopContext);
  let dispatch = useDispatch();
  const handleWishDelete = (index) => {
    dispatch(deleteWishItem(index));
  };

  return (
    <>
      {wishlist.length > 0 ? (
        <div className='wishlistPage my-8 px-4 lg:px-0'>
          <div className='container mx-auto'>
            <div className='itemcard w-full '>
              <div className='wishlistheading flex justify-between py-4 font-semibold text-base lg:text-2xl'>
                <div className='w-2/5 flex justify-start'>Product</div>
                <div className='w-1/6 flex justify-start'>Price</div>
                <div className='w-1/5 flex justify-center'>Action</div>
                <div className='w-1/5 flex justify-center'>Remove</div>
              </div>
              {wishlist.map((item, index) => (
                <div key={index} className='wishlist-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl'>
                  <div className='w-2/5 flex justify-start '>
                    <div className='product-info flex gap-2 relative'>
                      <img src={item.image[0]} className='w-20 bg-slate-200' alt='' />
                      <div className='product-details'>
                        <p className='text-base font-normal'>{item.name}</p>
                        <p className='text-base font-normal flex gap-2'>
                          Size:
                          <div className='flex gap-1'>
                            {item.sizes.map((item) => (
                              <p className='px-2 bg-gray-200'>{item}</p>
                            ))}
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/6 flex justify-start text-base md:text-lg'>
                    {currency}
                    {item.price}
                  </div>
                  <div className='w-1/5 flex justify-center'>
                    <div className='qty-change flex items-center  overflow-hidden'>
                      <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                        <button className='text-xs border px-2 py-1 transition-all duration-300 font-normal hover:border-black  lg:px-4 md:text-lg '>VIEW PRODUCT</button>
                      </Link>
                    </div>
                  </div>
                  <button onClick={() => handleWishDelete(index)} className='w-1/5 flex justify-center text-base lg:text-lg text-gray-500 hover:text-gray-700'>
                    <LuTrash2 />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='emptywish flex flex-col container mx-auto mb-8 justify-center items-center'>
          <h1 className='text-lg md:text-3xl'>Your Wishlist Is Empty</h1>
          <FaRegHeart className='text-7xl my-6' />

          <Link to={'/shop'}>
            <button className='my-4 px-4 py-2 border bg-black text-white text-base flex gap-4 items-center md:text-xl active:bg-gray-700'>
              <FaArrowLeft /> Shop Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default WishlistDetails;
