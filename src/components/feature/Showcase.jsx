import React from 'react'
import CardProduct from '../ui/CardProduct'

const Showcase = () => {
  return (
    <section>
      <div className='flex items-center justify-start gap-4 space-x-4 overflow-x-auto lg:justify-center p-[20px]'>
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
      </div>
    </section>
  )
}

export default Showcase