import React, { useContext, useEffect, useState } from 'react';
import productimg from '../assets/p_img1.png';
import { assets } from '../assets/assets';
import RelatedProduct from '../Components/RelatedProduct';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Components/Slices/cartSlice';
import { addToWish } from '../Components/Slices/wishListSlice';

const Product = () => {
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const location = useLocation();
  const { id } = location.state || {};
  const singleProduct = products.find((item) => item.id === id);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');
  const wishlist = useSelector((state)=>state.wishItemManager.wishItems);
  const isProductInWishlist = wishlist.some((product) => product.id === id);
  
  useEffect(() => {
    if (singleProduct) {
      setImage(singleProduct.image[0]);
    }
  }, [id, products]);

  const dispatch = useDispatch();

  const handleAddToCart = (item)=>{
   
    dispatch(addToCart({...item, qty: 1, selectedSize: size}))

  }
  const handleAddToWish =(item)=>{    
    dispatch(addToWish(item))
  }
  
  return (
    <>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/* Product Data */}
          <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* Product img */}

            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {singleProduct.image.map((item, index) => (
                  <img onClick={()=>setImage(item)} key={index} src={item} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                ))}
              </div>
              <div className='w-full sm:w-[80%]'>
                <img src={image} className='w-full h-auto' alt='' />
              </div>
            </div>
            {/* Product Details */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{singleProduct.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_dull_icon} alt='' className='w-3 5' />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>
                {currency} {singleProduct.price}
              </p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{singleProduct.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {singleProduct.sizes.map((item, index) => (
                    <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-black': ''}`}>{item}</button>
                  ))}
                </div>
              </div>
              <div className='button flex gap-4'>
              <button onClick={()=>handleAddToCart(singleProduct)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              {
                isProductInWishlist ? <Link to={'/wishlist'}> <button className=' text-black px-8 py-3 border text-sm'>ALREADY IN WISHLIST GO TO WISHLIST</button></Link> :<button onClick={()=>handleAddToWish(singleProduct)} className=' text-black px-8 py-3 border text-sm'>ADD TO WISHLIST</button>
              }
              
              

              </div>
              
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>SKU: TH45HD</p>
                <p>
                  Category: {singleProduct.category}, {singleProduct.subCategory}
                </p>
                <p className='mt-6'>100% Original Product</p>
                <p className=''>Cash on delivery is available</p>
                <p className=''>Easy Reaturn and exchange policy within 7 days</p>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className='mt-20'>
            <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptatum a quibusdam, quam obcaecati vero est molestiae fugiat illo quaerat voluptatibus consequuntur recusandae
                alias optio porro illum quidem repudiandae neque autem ea cum iusto magnam blanditiis veniam? Rerum, dolor quisquam.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur voluptatum a quibusdam, quam obcaecati vero est molestiae fugiat illo quaerat voluptatibus consequuntur recusandae alias optio porro illum quidem repudiandae neque autem ea
                cum iusto magnam blanditiis veniam? Rerum, dolor quisquam.
              </p>
            </div>
          </div>
          {/* Related Product */}
          {/* <RelatedProduct category={singleProduct.category} subCategory= {singleProduct.subCategory} /> */}
        </div>
      </div>
    </>
  );
};

export default Product;
