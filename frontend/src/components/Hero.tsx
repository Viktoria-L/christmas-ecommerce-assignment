import { Link } from "react-router-dom";
import { HeroProps } from "../models/productModels";
import Snowfall from "react-snowfall";

const Hero = ({ title, subtitle, text, buttons}: HeroProps) => {


  return (
    <>
      <section className="relative bg-[url('/images/tree.jpg')] bg-cover bg-center bg-no-repeat max-h-[509px]">
        <div className="absolute w-full h-full z-10">
          <div className="w-full h-full bg-transparent relative">
            <Snowfall snowflakeCount={60}/>
          </div>
        </div>
    
        <div className="absolute inset-0 max-h-[509px]"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 max-h-[509px]">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-5xl font-dancing font-extrabold sm:text-5xl">
                  {title}
                  <strong className="block sm:text-7xl font-dancing font-extrabold text-rose-600">       
                  {subtitle}
                  </strong>
              </h1>
              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  {text}
              </p>

        
                {buttons &&
                    (<div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                        <Link to="/products" className="btn-primary z-20">
                        Enter Candyland
                        </Link>

                        <Link to="#" className="btn-secondary z-20">
                        Learn More
                        </Link>
                    </div>)}

            </div>
        </div>
        </section>
      </>
  )
}

export default Hero;

export function getHeroPropsForPage(page: string): HeroProps {
    if (page === 'Home') {
      const data: HeroProps = {
        title: "Let us find your",
        subtitle: "Christmas Spirit",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illtenetur fuga ducimus numquam ea",
        buttons: true,
      };
      return data;
    } else if (page === 'Products') {
      const data: HeroProps = {
        title: "Taste the Wonder of",
        subtitle: "Christmas Sweets",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illtenetur fuga ducimus numquam ea",
        buttons: false,
      };
      return data;    
    } else {
      throw new Error(`Invalid page: ${page}`);
  }
}
