import React, { useContext, useEffect, useState } from 'react';
import productimg from '../assets/p_img1.png';
import { assets } from '../assets/assets';
import RelatedProduct from '../Components/RelatedProduct';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
const Product = () => {
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const location = useLocation();
  const { id } = location.state || {};
  const [singleProduct, setSingleProduct] = useState(null);
  const [image, setImage] = useState('');
  
  useEffect(() => {
    const product = products.find((item) => item.id === id);
    if (product) {
      setSingleProduct(product);
      setImage(product.image[0]);
    }
  }, [id, products]);
  
  console.log(singleProduct);
  return (
    <>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/* Product Data */}
          <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* Product img */}

            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
               
                    <img src={productimg}  alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                    <img src={productimg}  alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                    <img src={productimg}  alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                  
                
                
                
              </div>
              <div className='w-full sm:w-[80%]'>
                <img src={productimg} className='w-full h-auto' alt='' />
              </div>
            </div>
            {/* Product Details */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>Ladies Three Piece</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_icon} alt='' className='w-3 5' />
                <img src={assets.star_dull_icon} alt='' className='w-3 5' />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>$ 12.99</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa qui obcaecati, ea rem, illum minus distinctio id ratione at repellendus voluptatum saepe iure necessitatibus voluptas et
                repudiandae, sed sint magnam!
              </p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  <button className={`border py-2 px-4 bg-gray-100`}>L</button>
                  <button className={`border py-2 px-4 bg-gray-100`}>L</button>
                  <button className={`border py-2 px-4 bg-gray-100`}>L</button>
                </div>
              </div>
              <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>SKU: TH45HD</p>
                <p>Category: Men, Topwear</p>
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
          <RelatedProduct />
        </div>
      </div>
    </>
  );
};

export default Product;
