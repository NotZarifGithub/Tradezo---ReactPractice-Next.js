import Image from "next/image"
import Button from "./Button"

const CardProduct = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-[10px] gap-1">

        {/* image */}
        <div className="relative w-[180px] h-[250px]">
          <Image src={'/tools2.jpg'} className="object-cover rounded-lg" fill/>
        </div>

        {/* details */}
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-sm font-semibold capitalize">
            tools tools 
          </h1>
          <p className="text-[11px] semibold text-">
            From $8 / Month
          </p>
        </div>

        {/* button */}
        <div className="w-[180px]">
          <button className='text-black bg-white rounded-full px-[30px] py-[8px] border-black border-2 hover:bg-black hover:text-white w-full'>
            <p className={`font-semibold capitalize text-[11px]`}>
              Shop Now
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct