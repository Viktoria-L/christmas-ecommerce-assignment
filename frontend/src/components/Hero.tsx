import { Link } from "react-router-dom";
import { HeroProps } from "../models/productModels";

const Hero = ({ title, subtitle, text, buttons}: HeroProps) => {


  return (
        <section className="relative bg-[url('./assets/images/tree.jpg')] bg-cover bg-center bg-no-repeat max-h-[509px]">
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

            {/* Gör om till Links  */}
        {buttons &&
            (<div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                <Link to="/products" className="btn-primary">
                Enter Candyland
                </Link>

                <Link to="#" className="btn-secondary">
                Learn More
                </Link>
            </div>)}
            </div>
        </div>
        </section>
  )
}

export default Hero;

export function getHeroPropsForPage(page: string) {
    if (page === 'Home') {
      const data = {
        title: "Let us find your",
        subtitle: "Christmas Spirit",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illtenetur fuga ducimus numquam ea",
        buttons: true,
      };
      return data;
    } else if (page === 'Products') {
      const data = {
        title: "Taste the Wonder of",
        subtitle: "Christmas Sweets",
        text: "At our store, we take pride in offering healthy, wholesome candy options that you can enjoy guilt-free. Our candies are crafted with care, using only the finest, natural ingredients.        We believe in delivering a delicious taste experience while avoiding artificial additives and unnecessary preservatives. Indulge in the pure, unadulterated sweetness of our treats and savor the difference of a healthier choice. Treat yourself to the goodness of our candy, because you deserve the best",
        buttons: false,
      };
      return data;
    }
  }
