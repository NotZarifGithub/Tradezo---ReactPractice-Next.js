import Image from "next/image"
import Link from "next/link"

const BlogCard = ({title}) => {
  return (
    <section>
      <Link href={'/'} className="flex flex-col gap-8 px-[20px] py-[50px] md:py-[20px] lg:py-[30px]">

        {/* image */}
        <div className="">
          <div className="w-full">
            <Image src={'/tools4.jpg'} className="" width={1000} height={1000}/>
          </div>
        </div>

        {/* title*/}
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-2xl font-extrabold md:text-xl md:font-bold lg:font-medium lg:text-xl">
              {title}
            </h1>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default BlogCard