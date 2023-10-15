import React from 'react'
import BundlesCard from '../ui/BundlesCard'

const Bundles = () => {
  return (
    <section className='pb-[100px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1100px] mx-auto'>
				<BundlesCard />
				<BundlesCard />
			</div>
    </section>
  )
}

export default Bundles