import Image from "next/image"

const ShowcaseCard = ({date, title, desc}) => {
  return (
    <div>

      {/* showcase */}
      <div className="flex flex-row gap-5 p-[40px]">

        {/* content */}
        <div className="flex flex-col justify-center w-1/2 gap-4 ">

          {/* date */}
          <div>
            <div className="inline-block bg-black rounded-full py-[5px] px-[15px]">
              <p className="text-sm font-semibold text-white uppercase ">
                {date}
              </p>
            </div>
          </div> 
          
          {/* title */}
          <div>
            <h1 className="text-3xl font-medium lg:text-5xl">
              {title}
            </h1>
          </div>
          
          {/* description */}
          <div>
            <p className="lg:text-lg">
              {desc}
            </p>
          </div>
        </div>

        {/* image */}
        <div className="flex items-center justify-center w-1/2 lg:px-[40px]">
          <div className="w-full">
            <Image src={'/tools.jpg'} className=" rounded-xl" width={500} height={500}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseCard