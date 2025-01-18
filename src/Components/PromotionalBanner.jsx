import React from 'react'
import { Link } from 'react-router-dom'

const PromotionalBanner = () => {
  return (
    <>
        <div className="promotionalBanner my-8 min-h-64 lg:min-h-96 bg-promoBanner bg-cover bg-no-repeat bg-fixed flex items-center justify-center">
            <div className="promoText text-center">
                <h3 className='text-3xl font-semibold uppercase lg:text-6xl lg:font-bold'>Stay tune to trend</h3>
                <h1 className='text-5xl font-bold uppercase lg:text-7xl'>Exclusive flat 10%off</h1>
                <Link to={'/shop'}><button className='py-2 px-6 my-4 uppercase border text-lg font-semibold lg:text-xl'>Shop Now</button></Link>
            </div>
        </div>
    </>
  )
}

export default PromotionalBanner