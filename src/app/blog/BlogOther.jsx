import React from 'react'
import BlogCard from './BlogCard'

const blogCardData = [
  {
    title: '10 Essential Tools Every DIY Enthusiast Should Own',
  },
  {
    title: 'Sustainability in Tool Manufacturing: A Greener Approach',
  },
  {
    title: 'From Craftsmen to Entrepreneurs: Success Stories in the Tool Industry',
  },
  {
    title: "Innovations in Tool Design: What's New in the Toolbox?",
  },
  {
    title: 'Safety First: A Guide to Using Tools Responsibly',
  },
  {
    title: 'The History of Tools: From Ancient Implements to Modern Gadgets',
  },
  {
    title: 'Choosing Quality over Quantity: The Secret to Long-Lasting Tools',
  },
  {
    title: 'Upcycling and Repurposing: Giving Old Tools a New Life',
  },
  {
    title: 'Tool Maintenance 101: Prolonging the Lifespan of Your Equipment',
  },
]

const BlogOther = () => {
  return (
    <section>
      <div className='grid md:grid-cols-3 py-[80px]'>
        {blogCardData.map((item, index) => (
          <BlogCard 
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogOther