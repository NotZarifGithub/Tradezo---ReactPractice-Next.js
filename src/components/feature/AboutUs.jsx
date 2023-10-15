import Image from "next/image"
import Button from "../ui/Button"

const AboutUs = () => {
  return (
    <section className='my-[100px] mx-[20px]'>

			{/* background image */}
      <div className="bg-[url('/heroImage.jpg')] bg-cover h-[75vh] relative">

				{/* main content */}
				<div className="flex flex-col items-center justify-center text-center max-w-[300px] mx-auto h-full gap-4">
					<div className="max-w-[200px]">
						<h1 className="text-xl font-semibold">
							Empowering Your Projects: Explore Our Tool Expertise
						</h1>
					</div>
					<div>
						<p className="text-sm text-black/70">
							Discover top-quality tools and expert guidance for all your DIY and professional projects. We're your trusted source for success.
						</p>
					</div>
					<div>
						<Button text={"About Us"}/>
					</div>
				</div>
      </div>
    </section>
  )
}

export default AboutUs