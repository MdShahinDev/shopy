import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { ShopContext } from '../Context/ShopContext';
import { deleteCartItem, increament, decreament} from './Slices/CartSlice';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const CartDetails = () => {
  const {currency} = useContext(ShopContext);
  let cartData = useSelector((state) => state.cartItemManager.cartItems);
  let dispatch = useDispatch();
  const handleDelete = (index)=>{
    dispatch(deleteCartItem(index))
  }
  const handleIncreament =(index)=>{
    dispatch(increament(index))
  }
  const handleDecreament =(index)=>{
    dispatch(decreament(index))
  }
  return (
    <>
      { cartData.length > 0 ?
      <div className='cartPage my-8 px-4 lg:px-0'>
      <div className='container mx-auto'>
        <div className='itemcard w-full '>
          <div className='cardheading flex justify-between py-4 font-semibold text-base lg:text-2xl'>
            <div className='w-2/5 flex justify-start'>Product</div>
            <div className='w-1/6 flex justify-start'>Price</div>
            <div className='w-1/5 flex justify-center'>Quantity</div>
            <div className='w-1/5  hidden md:flex justify-center '>Total</div>
          </div>
          {cartData.map((item, index) => (
            <div key={item.id} className='cart-product flex justify-between items-center py-4 font-Crimson font-semibold text-2xl'>
              <div className='w-2/5 flex justify-start '>
                <div className='product-info flex gap-2 relative'>
                  <img src={item.image[0]} className='w-20 bg-slate-200' alt='' />
                  <IoMdClose onClick={()=>handleDelete(index)} className='absolute left-16 bottom-[5rem] cursor-pointer' />
                  <div className='product-details'>
                    <p className='text-base font-normal'>{item.name}</p>
                    <p className='text-base font-normal'>Size: {item.selectedSize}</p>
                  </div>
                </div>
              </div>
              <div className='w-1/6 flex justify-start text-base md:text-lg'>{currency}{item.price}</div>
              <div className='w-1/5 flex justify-center'>
                <div className='qty-change flex items-center overflow-hidden'>
                  <button onClick={()=>handleDecreament(index)} className='px-2  bg-gray-300 text-black hover:bg-gray-400'>-</button>

                  <span className='px-4  bg-gray-100 text-center text-base md:text-lg'>{item.qty}</span>

                  <button onClick={()=>handleIncreament(index)} className='px-2 bg-gray-300 text-black hover:bg-gray-400'>+</button>
                </div>
              </div>
              <div className='w-1/5 hidden lg:flex justify-center text-base md:text-lg'>$670.88</div>
            </div>
          ))}
        </div>
        {/* Cart Total */}
        <div className='cartTotals w-full flex flex-col md:flex-row gap-4'>
          <div className=' w-full md:w-3/5 '>
            <button className='text-lg border px-4 py-2 my-4 flex gap-4 items-center md:text-xl'> <FaArrowLeft/> Continue Shopping</button>
          </div>
          <div className=' w-full  my-4 md:w-2/5'>
            <h2 className='text-xl font-medium md:text-3xl'>Cart Totals</h2>
            <div className='w-full h-1 bg-gray-300'></div>
            <div className='flex justify-between my-4 md:text-lg font-medium'>
              <p>Subtotal</p>
              <p>$4500.20</p>
            </div>
            <hr />
            <div className='flex justify-between my-4 md:text-lg font-medium'>
              <p>Shipping</p>
              <p>$10</p>
            </div>
            <hr />
            <div className='flex justify-between my-4 md:text-lg font-medium'>
              <p>Grand Total</p>
              <p>$100.99</p>
            </div>
            <hr />
            <button className='my-4 w-full border py-3 font-medium rounded-md bg-black text-white md:text-xl'>Procced To Checkout</button>
          </div>
        </div>
      </div>
    </div>
      :
      <div className="emptycart flex flex-col container mx-auto mb-8 justify-center items-center">
        <h1 className='text-lg md:text-3xl'>Your Cart Is Empty</h1>
        <img className='w-36 text-center my-8' src={assets.emptycart} alt="" />
        <Link to={'/shop'}>
        <button className='my-4 px-4 py-2 border bg-black text-white text-base flex gap-4 items-center md:text-xl active:bg-gray-700'><FaArrowLeft/> Shop Now</button>
        </Link>
      </div>
      }
    </>
  );
};

export default CartDetails;
