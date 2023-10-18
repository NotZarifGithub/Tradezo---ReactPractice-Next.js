import Image from "next/image"
import Link from "next/link"

const BlogMain = () => {
  return (
    <section>
      <div className="flex flex-col gap-8 px-[20px] py-[50px] border-y lg:flex-row lg:gap-0">

        {/* image */}
        <div className="lg:w-2/3">
          <div className="w-full">
            <Image src={'/tools4.jpg'} className="" width={1000} height={1000}/>
          </div>
        </div>

        {/* title and button */}
        <div className="flex flex-col gap-3 lg:w-1/3">

          {/* title */}
          <div>
            <h1 className="text-2xl font-extrabold lg:text-5xl">
              The Art of Selecting the Right Tool: A Comprehensive Guide
            </h1>
          </div>

          {/* button */}
          <div>
            <Link href={''}>
              <div className="flex flex-row items-center py-[10px]">
                <div className="text-sm font-bold border-b border-black lg:text-lg">
                  Read more
                </div>
                <div className="relative w-[20px] h-[20px]">
                  <Image src={'/arrowright.svg'} className="object-contain" fill/>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogMain