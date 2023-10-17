import Button from '@/components/ui/Button'
import React from 'react'

const Collections = () => {
  return (
    <section>

      {/* collections button */}
      <div className='flex gap-5 overflow-x-auto lg:text-base text-sm py-[20px] leading-3 px-[20px] md:px-[70px] lg:px-0 lg:flex-col lg:w-[250px]'>
        <div>
          <h1 className='text-2xl italic font-medium py-[30px] hidden lg:flex'>
            Collections
          </h1>
        </div>
        <Button text={"all products"} path={"/shop"}/>
        <Button text={"home tools"} path={"/shop/home-tools"}/>
        <Button text={"personal tools"} path={"/shop/personal-tools"}/>
        <Button text={"bundles"} path={"/shop/bundles"}/>
        <Button text={"community favourites"} path={"/shop/community-favourites"}/>
      </div>
    </section>
  )
}

export default Collections