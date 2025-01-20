import React from 'react'
import PageHeader from '../Components/PageHeader'
import CartDetails from '../Components/CartDetails'

const Cart = () => {
  return (
    <>
     <PageHeader pagename='My Cart' pagename2='My Cart' />
     <CartDetails/>
    </>
  )
}

export default Cart