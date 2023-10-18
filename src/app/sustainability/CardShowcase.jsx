import React from 'react'

const CardShowcase = ({title, brief, desc}) => {
  return (
    <div>
      <div className='flex flex-col gap-3 py-[30px] max-w-[450px]'>

        {/* title */}
        <div className='py-[10px]'>
          <h1 className='text-2xl font-medium lg:text-3xl'>
            {title}
          </h1>
        </div>

        {/* brief explanation */}
        <div className='md:h-[70px]'>
          <p className='text-base italic font-extrabold'>
            {brief}
          </p>
        </div>

        {/* description */}
        <div>
          <p className='text-sm font-normal leading-7'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardShowcase