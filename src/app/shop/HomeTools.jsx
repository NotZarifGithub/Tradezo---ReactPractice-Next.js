import ProductItem from '@/components/ui/ProductItem'
import React from 'react'

const Hometools = () => {
  return (
    <section>
      <div className='p-[10px]'>

        {/* title */}
        <div className='text-2xl italic font-medium lg:text-3xl py-[30px]'>
					<h1 className=''>
						Home Tools
					</h1>
        </div>

        {/* product list */}
        <div className='flex flex-col gap-10 md:grid-cols-2 md:grid lg:grid-cols-3'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  )
}

export default Hometools