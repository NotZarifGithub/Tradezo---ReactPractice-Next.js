import React from 'react'

const faqData = [
  {
    section: 'general',
    qna: [
      {
        question: 'What types of tools does your company offer?',
        answer: 'We provide a wide range of high-quality tools, including hand tools, power tools, precision instruments, and more.',
      },
      {
        question: 'Do you offer both professional and DIY tools?',
        answer: 'Yes, we cater to both professionals and do-it-yourself enthusiasts, ensuring that our tools meet various needs.',
      },
      {
        question: 'Are your tools made to last?',
        answer: 'Absolutely. We take pride in manufacturing durable and reliable tools built to withstand rigorous use.',
      },
      {
        question: 'What sets your tools apart from competitors?',
        answer: ' Our tools are known for their precision, quality materials, and innovative design. We prioritize user satisfaction and performance.',
      },
      {
        question: 'Are your tools eco-friendly?',
        answer: 'We are dedicated to sustainability, continually improving our production processes and materials to reduce environmental impact.',
      },
      {
        question: 'How can I order your tools?',
        answer: 'You can easily purchase our tools through our website or visit our authorized dealers and retail stores.',
      },
    ]
  },
  {
    section: 'Tool Usage',
    qna: [
      {
        question: 'How should I care for and maintain your tools?',
        answer: 'Proper maintenance includes cleaning, lubrication, and storing tools in a dry, clean environment.',
      },
      {
        question: 'Do your tools come with warranties?',
        answer: 'Yes, most of our tools come with warranties. Please check the product details for specific warranty information.',
      },
      {
        question: 'Can I use your tools for professional purposes?',
        answer: 'Many of our tools are designed for professional use, offering reliability and precision for various industries.',
      },
      {
        question: 'Are your tools suitable for beginners?',
        answer: 'We offer a range of tools, including those ideal for beginners. Look for our user-friendly options.',
      },
      {
        question: 'How can I find the right tool for my specific project?',
        answer: 'Our website provides detailed descriptions and specifications for each tool, helping you choose the perfect one for your project.',
      },
      
    ]
  },
  {
    section: 'Ordering and Returns',
    qna: [
      {
        question: ' What payment methods do you accept?',
        answer: 'We accept various payment methods, including credit cards, PayPal, and more. Check our website for a complete list.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we offer international shipping. Review our shipping policy for more information.',
      },
      {
        question: 'What if I receive a damaged or defective tool?',
        answer: "Contact our customer support, and we'll promptly assist you with returns or replacements.",
      },
      {
        question: "Can I return a tool if I'm not satisfied with it?",
        answer: "We offer a satisfaction guarantee. If you're not happy with your purchase, you can return the tool within our specified return period.",
      },
      {
        question: 'How do I track my order?',
        answer: "Once your order is shipped, you'll receive a tracking number via email, allowing you to monitor your shipment's progress.",
      },
      
    ]
  },
]
const FaqStructure = ({section, question, answer}) => {
  return (
    <section>
      <div>

        {faqData.map((item, index) => (
          
        //  main content
        <div className='flex flex-col gap-7 py-[20px]' key={index}>
          
          {/* section */}
          <div className='py-[10px] md:text-center'>
            <h1 className='text-2xl capitalize'>
              {item.section}
            </h1>
          </div>

          {item.qna.map((info, index) => (

            // questions and answers
            <div className='flex flex-col gap-2 text-sm' key={index}>

              {/* question */}
              <div>
                <p className='font-extrabold'>
                  Q: {info.question} 
                </p>
              </div>
              {/* answer */}
              <div>
                <p className='leading-6'>
                  A: {info.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        ))}
      </div>
    </section>
  )
}

export default FaqStructure

