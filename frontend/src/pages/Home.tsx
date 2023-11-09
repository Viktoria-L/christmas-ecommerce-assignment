import Hero from "../components/Hero";
import { getHeroPropsForPage } from "../components/Hero";
import { HeroProps } from "../models/productModels";
import Countdown from "../components/Countdown";


const Home = () => {

  const heroInfo = (getHeroPropsForPage('Home') as HeroProps);  
  return (
    <>
      <div>
        <Hero title={heroInfo.title} subtitle={heroInfo.subtitle} text={heroInfo.text} buttons={true} />
      </div>
      <div className="w-full h-44 bg-rose-800 text-white text-center flex">
        <div className="h-44 flex flex-col justify-center mx-8">
        <h1 className="font-dancing font-bold text-4xl">We are waiting for</h1>
        <h2 className="font-dancing font-bold text-3xl">Precious Time</h2>
        </div>
        <div className="h-44 flex justify-center items-center mx-4">
          <Countdown />         
        </div>
      </div>
        <section className="mt-12 w-full flex justify-evenly">
          <article>
            <img src="./src/assets/images/ad.jpg" alt="" className="object-cover w-96 max-w-96 max-h-72 h-72 rounded-md" />
          </article>
          <article className="">
            <img src="./src/assets/images/packaging.jpg" alt="" className="object-cover w-96 h-72 rounded-md" />
          </article>
 
        </section>

 
    </>
  )
}

export default Home;