import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  const checkoutData = JSON.parse(localStorage.getItem('checkoutData'));
  const cartData = useSelector((state) => state.cartItemManager.cartItems);
  let cartTotal = cartData.reduce((total, item) => total + item.price * item.qty, 0);
  const { currency, delivery_fee } = useContext(ShopContext);
  let grandTotal = cartTotal + delivery_fee;
  console.log(checkoutData);
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const orderNumber = Math.floor(100 + Math.random() * 900);
  return (

    <>
    {
      cartData.length> 0 ? (<div className="thankyou container mx-auto mb-7 py-4 px-4 lg:px-0">
        <h1 className='text-center text-4xl font-bold my-4 md:text-6xl'>Thank You</h1>
        <p className='text-xl text-center text-gray-400'>Your Order has been received. Thank You For Choosing Us</p>
        <div className='flex justify-center my-2'>
          <div className=" w-full md:w-1/2">
           <h2 className='text-center my-2'>Your Order Details</h2>
           <div className='p-4 bg-[#ecfaf0]'>
            <div className="info md:flex justify-between">
              <div className="orderNumber mb-2 py-1 border-b md:border-none md:border-r">
                <h2 className='text-xl mb-2'>Order number:</h2>
                <p className='text-lg font-semibold'>{orderNumber}</p>
              </div>
              <div className="date mb-2 py-1 border-b md:border-b-0">
                <h2 className='text-xl mb-2'>Date:</h2>
                <p className='text-lg font-semibold'>{today}</p>
              </div>
              <div className="amount mb-2 py-1 border-b md:border-none ">
                <h2 className='text-xl mb-2'>Total:</h2>
                <p className='text-lg font-semibold'>{currency}{grandTotal}</p>
              </div>
              <div className="paymentmethod mb-2 py-1 border-b md:border-none">
                <h2 className='text-xl mb-2'>Payment Method:</h2>
                <p className='text-lg font-semibold'>Cash on Delivery</p>
              </div>
            </div>
           </div>
           <h2 className='my-2 mt-8 text-lg font-semibold'>Order Details</h2>
           <div className='p-4 bg-[#ecfaf0]'>
            <div className="info ">
            <div className="heading w-full flex justify-between pb-2 border-b">
            <div className=''>
              <h2 className='font-semibold text-lg md:text-xl'>Product</h2>
            </div>
            <div>
              <h2 className='font-semibold text-lg md:text-xl'>Total</h2>
            </div>
            </div>
            {cartData.map((item,index)=>(
              <div className="productDetails my-4 flex justify-between ">
              <div className="titleInfo ">
              <h2 className='text-xl'>{item.name}</h2>
              <p>Qty: {item.qty}</p>
              </div>
              <div>
                <p className='text-xl font-semibold'>{currency}{item.price * item.qty}</p>
              </div>
            </div>
            ))}
            <hr />
              <div className="subtotal flex justify-between my-4">
                <h2 className='text-lg md:text-xl'>Subtotal</h2>
                <p className='text-lg md:text-xl font-semibold'>{currency}{cartTotal}</p>
              </div>
              <hr />
              <div className="Shipping flex justify-between my-4">
                <h2 className='text-lg md:text-xl'>Shipping:</h2>
                <p className='text-lg md:text-xl font-semibold'>{currency}{delivery_fee}</p>
              </div>
              <hr />
              <div className="Payment flex justify-between my-4">
                <h2 className='text-lg md:text-xl'>Payment method:</h2>
                <p className='text-lg md:text-xl font-semibold'>Cash On Delivery</p>
              </div>
              <hr />
              <div className="Total flex justify-between my-4">
                <h2 className='text-lg md:text-xl'>Total:</h2>
                <p className='text-lg md:text-xl font-semibold'>{currency}{grandTotal}</p>
              </div>
            </div>
           </div>
           <h2 className='my-2 mt-8 text-lg font-semibold'>Billing Details</h2>
           <div className='p-4 bg-[#ecfaf0]'>
            <div className="personal">
            <div>
            <h2 className='font-semibold'>Email:</h2>
            <p className='mb-2'>{checkoutData.email}</p>
            </div>
           <div>
           <h2 className='font-semibold'>Name:</h2>
           <p className='mb-2'>{checkoutData.firstName} {checkoutData.lastName}</p>
           </div>
            </div>
            <h2 className='font-semibold'>Address:</h2>
            <p className='mb-2'>{checkoutData.address}</p>
            <h2 className='font-semibold'>City:</h2>
            <p className='mb-2'>{checkoutData.city}</p>
           </div>
          </div>
        </div>
      </div>
      ) :(
        <div className="emptycart flex flex-col container mx-auto mb-8 justify-center items-center mt-8">
          <h1 className="text-lg md:text-3xl">Your Cart Is Empty</h1>
          
          <Link to={'/shop'}>
            <button className="my-4 px-4 py-2 border bg-black text-white text-base flex gap-4 items-center md:text-xl active:bg-gray-700">
              Shop Now
            </button>
          </Link>
        </div>
      )
    }
      
    </>
  )
}

export default ThankYou