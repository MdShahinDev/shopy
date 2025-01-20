import React from 'react';
import productimg from '../assets/p_img1.png';
import { IoMdClose } from 'react-icons/io';

const CartDetails = () => {
  return (
    <>
      <div className='cartPage my-8 px-4 lg:px-0'>
        <div className='container mx-auto'>
          <div className='itemcard w-full '>
            <div className='cardheading flex justify-between py-4 font-semibold text-base lg:text-2xl'>
              <div className='w-2/5 flex justify-start'>Product</div>
              <div className='w-1/6 flex justify-start'>Price</div>
              <div className='w-1/5 flex justify-center'>Quantity</div>
              <div className='w-1/5  hidden md:flex justify-center '>Total</div>
            </div>
            <div className='cart-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl'>
              <div className='w-2/5 flex justify-start '>
                <div className='product-info flex gap-2 relative'>
                  <img src={productimg} className='w-20 bg-slate-200' alt='' />
                  <IoMdClose className='absolute left-16 bottom-[5rem] cursor-pointer' />
                  <div className='product-details'>
                    <p className='text-base font-normal'>Ladies Three Piece</p>
                    <p className='text-base font-normal'>Size: M</p>
                  </div>
                </div>
              </div>
              <div className='w-1/6 flex justify-start text-base md:text-lg'>$12.99</div>
              <div className='w-1/5 flex justify-center'>
                <div className='qty-change flex items-center overflow-hidden'>
                  <button className='px-2  bg-gray-300 text-black hover:bg-gray-400'>-</button>

                  <span className='px-4  bg-gray-100 text-center text-base md:text-lg'>5</span>

                  <button className='px-2 bg-gray-300 text-black hover:bg-gray-400'>+</button>
                </div>
              </div>
              <div className='w-1/5 hidden lg:flex justify-center text-base md:text-lg'>$670.88</div>
            </div>
          </div>
            {/* Cart Total */}
          <div className="cartTotals w-full flex flex-col md:flex-row gap-4">
            <div className=" w-full md:w-3/5 ">
                <button className='text-lg border px-4 py-2 my-4 md:text-xl'>Continue Shopping</button>
                
            </div>
            <div className=" w-full  my-4 md:w-2/5">
                <h2 className='text-xl font-medium md:text-3xl'>Cart Totals</h2>
                <div className='w-full h-1 bg-gray-300'></div>
                <div className="flex justify-between my-4 md:text-lg font-medium">
                    <p>Subtotal</p>
                    <p>$4500.20</p>
                </div>
                <hr />
                <div className="flex justify-between my-4 md:text-lg font-medium">
                    <p>Shipping</p>
                    <p>$10</p>
                </div>
                <hr />
                <div className="flex justify-between my-4 md:text-lg font-medium">
                    <p>Grand Total</p>
                    <p>$100.99</p>
                </div>
                <hr />
                <button className='my-4 w-full border py-3 font-medium rounded-md bg-black text-white md:text-xl'>Procced To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
