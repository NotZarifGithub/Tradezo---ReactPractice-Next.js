import React from 'react'
import ShowcaseCard from './ShowcaseCard'


const showcaseCardData = [
  {
    date: 'april 2019',
    title: 'The Garage Beginnings.',
    desc: 'John starts crafting his first tool prototypes with a mission to change the tool industry.'
  },
  {
    date: 'FEBRUARY 2021',
    title: 'John showcases a newly designed tool',
    desc: 'We dive into the world of tool manufacturing and rapidly expand our product line.'
  },
  {
    date: 'OCTOBER 2021',
    title: 'A display of various high-quality tools',
    desc: 'ToolTech introduces cutting-edge power tools, revolutionizing the industry.'
  },
  {
    date: 'JUNE 2022',
    title: 'Crafting Sustainability.',
    desc: 'We proudly launch our eco-friendly tool line, proving that high-quality tools can also be responsible.'
  },
  {
    date: 'JANUARY 2023',
    title: 'Champion of Sustainability',
    desc: 'ToolTech attains B-Corp certification, a vision John set from his humble garage beginnings.'
  },
  {
    date: 'TODAY',
    title: 'Building a Cleaner Tomorrow.',
    desc: "Thanks to your support, we've prevented 300,000 lbs of plastic waste from polluting our planet.",
  },
]
const Showcase = () => {
  return (
    <section>

      {/* showcase section */}
      <div className='max-w-[700px] mx-auto lg:max-w-[1100px] py-[100px]'>
        {showcaseCardData.map((item, index) => (
          <ShowcaseCard 
            date={item.date}
            title={item.title}  
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  )
}

export default Showcase