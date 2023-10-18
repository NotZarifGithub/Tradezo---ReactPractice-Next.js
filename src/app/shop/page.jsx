import Collections from "./Collections"
import HeroShop from "../../../src/app/shop/HeroShop"
import ProductSection from "./ProductSection"

const shopPage = () => {
  return (
    <main>
      <div>

        {/* main section */}
        <HeroShop />
        <div className="flex flex-col mx-auto lg:flex-row gap lg:max-w-[1100px] gap-5 pb-[80px] lg:px-[30px]">
          <Collections />
          <ProductSection />
        </div>
      </div>
    </main>
  )
}

export default shopPage