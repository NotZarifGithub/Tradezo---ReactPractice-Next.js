import Image from "next/image";
import Button from "../ui/Button";
import CardProductHero from "../ui/CardProductHero";

const Hero = () => {
  return (
    <section className="absolute top-0 left-0 flex-1 w-full h-full -z-10">

      {/* backgrond image */}
      <div className="bg-[url('/heroImage.jpg')] bg-cover bg-center lg:h-full h-[90vh] flex-1 relative">

        {/* hero content */}
        <div className="absolute flex flex-col items-center justify-center text-center top-[65vh] lg:top-[75vh] max-w-[300px] md:max-w-[400px] left-[45px] gap-3 md:left-[225px] lg:left-0 lg:text-start lg:items-start lg:px-[40px] lg:md:max-w-[500px]">
          <h1 className="text-[27px] md:text-4xl font-medium">
            Anything but ordinary
          </h1>
          <div>
            <p className="text-sm font-normal md:text-lg">
              Efficient, Sustainable Shopping for Everyday Essentials Crafted with Natural Ingredients.
            </p>
          </div>
          <div className="pt-[25px] md:pt-[5px]">
            <Button text={"Shop All"}/>
          </div>
        </div>

        {/* CardProductHero-shoe */}
        <div className="absolute top-[200px] left-[30px] md:left-[240px] lg:left-[440px]">
          <CardProductHero title={"example"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>
        
        {/* CardProductHero-plant */}
        <div className="absolute top-[150px] right-[50px] md:right-[190px] lg:right-[470px]">
          <CardProductHero title={"example"} left={true} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>

        {/* CardProductHero-hairdryer */}
        <div className={`absolute top-[390px] left-[100px] md: md:left-[350px] lg:left-[650px] lg:top-[480px]`}>
          <CardProductHero title={"example"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>

        {/* CardProductHero-bone */}
        <div className="absolute top-[480px] right-[50px] md:right-[190px] lg:right-[350px] hidden lg:flex">
          <CardProductHero title={"example"} left={true} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>

        {/* CardProductHero-brush */}
        <div className="absolute top-[480px] left-[50px] md:left-[190px] lg:left-[350px] lg:top-[420px] hidden lg:flex">
          <CardProductHero title={"example"} left={true} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa delectus."}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
