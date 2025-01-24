import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='container mx-auto px-4 text-lg my-4 lg:px-0'>
      contact us at : <Link to={'mailto:hello.shahinofficial@gmail.com'}>hello.shahinofficial@gmail.com</Link>
    </div>
  )
}

export default Contact