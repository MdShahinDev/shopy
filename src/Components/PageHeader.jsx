import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = (props) => {
  return (
    <>
      <div className='pageHeader min-h-64 lg:min-h-96 bg-shopcover bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center mb-10'>
        <h2 className='text-4xl font-semibold md:text-6xl'>{props.pagename}</h2>
        <ul className='flex gap-2 my-4 list-disc list-inside text-gray-800'>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/shop'} className='text-gray-950'><li>{props.pagename2}</li></Link>
        </ul>
      </div>
    </>
  );
};

export default PageHeader;
