import React, { useContext, useEffect, useState } from 'react';
import { LuSettings2 } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import productimg from '../assets/p_img1.png';
import { IoIosGitCompare, IoMdHeartEmpty, IoIosHeart } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';
import Modal from '../Reusable/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToWish } from '../Components/Slices/wishListSlice';
import { toast } from 'react-toastify';
const ShopPage = () => {
  const [visible, setVisible] = useState(false);
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);

  let [category, setCategory] = useState([]);
  let [subCategory, setSubCategory] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishItemManager.wishItems);
  const wishid = wishlist.map((item) => item.id);

  let [subCategoryItem, setSubCategoryItem] = useState([]);
  useEffect(() => {
    setCategory([...new Set(products.map((item) => item.category))]);
    setSubCategory([...new Set(products.map((item) => item.subCategory))]);
  }, [products]);

  const toggleSidebar = () => {
    setVisible(!visible);
    document.body.style.overflow = visible ? 'auto' : 'hidden';
  };
  const handleSubCategory = (subCategory) => {
    let filteredProduct = products.filter((item) => item.subCategory === subCategory);
    setSubCategoryItem(filteredProduct);
  };
  // pagignation

  let [currentPage, setCurrentPage] = useState(1);

  let [perpage, setPerPage] = useState(20);
  let laststItemIndex = currentPage * perpage;
  let firstItemIndex = laststItemIndex - perpage;
  let currentPageProduct = products.slice(firstItemIndex, laststItemIndex);
  let totalPages = Math.ceil(products.length / perpage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleGoToPage = (item) => {
    setCurrentPage(item);
  };

  const handlePerPage = (e) => {
    setPerPage(e.target.value || 20);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };
  const handleAddToWish = (item) => {
    dispatch(addToWish(item));
    toast.success('Addes To Wishlist');
  };
  return (
    <>
      <div className='shop container mb-8 mx-auto px-4 lg:px-0'>
        <div className='headerSection'>
          <div className='minifilter w-full flex gap-4 justify-between lg:justify-start  mb-6'>
            <div className='page w-full flex justify-between gap-4 items-center '>
              <div className='flex gap-2 items-center'>
                <p>Per Page :</p>
                <input onChange={handlePerPage} className=' border-gray-300 border w-28 p-1 focus:ring-0 focus:outline-none' type='number' />
              </div>
              <button onClick={toggleSidebar} className=' flex items-center gap-1 lg:hidden'>
                Filter
                <LuSettings2 />
              </button>
              {/* Sidebar  */}
              <div className={`fixed top-0 left-0 bottom-0 bg-white shadow-lg px-4 z-50 w-3/4 transform transition-transform duration-300 ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='container mx-auto px-4 py-2 my-2 border-b-2 flex justify-between items-center'>
                  <h2 className='text-xl'>Filters</h2>
                  <button onClick={toggleSidebar} className='text-2xl font-bold'>
                    <IoMdClose />
                  </button>
                </div>
                <h2 className='text-xl mb-2'>Filter By Category</h2>
                <ul className='flex flex-col gap-2 my-4 text-lg'>
                  {subCategory.map((item) => (
                    <li onClick={() => handleSubCategory(item)} className='cursor-pointer'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='sorted hidden lg:block'>
              <select name='' className='ml-2 border p-2 focus:outline-none'>
                <option value=''>Short By Latest</option>
                <option value=''>Price Low to High</option>
                <option value=''>Price High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className='productSection flex gap-3'>
          <div className='sidebar hidden w-1/4 lg:block '>
            <div className='category my-2 border p-4'>
              <h2 className='text-2xl font-semibold mb-3'>Filter By Category</h2>
              <ul>
                {subCategory.map((item) => (
                  <li onClick={() => handleSubCategory(item)} className='text-xl cursor-pointer my-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='product w-full lg:w-3/4'>
            <div className='productSection  flex gap-y-3 flex-wrap'>
              {subCategoryItem.length > 0
                ? subCategoryItem.map((item) => (
                    <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                      <div className='relative text-center group'>
                        <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                          <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={item.image[0]} alt='' />
                        </Link>
                        <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                          {wishid.includes(item.id) ? (
                            <Link to={'/wishlist'}>
                              <IoIosHeart className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                            </Link>
                          ) : (
                            <IoMdHeartEmpty onClick={() => handleAddToWish(item)} className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                          )}
                          <MdOutlineRemoveRedEye onClick={() => handleOpenModal(item.id)} className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                        </div>
                        <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                          <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>{item.name}</h2>
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
                  ))
                : currentPageProduct.map((item) => (
                    <div className='singleProduct w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
                      <div className='relative text-center group'>
                        <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                          <img className='w-full cursor-pointer transition-all duration-300 hover:shadow-lg' src={item.image[0]} alt='' />
                        </Link>
                        <div className='quickPanel absolute flex flex-col gap-4 top-8 left-8 text-lg lg:text-xl opacity-100 lg:opacity-0 lg:-translate-x-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-4'>
                          {wishid.includes(item.id) ? (
                            <Link to={'/wishlist'}>
                              <IoIosHeart className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                            </Link>
                          ) : (
                            <IoMdHeartEmpty onClick={() => handleAddToWish(item)} className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                          )}
                          <MdOutlineRemoveRedEye onClick={() => handleOpenModal(item.id)} className='cursor-pointer transition-all duration-300 hover:text-red-500 text-xl' />
                        </div>
                        <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }}>
                          <h2 className='text-lg font-semibold text-center text-gray-700 hover:text-gray-900 cursor-pointer md:text-xl py-4'>{item.name}</h2>
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

              <div className='pagignation w-full flex justify-center gap-6 my-2 text-lg lg:text-xl'>
                <button onClick={handlePrevPage} className='border px-4'>
                  Prev
                </button>
                <div className='number'>
                  <ul className='flex gap-4'>
                    {pages.map((item) => (
                      <button onClick={() => handleGoToPage(item)} className={`border px-4 py-2 cursor-pointer ${item == currentPage ? 'bg-slate-400' : ''}`}>
                        {item}
                      </button>
                    ))}
                  </ul>
                </div>
                <button onClick={handleNextPage} className='border px-4'>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} productId={selectedProductId} />
    </>
  );
};

export default ShopPage;
