import Hero from "../components/Hero";
import { getHeroPropsForPage } from "../components/Hero";
import { HeroProps } from "../models/productModels";

const Home = () => {

  const heroInfo = (getHeroPropsForPage('Home') as HeroProps);
  console.log(heroInfo)
  
  return (
    <div>
      <Hero title={heroInfo.title} subtitle={heroInfo.subtitle} text={heroInfo.text} buttons={true} />
    </div>
  )
}

export default Home;