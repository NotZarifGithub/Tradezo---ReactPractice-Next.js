import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="absolute top-0 left-0 flex-1 w-full h-full -z-10">

      {/* backgrond image */}
      <div className="bg-[url('/heroImage.jpg')] bg-cover bg-center lg:h-full h-[90vh] flex-1">

        {/* hero content */}
        <div className="absolute flex flex-col items-center justify-center text-center top-[65vh] lg:top-[75vh] max-w-[300px] md:max-w-[400px] left-[45px] gap-3 md:left-[225px] lg:left-0">
          <h1 className="text-[27px] md:text-4xl font-medium">
            Anything but ordinary
          </h1>
          <div>
            <p className="text-sm font-normal md:text-lg">
              Efficient, Sustainable Shopping for Everyday Essentials Crafted with Natural Ingredients.
            </p>
          </div>
          <div className="pt-[25px]">
            <Button text={"Shop All"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
