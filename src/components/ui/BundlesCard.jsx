import React from 'react'
import Button from './Button'

const BundlesCard = () => {
  return (
    <div className='my-[10px] mx-[30px]'>

      {/* background image */}
      <div className="bg-[url('/tools2.jpg')] h-[50vh] bg-cover lg:h-[70vh]">

        {/* main content */}
				<div className='flex flex-col items-center justify-end h-full gap-4 text-center py-[20px]'>
          <div className='text-lg font-light text-white'>
            <h1>
              Lorem ipsum dolor.
            </h1>
          </div>
          <div className='text-sm'>
            <Button text={"Shop the Daily Tools Set"}/>
          </div>
        </div>
			</div>
    </div>
  )
}

export default BundlesCard