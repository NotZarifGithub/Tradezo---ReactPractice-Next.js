import React from 'react'

const CardShowcase = ({title, brief, desc}) => {
  return (
    <div>
      <div className='flex flex-col gap-3 py-[20px]'>

        {/* title */}
        <div className='py-[10px]'>
          <h1 className='text-2xl font-medium'>
            {title}
          </h1>
        </div>

        {/* brief explanation */}
        <div>
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