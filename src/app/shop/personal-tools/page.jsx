import Collections from "../Collections"
import HeroShop from "../../HeroShop"
import Hometools from "../HomeTools"


const personalToolsPage = () => {
  return (
    <main>

      {/* a section for personalTools sub page */}
      <div>
        <HeroShop />
        <div className="flex flex-col mx-auto lg:flex-row gap lg:max-w-[1100px] gap-5 pb-[80px] lg:px-[30px]">
          <Collections />
          <Hometools />
        </div>
      </div>
    </main>
  )
}

export default personalToolsPage