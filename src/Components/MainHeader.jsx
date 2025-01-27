import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import {  IoMdHeartEmpty, IoMdClose } from 'react-icons/io';
import { IoBagOutline, IoHomeOutline } from 'react-icons/io5';
import { MdLogin } from 'react-icons/md';
import {  FaBarsStaggered } from 'react-icons/fa6';
import { CiShop } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { ShopContext } from '../Context/ShopContext';

const MainHeader = () => {
  const [visible, setVisible] = useState(false);
  const [menDropdownOpen, setMenDropdownOpen] = useState(false);
  const [womenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const toggleSidebar = () => {
    setVisible(!visible);
    document.body.style.overflow = visible ? 'auto' : 'hidden';
  };
  let [searchResult, setSearchResult] = useState([]);
  
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchProduct = products.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setSearchResult(searchProduct);
    if (searchTerm === '') {
      setSearchResult([]);
    }
  };
  const toggleMenDropdown = () => setMenDropdownOpen(!menDropdownOpen);
  const toggleWomenDropdown = () => setWomenDropdownOpen(!womenDropdownOpen);
  const wishData = useSelector((state) => state.wishItemManager.wishItems);
  let totalwish = wishData.length;

  const cartData = useSelector((state) => state.cartItemManager.cartItems);
  let totalqty = 0;
  for (let i = 0; i < cartData.length; i++) {
    let item = cartData[i];
    totalqty += item.qty;
  }
  console.log(totalqty);

  return (
    <>
      <div className='border-b-2 hidden lg:block'>
        {/* Desktop Header */}
        <div className='container mx-auto py-4 flex justify-between items-center'>
          <Link to={'/'}>
            <img className='w-96' src={assets.logo} alt='Logo' />
          </Link>
          <div className='w-full relative flex flex-col items-center'>
            <input
              onChange={handleSearch}
              className=' w-3/4 border py-2 px-2 text-base text-gray-600 border-gray-300 rounded-md focus:ring-0 focus:outline-none'
              type='text'
              placeholder='Search Product'
            />

            {searchResult.length > 0 && (
              <div className='result absolute z-50 top-12 px-4 mb-4 w-3/4 bg-white rounded-md shadow-lg max-h-[500px] overflow-y-auto'>
                {searchResult.map((item) => (
                  <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }} onClick={() => setSearchResult([])}>
                    <div key={item.id} className='flex gap-3 mb-2 items-center'>
                      <img className='w-20' src={item.image[0]} alt='' />
                      <div>
                        <h3>{item.name}</h3>
                        <p>
                          {currency}
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <ul className='text-2xl flex gap-8 '>
              <Link to={'/wishlist'}>
                <li className=' relative'>
                  <IoMdHeartEmpty />
                  <span className='absolute -bottom-3 -right-3 text-xs bg-black rounded-full text-white w-5 h-5 flex justify-center items-center'>{totalwish}</span>
                </li>
              </Link>
              <Link to={'/cart'}>
                <li className=' relative'>
                  <IoBagOutline />
                  <span className='absolute -bottom-3 -right-3 text-xs bg-black rounded-full text-white w-5 h-5 flex justify-center items-center'>{totalqty}</span>
                </li>
              </Link>
              <Link to={'/login'}>
                <li>
                  <MdLogin />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className='border-b-2 hidden lg:block z-10'>
        <div className='main-menu py-4 container mx-auto'>
          <ul className='flex gap-4 justify-center text-base font-medium  text-gray-600 uppercase'>
            <NavLink to={'/'}>
              <li className='hover:text-gray-800'>
                <p>Home</p>
              </li>
            </NavLink>
            <NavLink to={'/shop'}>
              <li className='hover:text-gray-800'>
                <p>Shop</p>
              </li>
            </NavLink>
            <NavLink to={'/category/Men'}>
              <li className='hover:text-gray-800 group relative'>
                <p>Men</p>
                <div className='dropdown-menu z-20 hidden group-hover:block absolute left-0 pt-4 transition-all duration-300 ease-in-out transform opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0'>
                  <div className='w-40 py-2 px-5 bg-white shadow-md'>
                    <ul className='flex flex-col gap-4'>
                      <NavLink to={'/category/Men'}>
                        <li className='hover:text-gray-950'>
                          <p>Topwear</p>
                        </li>
                      </NavLink>
                      <NavLink to={'/category/Men'}>
                        <li className='hover:text-gray-950'>
                          <p>Bottomwear</p>
                        </li>
                      </NavLink>
                      <NavLink to={'/category/Men'}>
                        <li className='hover:text-gray-950'>
                          <p>Winterwear</p>
                        </li>
                      </NavLink>
                      <NavLink to={'/category/Men'}>
                        <li className='hover:text-gray-950'>
                          <p>Shoe</p>
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </li>
            </NavLink>
            <NavLink to={'/category/Women'}>
              <li className='hover:text-gray-800 group relative'>
                <p>Women</p>
                <div className='dropdown-menu z-20 hidden group-hover:block absolute left-0 pt-4 transition-all duration-300 ease-in-out transform opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0'>
                  <div className='w-36 py-2 px-5 bg-white'>
                    <ul className='flex flex-col gap-4'>
                      <NavLink to={'/category/Women'}>
                        <li className='hover:text-gray-950'>
                          <p>Topwear</p>
                        </li>
                      </NavLink>
                      <NavLink to={'/category/Women'}>
                        <li className='hover:text-gray-950'>
                          <p>Bottomwear</p>
                        </li>
                      </NavLink>
                      <NavLink to={'/category/Women'}>
                        <li className='hover:text-gray-950'>
                          <p>Winterwear</p>
                        </li>
                      </NavLink>
                      <NavLink to={'/category/Women'}>
                        <li className='hover:text-gray-950'>
                          <p>Shoe</p>
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </li>
            </NavLink>
            <NavLink to={'/category/Kids'}>
              <li className='hover:text-gray-800'>
                <p>Kids</p>
              </li>
            </NavLink>
            <NavLink to={'/contact'}>
              <li className='hover:text-gray-800'>
                <p>Contact Us</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div>
        <div className='mobile-header container mx-auto px-4 py-2 border-b-2  flex justify-between items-center lg:hidden'>
          <Link to={'/'}>
            <img className='w-64' src={assets.logo} alt='Logo' />
          </Link>
          <button onClick={toggleSidebar} className='text-2xl'>
            <FaBarsStaggered />
          </button>
        </div>
        <div className='mobileSearch container relative mx-auto px-4 w-full my-2 py-2 lg:hidden'>
          <input
            onChange={handleSearch}
            className='w-full border py-2 px-2 text-base text-gray-600 border-gray-300 rounded-md focus:ring-0 focus:outline-none'
            type='text'
            placeholder='Search Product'
          />
          {searchResult.length > 0 && (
            <div className='result absolute left-0 z-50 top-14 w-full px-4 mb-4 bg-white rounded-md shadow-lg max-h-[500px] overflow-y-auto'>
              {searchResult.map((item) => (
                <Link to={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`} state={{ id: item.id }} onClick={() => setSearchResult([])} key={item.id}>
                  <div className='flex gap-3 mb-2 items-center'>
                    <img className='w-20' src={item.image[0]} alt='' />
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        {currency}
                        {item.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Menu */}
        <div className={`fixed top-0 left-0 bottom-0 bg-white shadow-lg px-2 z-50 w-3/4 transform transition-transform duration-300 ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='container mx-auto px-4 py-2 border-b-2 flex justify-between items-center'>
            <img className='w-56' src={assets.logo} alt='Logo' />
            <button onClick={toggleSidebar} className='text-2xl font-bold'>
              <IoMdClose />
            </button>
          </div>

          <div className='main-menu py-4 container mx-auto px-6'>
            <ul className='flex flex-col  gap-4 text-base font-medium text-gray-600 uppercase'>
              <NavLink to={'/'} onClick={toggleSidebar}>
                <li className='hover:text-gray-800'>Home</li>
              </NavLink>
              <NavLink to={'/shop'} onClick={toggleSidebar}>
                <li className='hover:text-gray-800'>Shop</li>
              </NavLink>

              {/* Men Dropdown */}
              <li>
                <div className='flex justify-between items-center hover:text-gray-800 cursor-pointer'>
                  <Link to={'/category/Men'}>
                    <p>Men</p>
                  </Link>
                  <span onClick={toggleMenDropdown}>{menDropdownOpen ? '-' : '+'}</span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${menDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                  <ul className='pl-4 my-4 flex flex-col gap-2 text-sm'>
                    <NavLink to={'/category/Men'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Topwear</li>
                    </NavLink>
                    <NavLink to={'/category/Men'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Bottomwear</li>
                    </NavLink>
                    <NavLink to={'/category/Men'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Winterwear</li>
                    </NavLink>
                    <NavLink to={'/category/Men'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Shoe</li>
                    </NavLink>
                  </ul>
                </div>
              </li>

              {/* Women Dropdown */}
              <li>
                <div className='flex justify-between items-center hover:text-gray-800 cursor-pointer' onClick={toggleWomenDropdown}>
                  <Link to={'/category/Women'}>
                    <p>Women</p>
                  </Link>
                  <span>{womenDropdownOpen ? '-' : '+'}</span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${womenDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                  <ul className='pl-4 my-4 flex flex-col gap-2 text-sm'>
                    <NavLink to={'/category/Women'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Topwear</li>
                    </NavLink>
                    <NavLink to={'/category/Women'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Bottomwear</li>
                    </NavLink>
                    <NavLink to={'/category/Women'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Winterwear</li>
                    </NavLink>
                    <NavLink to={'/category/Women'} onClick={toggleSidebar}>
                      <li className='hover:text-gray-800 my-2'>Shoe</li>
                    </NavLink>
                  </ul>
                </div>
              </li>

              <NavLink to={'/contact'} onClick={toggleSidebar}>
                <li className='hover:text-gray-800'>Contact Us</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Fixed Menu */}
      <div className='mobile-bottom fixed w-full bg-white border-t-2 py-3 bottom-0 z-50 lg:hidden'>
        <div className='container mx-auto flex justify-around text-black'>
          <NavLink to={'/'} className='flex flex-col items-center'>
            <IoHomeOutline className='text-xl' />
            <span className='text-sm'>Home</span>
          </NavLink>
          <NavLink to={'/shop'} className='flex flex-col items-center'>
            <CiShop className='text-xl' />
            <span className='text-sm'>Shop</span>
          </NavLink>
          {/* <NavLink to={'/compare'} className='flex flex-col items-center relative'>
            <IoIosGitCompare className='text-xl' />
            <span className='text-sm'>Compare</span>
            <span className='absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>0</span>
          </NavLink> */}
          <NavLink to={'/wishlist'} className='flex flex-col items-center relative'>
            <IoMdHeartEmpty className='text-xl' />
            <span className='text-sm'>Wishlist</span>
            <span className='absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>{totalwish}</span>
          </NavLink>
          <NavLink to={'/cart'} className='flex flex-col items-center relative'>
            <IoBagOutline className='text-xl' />
            <span className='text-sm'>Cart</span>
            <span className='absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>{totalqty}</span>
          </NavLink>
          <NavLink to={'/login'} className='flex flex-col items-center'>
            <MdLogin className='text-xl' />
            <span className='text-sm'>Account</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
