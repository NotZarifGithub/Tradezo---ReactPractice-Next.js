import React from 'react'

const Button = ({text}) => {
  return (
    <button className='text-white bg-black rounded-full px-[30px] py-[5px] border-black border-4 hover:bg-white hover:text-black'>
      <p className={`font-semibold capitalize`}>
        {text}
      </p>
    </button>
  )
}

export default Button