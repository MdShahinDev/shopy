import React from 'react'

const SectionHeader = (props) => {
  return (
    <div className='my-2 py-6'>
        <div className="container mx-auto relative text-center my-4">
            <h2 className='text-4xl font-extrabold text-gray-200 lg:text-7xl'>PRODUCTS</h2>
            <div className='title absolute top-[1rem] lg:top-8 left-1/2 transform -translate-x-1/2 w-full'>
                <h2 className='text-xl font-medium lg:text-4xl'>{props.title} </h2>
                <p className='text-base font-normal lg:text-2xl '>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default SectionHeader