"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const CardProductHero = ( {title, desc, left} ) => {

	const [isButtonClicked, setIsButtonClicked] = useState(false)

	const toggleIsButtonClicked = () => {
		setIsButtonClicked(!isButtonClicked)
	}
	
  return (
    <div className="">

			{/* button */}
      <button className='bg-black rounded-full w-[30px] h-[30px] flex justify-center items-center' onClick={toggleIsButtonClicked}>
				<div className="relative w-[25px] h-[25px]">
					<Image src={"/plus.svg"} className="object-contain" fill/>
				</div>
      </button>
				
			{/* button dropdown */}
			<div className={`w-[260px] h-[150px] bg-white rounded-xl border-black border flex flex-1 absolute top-[25px] ${isButtonClicked ? "flex" : "hidden"} ${left ? "right-[25px]" : "left-[25px]"} `}>
				<div className="w-2/3 py-[20px] px-[20px] flex gap-1 flex-col">
					<h1 className="text-lg capitalize">
						{title}
					</h1>
					<p className="text-[10px]">
						{desc}
					</p>
					<div className="">
						<Link href={'/'} className=" text-[10px] border-b border-black">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="relative w-1/3 h-full">
					<Image src={'/tools.jpg'} className="object-cover rounded-r-xl" fill/>
				</div>
			</div>

    </div>
  )
}

export default CardProductHero