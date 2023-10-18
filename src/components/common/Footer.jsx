import Image from "next/image"
import Link from "next/link"
      
const footerData = [
  {
    title: 'shop',
    links: [
      "all products",
      "home tool",
      "personal tool",
      "bundles",
    ],
  },
  {
    title: 'about',
    links: [
      "items",
      "sustainability",
      "about us",
      "FAQ",
    ],
  },
  {
    title: 'more',
    links: [
      "wholesale",
      "store locator"
    ],
  },
]

const Footer = () => {
  return (
    <footer className="bg-[#f0dca4] ">
      <div className="p-[20px]">

        {/* inbox & socials */}
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-20 lg:gap-[450px] text-center py-[40px] border-b border-black'>

          {/* inbox */}
          <div className="max-w-[300px] gap-2 flex flex-col">
            <h1 className='text-xl font-extrabold'>
              Give your inbox a <span className="text-2xl italic font-medium"> refresh</span>.
            </h1>
            <p className='text-lg font-semibold'>
              10% off of your first order when you sign up for our emails.
            </p>
          </div>

          {/* socials */}
          <div className="flex flex-row gap-6 ">
            <Link href={'/'}>
              <div className="relative w-[25px] h-[25px]">
                <Image src={'/instagram.svg'} className="object-contain" fill/>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="relative w-[25px] h-[25px]">
                <Image src={'/tiktok.svg'} className="object-contain" fill/>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="relative w-[25px] h-[25px]">
                <Image src={'/twitter.svg'} className="object-contain" fill/>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="relative w-[25px] h-[25px]">
                <Image src={'/facebook1.svg'} className="object-contain" fill/>
              </div>
            </Link>
          </div>
        </div>

        {/* main footer */}
        <div className="py-[40px] px-[20px] border-b border-black">

          <div className="">
            {/* links */}
            <div className="grid grid-cols-2 md:flex gap-6 md:gap-24 max-w-[400px] mx-auto">
              {footerData.map((item, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <h1 className="text-sm font-bold uppercase">
                    {item.title}
                  </h1>
                  <div className="flex flex-col gap-2">
                    {item.links.map((link, index) => (
                      <Link href={'/'} key={index} className="text-sm font-normal capitalize hover:border-b hover:border-black w-[90px] transition duration-700 ease-out">
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* copyrights */}
        <div className="flex flex-col mx-auto text-sm gap-4 max-w-[400px] justify-center items-center py-[30px] lg:flex-row lg:justify-between lg:max-w-[900px]">

          {/* copyrights */}
          <div>
            <p>
              &copy; 2023 Tradezo. All Rights Reserved
            </p>            
          </div>

          {/* links */}
          <div className="flex flex-row gap-2">
            <Link href={'/'}>
              Privacy policy
            </Link>
            <Link href={'/'}>
              Terms of service
            </Link>
            <Link href={'/'}>
              Shipping policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer