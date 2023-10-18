import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <section>
      <div className='py-[120px] px-[40px] flex flex-row gap-5 md:px-0 lg:px-[40px]'>

        {/* main section */}
        <div className='flex flex-col justify-center md:w-1/2'>
          <div className='flex flex-col justify-start gap-8 lg:py-[100px] px-[5px]'>
            <h1 className='text-3xl font-medium capitalize'>
              Our Impact Report: Building a Better Future
            </h1>
            <p className='text-sm leading-7'>
              At Tradezo, we're more than just a manufacturer of high-quality tools; we're on a mission to empower people 
              with the right tools while minimizing our environmental footprint. We believe that the tools you use have the 
              power to transform the way you work, create, and live.Our commitment to transparency and sustainability is not 
              just a part of our business model; it's at the very core of our values.
            </p>

            {/* button */}
            <div>
              <div>
                <Link href={'/'}>
                  <button className="text-sm font-semibold text-white capitalize rounded-md bg-black/80 py-[15px] w-full md:w-[250px] hover:bg-black/70">
                    read the full report here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* image for large screen */}
        <div className="hidden w-1/2 md:flex">
          <Image src={'/society.jpg'} className="object-cover" width={2000} height={1000}/>
        </div>
      </div>
    </section>
  )
}

export default Hero