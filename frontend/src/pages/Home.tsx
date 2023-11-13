import Hero from "../components/Hero";
import { getHeroPropsForPage } from "../components/Hero";
import { HeroProps } from "../models/productModels";
import Countdown from "../components/Countdown";


const Home = () => {

  const heroInfo = (getHeroPropsForPage('Home') as HeroProps);  
  return (
    <>
      <div>
        <Hero {...heroInfo} />
      </div>
      <div className="w-full h-44 bg-rose-800 text-white text-center flex flex-col justify-center sm:flex-row">
        <div className="h-44 flex flex-col justify-center mx-8">
        <h1 className="font-dancing font-bold text-4xl">Counting down to</h1>
        <h2 className="font-dancing font-bold text-3xl">Merry Moments</h2>
     
        </div>
        <div className="h-44 flex justify-center items-center mx-4">
          <Countdown />         
        </div>
      </div>
        <section className="my-20 w-full px-3 flex flex-wrap gap-4 justify-evenly">
          <article className="relative">
          <img src="/images/cookiedisplay.jpg" alt="" className="w-96 h-[450px] rounded-sm" />
          <h3 className="text-4xl text-white absolute bottom-4 left-3">Cookies & Sweets</h3>
          </article>
          <article className="relative">
            <img src="/images/packaging.jpg" alt="" className="w-96 h-[450px] rounded-sm" />
            <h3 className="text-4xl text-white absolute bottom-4 left-3">Beautifully Wrapped</h3>

          </article>
 
        </section>
 
    </>
  )
}

export default Home;