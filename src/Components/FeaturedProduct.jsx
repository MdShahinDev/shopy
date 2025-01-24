import React, { useContext, useEffect, useState } from 'react';
import { IoIosGitCompare, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Slider from 'react-slick';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import Modal from '../Reusable/Modal';

const FeaturedProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    setFeaturedProduct(products.slice(8, 16));
  }, []);
  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };
  return (
    <>
      <div className='slider my-8 overflow-hidden'>
        <div className='container mx-auto px-4 lg:px-0'>
          <Slider {...settings}>
            {featuredProduct.map((item, index) => (
              <div className='singleProduct sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                <div className='relative text-center group'>
                  <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                    <img className='w-full transition-all duration-300 hover:shadow-lg' src={item.image[0]} alt='' />
                  </Link>
                  <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                    {/* <IoIosGitCompare className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' /> */}
                    <IoMdHeartEmpty className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                    <MdOutlineRemoveRedEye className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' onClick={() => handleOpenModal(item.id)}/>
                  </div>
                  <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                    <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 md:text-xl py-4'>{item.name}</h2>
                  </Link>
                  <div className='price flex justify-center gap-4'>
                    <h2 className='text-lg font-semibold text-center'>
                      {currency}
                      {item.price}
                    </h2>
                    <h2 className='text-lg font-semibold text-center text-red-500 line-through'>$15.99</h2>
                  </div>
                  <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                    <button className=' my-2 border px-4 py-2 bg-black text-white text-sm lg:text-base active:bg-gray-700'>Select Option</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} productId={selectedProductId} />
    </>
  );
};

export default FeaturedProduct;
