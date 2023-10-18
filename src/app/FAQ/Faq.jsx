import React from 'react'
import FaqStructure from './FaqStructure'



const Faq = () => {
  return (
    <section>
      <div className='p-[30px] lg:max-w-[900px] mx-auto'>
        <div className='md:text-center'>
          <h1 className='text-4xl font-normal py-[20px]'>
            OurProducts
          </h1>
        </div>
        <FaqStructure />
      </div>
    </section>
  )
}

export default Faq