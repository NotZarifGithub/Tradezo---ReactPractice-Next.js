import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[#f0dca4] '>
      <div className='py-[100px] md:py-[200px] lg:pt-[300px] flex flex-col justify-center items-center gap-8 lg:gap-11'>

        {/* about us */}
        <div>
          <div className='border-b-2 border-blue-500 py-[2px]'>
            <p className='text-xs font-semibold uppercase'>
              about us
            </p>
          </div>
        </div>

        {/* title */}
        <div className='md:max-w-[700px]'>
          <div className='text-center'>
            <h1 className='text-6xl font-medium leading-[70px]'>
              From the workshop to Industry Leadership.
            </h1>
          </div>
        </div>

        {/* description */}
        <div className='max-w-[250px] md:max-w-[450px] lg:max-w-[1000px]'>
          <p className='text-base lg:text-xl'>
          As a seasoned craftsman, I've spent my life immersed in the world of tools and craftsmanship. When I looked at the vast amount of low-quality tools flooding the market and the impact on both skilled tradespeople and the environment, I knew a change was needed.
          <br />
          <br />
          In the search for high-quality tools, I discovered a sea of subpar products and a lack of environmentally responsible options. That's when I decided to take matters into my own hands. I embarked on a journey to create tools that not only met the highest standards of quality but were also eco-friendly.
          <br />
          <br />
          I delved into the world of sustainable materials and innovative designs, ensuring that every tool produced was a testament to craftsmanship and responsible manufacturing.
          <br />
          <br />
          Our company, [Tool Company Name], was founded on the belief that everyone deserves access to tools that empower them without compromising on quality or the environment. Our workbench matters, and the conscious choices we make collectively can lead to a significant impact.
          <br />
          <br />
          [Your Name]
          <br />
          CEO & Founder
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero