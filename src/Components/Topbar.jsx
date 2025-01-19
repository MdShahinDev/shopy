import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='hidden md:block bg-black py-4'>
      <div className="container mx-auto text-white flex justify-between px-4 lg:px-0 ">
      <p className='lg;text-lg'><Link to={'mailto:hello.shahinofficial@gmail.com'}>hello.shahinofficial@gmail.com</Link></p>
      <div className='hidden lg:block tracking-widest'>
        <p>Get 10% of on your First Purchase</p>
      </div>
      <ul className='hidden md:flex gap-2 md:gap-4 lg:text-base '>
        <li><Link to={'/about'}>About Us</Link></li>
        <li><Link to={'/my-account'}>My Account</Link></li>
        <li><Link to={'/my-account'}>Order Tracking</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Topbar