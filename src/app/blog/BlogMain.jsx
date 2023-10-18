import Image from "next/image"
import Link from "next/link"

const BlogMain = () => {
  return (
    <section>
      <div className="flex flex-col gap-8 px-[20px] py-[20px]">

        {/* image */}
        <div>
          <div className="w-full">
            <Image src={'/tools4.jpg'} className="" width={1000} height={1000}/>
          </div>
        </div>

        {/* title and button */}
        <div className="flex flex-col gap-3">

          {/* title */}
          <div>
            <h1 className="text-2xl font-extrabold">
              The Art of Selecting the Right Tool: A Comprehensive Guide
            </h1>
          </div>

          {/* button */}
          <div>
            <Link href={''}>
              <div className="flex flex-row items-center py-[10px]">
                <div className="text-sm font-bold border-b border-black">
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