import React from 'react'
import { Link } from 'react-router-dom';
const Copyright = () => {
  return (
    <>
        <div className="mb-16 text-center border-t py-4 px-4 lg:mb-4 ">
            <div className="text ">
                <p>©Allrights Reserved By Md Shahin | Design & Developed By <Link to={'https://github.com/mdshahindev'} className='font-semibold'>Md Shahin</Link></p>
            </div>
        </div>
    </>
  )
}

export default Copyright