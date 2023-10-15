import Image from "next/image";
import Button from "../ui/Button";
import CardProductHero from "../ui/CardProductHero";
import CardProduct from "../ui/CardProduct";

const Hero = () => {
  return (
    <section className="relative flex-1 w-full h-[90vh]">

      {/* backgrond image */}
      <div className="bg-[url('/heroImage.jpg')] bg-cover bg-center lg:h-full h-[90vh] flex-1 relative">

        {/* hero content */}
        <div className="absolute flex flex-col items-center justify-center text-center top-[65vh] lg:top-[65vh] max-w-[300px] md:max-w-[400px] left-[45px] gap-3 md:left-[225px] lg:left-0 lg:text-start lg:items-start lg:px-[40px] lg:md:max-w-[500px]">
          <h1 className="text-[27px] md:text-4xl font-medium">
            Anything but ordinary
          </h1>
          <div>
            <p className="text-sm font-normal md:text-lg text-black/70">
              Efficient, Sustainable Shopping for Everyday Essentials Crafted with Natural Ingredients.
            </p>
          </div>
          <div className="pt-[25px] md:pt-[5px]">
            <Button text={"Shop All"}/>
          </div>
        </div>

        {/* CardProductHero-shoe */}
        <div className="absolute top-[170px] left-[30px] md:left-[240px] lg:left-[480px]">
          <CardProductHero title={"example"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>
        
        {/* CardProductHero-plant */}
        <div className="absolute top-[150px] right-[50px] md:right-[190px] lg:right-[570px]">
          <CardProductHero title={"example"} left={true} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>

        {/* CardProductHero-hairdryer */}
        <div className={`absolute top-[390px] left-[100px] md: md:left-[350px] lg:left-[650px] lg:top-[410px]`}>
          <CardProductHero title={"example"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>

        {/* CardProductHero-bone */}
        <div className="absolute top-[450px] right-[50px] md:right-[190px] lg:right-[350px] hidden lg:flex">
          <CardProductHero title={"example"} left={true} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>

        {/* CardProductHero-brush */}
        <div className="absolute top-[480px] left-[50px] md:left-[190px] lg:left-[350px] lg:top-[370px] hidden lg:flex">
          <CardProductHero title={"example"} left={true} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
