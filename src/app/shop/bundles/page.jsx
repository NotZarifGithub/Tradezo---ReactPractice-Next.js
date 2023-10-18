import Collections from "../Collections"
import HeroShop from "../../../src/app/shop/HeroShop"
import Hometools from "../HomeTools"


const bundlesPage = () => {
  return (
    <main>
      <div>

        {/* a section for bundles sub page */}
        <HeroShop />
        <div className="flex flex-col mx-auto lg:flex-row gap lg:max-w-[1100px] gap-5 pb-[80px] lg:px-[30px]">
          <Collections />
          <Hometools />
        </div>
      </div>
    </main>
  )
}

export default bundlesPage