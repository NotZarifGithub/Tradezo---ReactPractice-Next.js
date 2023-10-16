import Image from 'next/image';

const ProductItem = () => {
  return (
    <div className="flex flex-col gap-3">

      {/* image */}
      <div className="relative w-full">
        <Image 
          src={'/tools3.jpg'} 
          width={450} 
          height={600} 
          objectFit="contain" 
          alt="Product Image" 
          className='border-2 border-white outline-double outline-3 outline-offset-2 drop-shadow-xl'
        />
      </div>
      
      {/* product info */}
      <div className='flex flex-col justify-start gap-3 max-w-[450px]'>
        <div className='flex flex-row justify-between'>
          
          {/* description */}
          <div className='font-semibold leading-5 capitalize text-md'>
            <p>
              hammer
            </p>
            <p className='italic font-medium text-black/70'>
              hammer
            </p>
          </div>

          {/* price */}
          <div className='font-semibold'>
            $20
          </div>
        </div>  

        {/* ratings and reviews */}
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row'>
            <div className='relative w-[20px] h-[20px]'>
              <Image src={'stars.svg'} className='' fill/>
            </div>
            <div className='relative w-[20px] h-[20px]'>
              <Image src={'stars.svg'} className='' fill/>
            </div>
            <div className='relative w-[20px] h-[20px]'>
              <Image src={'stars.svg'} className='' fill/>
            </div>
            <div className='relative w-[20px] h-[20px]'>
              <Image src={'stars.svg'} className='' fill/>
            </div>
            <div className='relative w-[20px] h-[20px]'>
              <Image src={'stars.svg'} className='' fill/>
            </div>
          </div>
          <div>
            <p className='text-sm tracking-tighter text-black/70'>
              12,223 Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
