import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";

const EmailSubscription = () => {
  return (
    <>
      <div className="emailsubscription my-8 min-h-64 lg:min-h-96 bg-emailsubscription bg-cover bg-no-repeat bg-fixed flex items-center justify-center">
        <div className="promotext text-center">
            <h2 className='text-base font-semibold text-white md:text-xl lg:text-4xl'>Get Latest Update and Discount offer Mail In your Inbox</h2>
            <div className="form my-4 flex items-center">
            <input className='w-full py-2 px-4 bg-white border-none  focus:ring-0 focus:outline-none' type="text" placeholder='youremail@gmail.com' />
            <button className=' uppercase text-base border-black py-2 px-4 bg-black text-white font-semibold'> Subscribe </button>
            </div>
        </div>

      </div>
    </>
  );
};

export default EmailSubscription;
