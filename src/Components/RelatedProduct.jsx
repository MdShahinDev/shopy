import React, { useContext, useEffect, useState } from 'react';
import SectionHeader from '../Reusable/SectionHeader';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { currency } = useContext(ShopContext);
  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category == item.category);
      productCopy = productCopy.filter((item) => subCategory == item.subCategory);
      setRelatedProduct(productCopy.slice(0, 5));
    }
  },[products]);
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <SectionHeader bgtext='Products' title='Related' description='Related Product Based On your Category Interest' />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {relatedProduct.map((item, index) => (
          <div key={index} className='product'>
            <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
              <img className='mb-4' src={item.image[0]} alt='' />
            </Link>
            <h2>{item.name}</h2>
            <p>
              {currency}
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
