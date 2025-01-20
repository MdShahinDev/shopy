import React from 'react'
import SectionHeader from '../Reusable/SectionHeader';
import productimg from '../assets/p_img1.png';
const RelatedProduct = () => {
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <SectionHeader bgtext='Products' title='Related' description='Related Product Based On your Category Interest'/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            <div className="product">
                <img className='mb-4' src={productimg} alt="" />
                <h2>Ladies Three Piece</h2>
                <p>$14.20</p>
            </div>
            <div className="product">
                <img className='mb-4' src={productimg} alt="" />
                <h2>Ladies Three Piece</h2>
                <p>$14.20</p>
            </div>
            <div className="product">
                <img className='mb-4' src={productimg} alt="" />
                <h2>Ladies Three Piece</h2>
                <p>$14.20</p>
            </div>
            <div className="product">
                <img className='mb-4' src={productimg} alt="" />
                <h2>Ladies Three Piece</h2>
                <p>$14.20</p>
            </div>
        </div>
    </div>
  )
}

export default RelatedProduct