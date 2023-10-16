import Image from "next/image"
import Button from "../ui/Button"

const AboutUs = () => {
  return (
    <section className='my-[100px] mx-[20px] lg:mx-[60px]'>

			{/* background image */}
      <div className="bg-[url('/heroImage.jpg')] bg-cover h-[75vh] relative lg:h-[100vh]">

				{/* main content */}
				<div className="flex flex-col items-center justify-center text-center max-w-[300px] mx-auto h-full gap-4 lg:max-w-[500px]">
					<div className="max-w-[200px] lg:max-w-[400px]">
						<h1 className="text-xl font-semibold lg:text-3xl">
							Empowering Your Projects: Explore Our Tool Expertise
						</h1>
					</div>
					<div>
						<p className="text-sm text-black/70 lg:text-base">
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