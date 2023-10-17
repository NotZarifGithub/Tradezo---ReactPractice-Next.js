import React from 'react'
import Hometools from './hometools'

const ProductSection = () => {
  return (
    <section>
      <div className='flex flex-col gap-11'>
        <Hometools />
        <Hometools />
        <Hometools />
      </div>
    </section>
  )
}

export default ProductSection