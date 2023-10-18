import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className='pb-[80px] pt-[140px] flex flex-col gap-4 justify-center px-[20px]'>

        {/* title */}
        <h1 className='text-4xl font-semibold capitalize md:text-6xl '>
          The Good Tools
        </h1>

        {/* desc */}
        <p className='text-xl font-normal leading-8 md:text-2xl'>
          A blog about the tools, our planet and daily changes that add up
        </p>
      </div>
    </section>
  )
}

export default Hero