import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub  } from "react-icons/fa6";
const RegisterForm = () => {
  return (
    <>
        <div className='registerForm container mx-auto flex flex-col items-center lg:flex-row gap-4 my-8 px-4 lg:px-0'>
          <div className='info border shadow-md rounded-md mx-auto p-6 w-full  lg:w-1/2'>
            <div className='flex flex-col gap-2 mb-4'>
                <label className='text-left lg:text-lg'>Your Name</label>
              <input type='text' placeholder='Mr. John' className='border rounded-md px-2 p-2 focus:ring-0 focus:outline-none' />
            </div>
            <div className='flex flex-col gap-2 mb-4'>
                <label className='text-left lg:text-lg'>Your Email</label>
              <input type='text' placeholder='youremail@gmail.com' className='border rounded-md px-2 p-2 focus:ring-0 focus:outline-none' />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-left lg:text-lg'>Password</label>
              <input type='password' placeholder='Password' className='border rounded-md px-2 p-2 focus:ring-0 focus:outline-none' />
            </div>

            <button className='my-4 bg-black text-white w-full py-3 active:bg-gray-700 hover:text-gray-200 rounded-md'>Register</button>
          
          <p className='text-base'>Already Have an account? <Link to={'/login'} ><span className='font-medium hover:text-gray-500'>Login Here</span></Link></p>
          
          </div>
          <div className="hle border shadow-md rounded-md mx-auto py-8 px-6 w-full  lg:w-1/3">
         <h2 className='my-4 text-center lg:text-xl'>Login with Another Medium</h2>
          <div className="goggle-login mb-8">
              <button className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'><FcGoogle/>Signup With Google</button>
          </div>
          <div className="github-login  mb-8">
              <button className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'><FaGithub/>Signup With Facebook</button>
          </div>
          <div className="facebook-login mb-8">
              <button className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'><FaFacebook/>Signup With Facebook</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default RegisterForm