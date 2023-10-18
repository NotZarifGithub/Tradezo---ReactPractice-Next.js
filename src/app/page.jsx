import Hero from "@/components/common/Hero";
import Navbar from "@/components/common/Navbar";
import Showcase from "@/components/feature/Showcase";
import AboutUs from "@/components/feature/AboutUs";
import Bundles from "@/components/feature/Bundles";
import Testimonials from "@/components/feature/Testimonials";
import Product from "@/components/feature/Product";


export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <AboutUs />
      <Bundles />
      <Testimonials />
      <Product />
    </main>
  )
}
