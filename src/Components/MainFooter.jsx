import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,FaWhatsapp} from "react-icons/fa";
const MainFooter = () => {
  return (
    <>
      <div className='section container mx-auto px-4 mt-12 pt-6 mb-6 md:mb-16 lg:px-0'>
        <div className='productSection w-full flex gap-y-3 flex-wrap'>
          <div className='widget1 sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4'>
            <img className='w-80 cursor-pointer mb-6' src={assets.logo} alt='' />
            <p>
              Shopy is a one of the biggest online ecommerce shop in Bangladesh.We offer stylish clothing for men, women, and kids, blending modern designs with local charm. Shop with us for quality,
              comfort, and a seamless shopping experience!
            </p>
          </div>
          <div className='widget2 w-full md:w-1/2 lg:w-1/4 px-2 mb-4'>
            <h2 className='text-xl font-semibold mb-4 lg:text-2xl'>Quick Links</h2>

            <ul className='text-lg font-medium flex flex-col gap-2 text-gray-600'>
              <Link to={'/shop'}>
                <li className='transition-all duration-300 hover:text-black'>Shop</li>
              </Link>
              <Link to={'/login'}>
                <li className='transition-all duration-300 hover:text-black'>My Account</li>
              </Link>
              <Link to={'/wishlist'}>
                <li className='transition-all duration-300 hover:text-black'>Wishlist</li>
              </Link>
              <Link to={'/cart'}>
                <li className='transition-all duration-300 hover:text-black'>My Cart</li>
              </Link>
              <Link to={'/login'}>
                <li className='transition-all duration-300 hover:text-black'>Track Order</li>
              </Link>
            </ul>
          </div>
          <div className='widget3 w-full md:w-1/2 lg:w-1/4 px-2 mb-4'>
            <h2 className='text-xl font-semibold mb-4 lg:text-2xl'>Important Links</h2>
            <ul className='text-lg font-medium flex flex-col gap-2 text-gray-600 '>
              <Link to={'/contact'}>
                <li className='transition-all duration-300 hover:text-black'>Contact Us</li>
              </Link>
              <Link to={'/privacy-policy'}>
                <li className='transition-all duration-300 hover:text-black'>Privacy Policy</li>
              </Link>
              <Link to={'/terms-and-conditions'}>
                <li className='transition-all duration-300 hover:text-black'>Terms' And Conditions</li>
              </Link>
              <Link to={'return-policy'}>
                <li className='transition-all duration-300 hover:text-black'>Return Policy</li>
              </Link>
              <Link to={'/delivery-policy'}>
                <li className='transition-all duration-300 hover:text-black'>Delivery Policy</li>
              </Link>
            </ul>
          </div>
          <div className='widget4 w-full md:w-1/2 lg:w-1/4 px-2 mb-4'>
            <h2 className='text-xl font-semibold mb-4 lg:text-2xl'>Contact Us</h2>
            <p className='text-lg font-medium pb-2'>Dhaka, Bangladesh</p>
            <p className='text-lg font-medium pb-2'>+8801610-545222</p>
            <Link to={'mailto:hello.shahinofficial@gmail.com'}>
              <p className='text-lg font-medium pb-2'>hello.shahinofficial@gmail.com</p>
            </Link>
            <div className='flex gap-5 py-6 text-xl md:text-2xl'>
            <Link to={'https://www.facebook.com/mdshahin.mee'} className=''><FaFacebook/></Link>
            <Link to={'https://github.com/MdShahinDev'} className=''><FaGithub/></Link>
            <Link to={'https://instagram.com/mdshahin.me'} className=''><FaInstagram/></Link>
            <Link to={'https://www.linkedin.com/in/mdshahinme/'} className=''><FaLinkedin/></Link>
            <Link to={'https://wa.me/+8801610545222'} className=''><FaWhatsapp/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
