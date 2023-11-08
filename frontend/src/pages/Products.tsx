import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ProductInfo } from '../models/productModels';
import { getHeroPropsForPage } from '../components/Hero';
import { HeroProps } from '../models/productModels';
import Hero from '../components/Hero';

const Products = () => {
  let products: ProductInfo[] = (useOutletContext() as ProductInfo[]) || [];
  const heroInfo = (getHeroPropsForPage('Products') as HeroProps);
  //console.log('produktdatan: ', products);

//Går det skicka in typ {...heroInfo} 

  return (
    <div>
      <Hero title={heroInfo.title} subtitle={heroInfo.subtitle} text={heroInfo.text} buttons={heroInfo.buttons} />
      
      <div className='flex flex-wrap justify-center gap-8 mt-12'>
        {products.length !== 0 ? products.map((product) => (
          <ProductCard key={product.id} product={product} />
          )) : (<div><h3>Sorry, something went wrong with the fetch. Cant display data</h3></div>)}
      </div>

      </div>
    
  );
}

export default Products;



