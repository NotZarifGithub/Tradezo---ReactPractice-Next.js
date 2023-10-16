"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

// data for testimonials 
const testimonialsData = [
  {
    id: 1,
    name: 'facebook',
    desc: "Your tools have improved our efficiency tenfold. We couldn't imagine our projects without them",
    image: '/facebook.svg',
  },
  {
    id: 2,
    name: 'new balance',
    desc: "High-quality tools that meet our production needs perfectly. Your partnership is invaluable.",
    image: '/newbalance.svg',
  },
  {
    id: 3,
    name: 'british',
    desc: "Your tools make landscaping a breeze. We recommend them to anyone in the industry.",
    image: '/british.svg',
  },
  {
    id: 4,
    name: 'visa',
    desc: "Top-notch tools for precision work. Our engineers trust your products for every project.",
    image: '/visa.svg',
  },
  {
    id: 5,
    name: 'oracle',
    desc: "Your tools have turned our renovation projects into works of art. Outstanding quality!",
    image: '/oracle.svg',
  },
  {
    id: 6,
    name: 'buzzfeed',
    desc: "Reliable tools for our solar installations. They've been a game-changer for our team.",
    image: '/buzzfeed.svg',
  },
  {
    id: 7,
    name: "pko",
    desc: "As auto mechanics, we demand the best tools. Your products have never let us down.",
    image: '/pko.svg',
  },
  {
    id: 8,
    name: 'tesla',
    desc: "Your kitchen tools are essential in our culinary training. They're durable and versatile.",
    image: '/tesla.svg',
  },
]

const Testimonials = () => {

  // state for testimonials slider
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // implementing useeffect to set current slide
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1)),
      2000000000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
			<div className="py-[60px]">

        {/* main description */}
        <div className="max-w-[250px] mx-auto flex justify-center items-center text-center py-[50px] md:max-w-[500px]">
          <div>
            <h1 className="text-3xl italic font-normal lg:text-4xl">
              "{testimonialsData[currentSlide].desc}"
            </h1>
          </div>
        </div>

        {/* companies logo */}
        <div className="grid grid-cols-3 max-w-[300px] mx-auto md:flex gap-1 md:gap-6 md:max-w-[750px] lg:max-w-[950px] py-[50px]">
          {testimonialsData.map((item, index) => (
            <div key={item.id} className={`relative w-full h-[60px]  md:h-[90px] ${currentSlide === index ? "border-b-4 border-black " : ''}`}>
              <Image src={item.image} className="object-contain " fill/>
            </div>
          ))}
        </div>
			</div>
    </section>
  )
}

export default Testimonials