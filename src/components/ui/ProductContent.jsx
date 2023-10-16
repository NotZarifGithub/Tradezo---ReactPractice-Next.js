import Image from 'next/image'
import ProductItem from './ProductItem'

const ProductContent = () => {
  return (
    <div>
      <div className='pb-[50px]'>

				{/* product title */}
				<div className='flex flex-col items-center justify-center gap-2 text-center'>
					<h1 className='text-xl italic font-medium capitalize lg:text-3xl'>
						home tools 
					</h1>
					<p className='text-sm lg:text-lg'>
						Shop our best-selling home tools products
					</p>
				</div>

				{/* product list */}
				<div className='grid grid-cols-2 gap-2 p-[20px] lg:flex max-w-[1100px] mx-auto py-[50px]'>
					<div className='hidden lg:flex'>
						<div className='relative w-[350px] h-[350px]'>
							<Image src={'/tools3.jpg'} className='object-cover rounded-lg' fill/>
						</div>
					</div>
					<div>
						<ProductItem />
					</div>
					<div>
						<ProductItem />
					</div>
					<div>
						<ProductItem />
					</div>
					<div className='lg:hidden'>
						<ProductItem />
					</div>
				</div>
			</div>
    </div>
  )
}

export default ProductContent