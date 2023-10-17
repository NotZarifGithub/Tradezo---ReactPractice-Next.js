import React from 'react'
import Hometools from './hometools'

const ProductSection = () => {
  return (
    <section>

      {/* a sections with the all the products for the main shop page */}
      <div className='flex flex-col gap-11'>
        <Hometools />
        <Hometools />
        <Hometools />
      </div>
    </section>
  )
}

export default ProductSection