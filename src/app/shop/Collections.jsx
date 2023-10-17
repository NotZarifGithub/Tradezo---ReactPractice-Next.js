import Button from '@/components/ui/Button'
import React from 'react'

const Collections = () => {
  return (
    <section>

      {/* collections button */}
      <div className='flex gap-5 overflow-x-auto text-sm py-[20px] leading-3'>
        <Button text={"all products"}/>
        <Button text={"home tools"}/>
        <Button text={"personal tools"}/>
        <Button text={"bundles"}/>
        <Button text={"community favourites"}/>
      </div>
    </section>
  )
}

export default Collections