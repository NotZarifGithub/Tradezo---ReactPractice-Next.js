import Link from 'next/link'
import React from 'react'

const Button = ({text, path}) => {
  return (
    <button className='text-white bg-black rounded-full px-[30px] py-[5px] border-black border-2 hover:bg-white hover:text-black'>
      <Link href={`${path}`}> 
        <p className={`font-semibold capitalize`}>
          {text}
        </p>
      </Link>
    </button>
  )
}

export default Button