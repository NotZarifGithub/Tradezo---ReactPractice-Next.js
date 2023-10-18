"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Navbar = () => {

  const [isOpenHamburger, setIsOpenHamburger] = useState(false)
  const [showLinkShop, setShowLinkShop] = useState(false)
  const [showLinkAbout, setShowLinkAbout] = useState(false)
  const [isLinkAboutMain, setIsLinkAboutMain] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLinkShop = () => {
    setShowLinkShop(!showLinkShop)
  }

  const toggleLinkAbout = () => {
    setShowLinkAbout(!showLinkAbout)
  }

  const toggleLinkAboutMain = () => {
    setIsLinkAboutMain(!isLinkAboutMain)
  }

  return (
    <header>
      <div className={`flex flex-row justify-between p-[10px] fixed w-full z-20 transition duration-500 ease-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-[#e4c26e]'}`}>
        
        {/* hamburger */}
        <button className='relative w-[30px] h-[50px] flex lg:hidden ml-[10px]'>
          {!isOpenHamburger ? (
            <Image 
              src={"/hamburger-open.svg"} 
              className='' 
              onClick={() => setIsOpenHamburger(true)}
              fill
            />
          ) : (
            <Image 
              src={"/hamburger-close.svg"} 
              className='' 
              onClick={() => setIsOpenHamburger(false)}
              fill
            />
          )}
        </button>  

        {/* hamburger dropdown */}
        {isOpenHamburger && (
          <div className='absolute top-[70px] left-0 gap-4 flex flex-col w-full px-[20px] py-[20px] bg-white h-[calc(100vh-70px)]'>

            {/* shop link */}
            <div className='py-[10px] border-b border-black flex flex-col px-[10px] cursor-pointer'>
              <div className='flex flex-row items-center justify-between ' onClick={toggleLinkShop}>
                <h1 className='text-2xl font-bold capitalize'>
                  shop
                </h1>
                <div className='relative w-[20px] h-[20px]'>
                  <Image src={showLinkShop ? "arrow-up.svg" : "arrow-down.svg"} className='' fill/>
                </div>
              </div>
              <div className={`flex flex-col gap-3 text-xl font-semibold capitalizize py-[20px] pl-[10px] ${showLinkShop ? "" : "hidden"}`} onClick={() => setIsOpenHamburger(false)}>
                <Link href={"/shop"} >
                  <p>Shop All</p>
                </Link>           
                <Link href={"/shop/bundles"}>
                  <p>Bundles</p>
                </Link>
                <Link href={"/shop/home-tools"}>
                  <p>Home Tools</p>
                </Link>
                <Link href={"/shop/personal-tools"}>
                  <p>Personal-Tools</p>
                </Link>
              </div>
            </div>

            {/* about us link */}
            <div className='py-[10px] border-b border-black flex flex-col px-[10px] cursor-pointer'>
              <div className='flex flex-row items-center justify-between ' onClick={toggleLinkAbout}>
                <h1 className='text-2xl font-bold capitalize'>
                  About Us
                </h1>
                <div className='relative w-[20px] h-[20px]'>
                  <Image src={showLinkAbout ? "arrow-up.svg" : "arrow-down.svg"} className='' fill/>
                </div>
              </div>
              <div className={`flex flex-col gap-3 text-xl font-semibold capitalizize py-[20px] pl-[10px] ${showLinkAbout ? "" : "hidden"}`} onClick={() => setIsOpenHamburger(false)}>
                <Link href={"/about"} >
                  <p>About us</p>
                </Link>           
                <Link href={"/FAQ"}>
                  <p>FAQ</p>
                </Link>
                <Link href={"/sustainability"}>
                  <p>Sustainability</p>
                </Link>
                <Link href={"/blog"}>
                  <p>Blog</p>
                </Link>
              </div>
            </div>

            {/* sign in link */}
            <Link href={"/"}>
              <div className='py-[10px] flex items-center justify-between px-[10px]' onClick={() => setIsOpenHamburger(false)}>
                <h1 className='text-lg font-bold uppercase'>
                  sign in
                </h1>
              </div>
            </Link>
          </div> 
        )}

        
        {/* navlink */}
        <div className='flex-row items-center hidden gap-6 text-sm font-semibold lg:flex px-[30px] z-0'>

          {/* shop */}
          <Link href={"/shop"}>
            <div className='border-black hover:border-b-2 '>
              Shop
            </div>
          </Link>

          {/* about */}
          <div className='cursor-pointer'>
            <div className='flex flex-row items-center justify-center' onClick={() => setIsLinkAboutMain(true)}>
              <p>
                About
              </p>
              <div className='w-[15px] h-[10px] relative'>
                <Image src="/arrow-down.svg" className='object-cover' fill/>
              </div>
            </div>

            {/* about link dropdown */}
            <div className={`absolute z-10 h-[100vh] top-0 bg-white left-0 w-[400px] flex flex-col justify-center items-center text-3xl gap-5 ${isLinkAboutMain ? "" : "hidden"}`}>
              <div className='absolute w-[35px] h-[25px] left-[350px] top-[20px]'>
                <Image 
                  src={"/hamburger-close.svg"} 
                  className='' 
                  onClick={() => setIsLinkAboutMain(false)}
                  fill
                />
              </div>
              <Link href={"/sustainability"} onClick={() => setIsLinkAboutMain(false)}>
                <button className='font-medium border-black hover:border-b-[3px]'>
                  Sustainability
                </button>
              </Link>
              <Link href={"/about"} onClick={() => setIsLinkAboutMain(false)}>
                <button className='font-medium border-black hover:border-b-[3px]'>
                  About Us
                </button>
              </Link>
              <Link href={"/FAQ"} onClick={() => setIsLinkAboutMain(false)}>
                <button className='font-medium border-black hover:border-b-[3px]'>
                  FAQ
                </button>
              </Link>
              <Link href={"/blog"} onClick={() => setIsLinkAboutMain(false)}>
                <button className='font-medium border-black hover:border-b-[3px]'>
                  Blog
                </button>
              </Link>
            </div>
          </div>        

          {/* sustainability */}
          <Link href={"/sustainability"}>
            <div className='border-black hover:border-b-2'>
              Sustainability
            </div>
          </Link>
        </div>

        {/* logo */}
        <div>
          <Link href={'/'}>
            <div className='relative w-[150px] h-[50px] lg:mr-[120px]'>
              <Image src={"/tradezoLogo.png"} className='object-contain' fill/>
            </div>
          </Link>
        </div>

        {/* userauth & cart */}
        <div className='flex flex-row items-center justify-center gap-4 lg:px-[30px] px-[20px] cursor-pointer'>
          <div className='relative w-[20px] h-[20px] hidden lg:inline-block'>
            <Image src={"/login.svg"} className='' fill/>
          </div>
          <div className='relative w-[20px] h-[20px]'>
            <Image src={"/cart.svg"} className='' fill/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar