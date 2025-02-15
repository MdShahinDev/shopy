import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { useSelector } from 'react-redux';

const CheckoutSection = () => {
  const { currency, delivery_fee } = useContext(ShopContext);
  const cartData = useSelector((state) => state.cartItemManager.cartItems);

  let cartTotal = cartData.reduce((total, item) => total + item.price * item.qty, 0);
  let grandTotal = cartTotal + delivery_fee;

  // State to track errors
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMethod: 'cod',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to check required fields
  const handleField = () => {
    let newErrors = {};
    
    // Get all required fields
    const fields = document.querySelectorAll('input[required]');
    fields.forEach(input => {
      if (!input.value.trim()) {
        newErrors[input.name] = `${input.placeholder} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with order placement logic
      localStorage.setItem('checkoutData', JSON.stringify(formData));
      navigate('/thank-you');
    }
  };
  
  console.log(formData);
  
  return (
    <>
      {cartData.length > 0 ? (
        <div className="container mx-auto mb-7 py-4 px-4 lg:px-0">
          <div className="filedSummery md:flex md:gap-7">
            {/* Form Section */}
            <div className="form-field w-full md:w-3/5">
              <h2 className="text-xl font-semibold md:text-2xl">Your Shipping Details</h2>
              <form>
                {/* Email Address */}
                <div className="input-field flex flex-col gap-1 mt-4">
                  <label>Email Address</label>
                  <input className="w-full border p-2 outline-none rounded-sm" type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} required />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* First Name & Last Name */}
                <div className="input-field flex flex-col md:flex-row gap-4 mt-4">
                  <div className="w-full md:w-1/2">
                    <label>First Name</label>
                    <input className="w-full border p-2 outline-none rounded-sm" type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your First Name" required />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div className="w-full md:w-1/2">
                    <label>Last Name</label>
                    <input className="w-full border p-2 outline-none rounded-sm" type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your Last Name" required />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Address */}
                <div className="input-field flex flex-col gap-1 mt-4">
                  <label>Address</label>
                  <input className="w-full border p-2 outline-none rounded-sm" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Your Address" required />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                {/* City & State */}
                <div className="input-field flex flex-col md:flex-row gap-4 mt-4">
                  <div className="w-full md:w-1/2">
                    <label>City</label>
                    <input className="w-full border p-2 outline-none rounded-sm" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your City" required />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                  </div>
                  <div className="w-full md:w-1/2">
                    <label>State</label>
                    <input className="w-full border p-2 outline-none rounded-sm" type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Your State" required />
                    {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                  </div>
                </div>

                {/* Postal Code */}
                <div className="input-field flex flex-col gap-1 mt-4">
                  <label>Postal Code</label>
                  <input className="w-full border p-2 outline-none rounded-sm" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Your Postal Code" required />
                  {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
                </div>
              </form>
              <Link to={'/shop'}>
                <button className="mt-4 border px-4 py-2">Continue Shopping</button>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="product-summary mt-8 w-full md:mt-0 md:w-2/5">
              <h2 className="text-xl font-semibold md:text-2xl">Your Order Details</h2>
              <h2 className="mt-4">Product</h2>
              <hr />
              {cartData.map((item, index) => (
                <div className="product flex justify-between mt-4" key={index}>
                  <div className="single-product w-4/5">
                    <h2>{item.name}</h2>
                    <p>Qty: {item.qty}</p>
                  </div>
                  <div className="price">
                    {currency}
                    {item.price * item.qty}
                  </div>
                </div>
              ))}

              <hr className="my-3" />
              <div className="subtotal flex justify-between">
                <h2>Subtotal</h2>
                <div className="price">
                  {currency}
                  {cartTotal}
                </div>
              </div>
              <hr className="my-3" />
              <div className="Shipping flex justify-between">
                <h2>Shipping</h2>
                <div className="price">
                  Inside Dhaka: {currency}
                  {delivery_fee}
                </div>
              </div>
              <hr className="my-3" />
              <div className="Total flex justify-between">
                <h2>Total</h2>
                <div className="price">
                  {currency}
                  {grandTotal}
                </div>
              </div>
              <hr className="my-3" />
              {/* Cupon  */}
              <div className="coupon my-2 flex gap-3">
              <input className='outline-none border py-1 px-2' type="text" placeholder='Coupon Code Here' />
              <button className='px-4 py-2 border'>Apply Coupon</button>
              </div>
              {/* Payment Method */}
              <div className="Delivery flex justify-between mt-6">
                <form>
                  <input type="radio" name="payment" value="cod" defaultChecked />
                  <label className="ml-4">Cash on Delivery</label>
                </form>
              </div>

              <div className="notice">
                <p className="text-sm font-normal mt-2 text-gray-400">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes.
                </p>
              </div>

              <button onClick={handleField} className="mt-4 px-4 py-2 bg-black text-white font-semibold text-xl w-full">
                Place Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="emptycart flex flex-col container mx-auto mb-8 justify-center items-center">
          <h1 className="text-lg md:text-3xl">Your Cart Is Empty</h1>
          <Link to={'/shop'}>
            <button className="my-4 px-4 py-2 border bg-black text-white text-base flex gap-4 items-center md:text-xl active:bg-gray-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckoutSection;
