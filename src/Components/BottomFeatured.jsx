import React from 'react'
import icon1 from '../assets/icon-1.svg'
import icon2 from '../assets/icon-2.svg'
import icon3 from '../assets/icon-3.svg'
import icon4 from '../assets/icon-4.svg'
const BottomFeatured = () => {
  return (
    <>
        <div className="bottomfeatered container mx-auto px-4 mb-8 lg:px-0">
  <div className="featured flex flex-wrap lg:flex-nowrap gap-2">
    <div className="item flex w-full lg:w-1/4 gap-3 items-center border rounded-md p-2 bg-[#f4f6fa]">
      <img className='w-11' src={icon1} alt="" />
      <div className="text">
        <h2 className="text-lg md:text-xl font-semibold">Best prices & offers</h2>
        <p className="text-base text-gray-400">Orders $50 or more</p>
      </div>
    </div>
    <div className="item flex w-full lg:w-1/4 gap-3 items-center border rounded-md p-2 bg-[#f4f6fa]">
      <img className='w-11' src={icon2} alt="" />
      <div className="text">
        <h2 className="text-lg md:text-xl font-semibold">On Time delivery</h2>
        <p className="text-base text-gray-400">24/7 amazing services</p>
      </div>
    </div>
    <div className="item flex w-full lg:w-1/4 gap-3 items-center border rounded-md p-2 bg-[#f4f6fa]">
      <img className='w-11' src={icon3} alt="" />
      <div className="text">
        <h2 className="text-lg md:text-xl font-semibold">Great daily deal</h2>
        <p className="text-base text-gray-400">When you sign up</p>
      </div>
    </div>
    <div className="item flex w-full lg:w-1/4 gap-3 items-center border rounded-md p-2 bg-[#f4f6fa]">
      <img className='w-11' src={icon4} alt="" />
      <div className="text">
        <h2 className="text-lg md:text-xl font-semibold">Easy returns</h2>
        <p className="text-base text-gray-400">Within 30 days</p>
      </div>
    </div>
    
   
    
  </div>
</div>

    </>
  )
}

export default BottomFeatured