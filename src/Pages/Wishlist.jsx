import React from 'react'
import PageHeader from '../Components/PageHeader'
import WishlistDetails from '../Components/WishlistDetails'

const Wishlist = () => {
  return (
    <>
     <PageHeader pagename='My Wishlist' pagename2='My Wishlist'/> 
     <WishlistDetails/>
    </>
  )
}

export default Wishlist