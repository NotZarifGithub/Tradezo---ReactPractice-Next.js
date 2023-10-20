import './globals.css'
import { Lato } from 'next/font/google'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100','300','400', '700', '900'] 
})

export const metadata = {
  title: 'Tradezo',
  description: 'Where you can find reliable tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
