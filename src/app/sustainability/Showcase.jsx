import React from 'react'
import CardShowcase from './CardShowcase'

const cardShowcaseData = [
  {
    title: 'Quality Assurance',
    brief: 'Tradezo provides top-quality tools, empowering professionals and DIY enthusiasts.',
    desc: "At Tradezo, our foremost commitment is to provide our customers with tools of exceptional quality. We understand that having access to reliable and high-quality tools can significantly impact the success of various tasks. Whether you're a skilled tradesperson honing your craft, a dedicated DIY enthusiast working on home improvement projects, or a homeowner striving for self-sufficiency, the quality of the tools at your disposal can be a game-changer.",
  },
  {
    title: 'Environmental Responsibility',
    brief: 'Merging superior tools with sustainability. In 2022, 75,000 lbs plastic diverted. Committed to eco-consciousness.',
    desc: 'Tradezo is not only dedicated to providing top-tier tools but also to minimizing our environmental footprint. We are proud to have successfully diverted 75,000 pounds of plastic waste in 2022 alone, and our commitment to increasing our impact in the years to come is unwavering. Through our circular refill system, sustainable packaging and materials, and carbon-neutral certification, we demonstrate our dedication to leaving the planet in a better state than we found it. ',
  },
  {
    title: 'Customer-Centric Focus',
    brief: "Tradezo crafts safe, efficient tools with eco-friendly materials, prioritizing your well-being and the planet's health.",
    desc: 'At Tradezo, our product formulation revolves around a single principle: we provide our customers with tools that are safe, efficient, and environmentally responsible. We thoughtfully select our ingredients and materials to ensure that our customers can maintain healthy smiles and bodies while also safeguarding the planet. Our commitment to using only clean and safe ingredients underscores our dedication to your well-being.',
  },
  {
    title: "Workers' Welfare",
    brief: 'Tradezo prioritizes safe, eco-friendly tools and ingredients, ensuring a healthy planet and well-being for our customers.',
    desc: 'The team at Tradezo, though small, plays an essential role in our mission. Our dedicated team inspires us daily with their commitment to our vision. We proudly provide competitive wages and an array of benefits to ensure their well-being. We understand that a content and satisfied team is a cornerstone of our impact.',
  },
  {
    title: 'Community Engagement',
    brief: "Tradezo's commitment transcends tools. We engage, give, and volunteer for a cleaner planet and brighter future.",
    desc: 'Our commitment extends beyond the quality of our tools. Through community engagement, charitable giving, and employee volunteer work, we are positioned to elevate our mission of leaving a cleaner planet for future generations. We actively participate in community projects, support charitable causes, and encourage our team to engage in volunteer work. By investing in our communities, we aim to create a positive impact that ripples outward, making the world a better place for all.',
  },
]

const Showcase = () => {
  return (
    <div>
      <div className='px-[50px]'>

        {/* title for showcase */}
        <div className='lg:py-[10px]'>
          <h1 className='text-3xl font-medium leading-normal lg:text-4xl'>
            We measure our impact across 5 different categories
          </h1>
        </div>

        {/* showcase content */}
        <div className='grid md:grid-cols-2 md:gap-8 lg:py-[50px]'>
          {cardShowcaseData.map((item, index) => (
            <CardShowcase 
              title={item.title}
              brief={item.brief}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Showcase