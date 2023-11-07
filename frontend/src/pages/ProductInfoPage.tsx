import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { ProductInfo } from "../models/productModels";
import { getProduct } from "../utils/http";
import { useEffect, useState } from 'react';

const ProductInfoPage = () => {
    // let product: ProductInfo;
    const location = useLocation();
    const { id } = useParams();
    const [product, setProduct] = useState<any>(location.state);
  
    const fetchProduct = async () => {
      try {
        console.log("Försöker hämta produkt...");
        const response = await getProduct({ params: id });
        const fetchedProduct = await response.json();
        console.log("Produkt hämtad:", fetchedProduct);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Ett fel uppstod vid hämtning av produkten:", error);
      }
    };
  
    useEffect(() => {
        console.log("hej från USEFFET")
      if (product === null) {
        console.log("Försöker fetcha produkt...");
        fetchProduct();
      }
    }, [product, id, location.state]);


   //const [product, setProduct] = useState<any | null>(null); // Använd den korrekta datatypen för din produkt
//     const location = useLocation();
//     const { id } = useParams();
//     console.log("locationstate", location.state)
//     console.log("useparam id", id)

//     let product = location.state;

//     const fetchProduct = async () => {  
//         console.log(await getProduct({params: id}))      
//             const fetchedProduct = await getProduct({params: id});
//             console.log("fetchad", fetchedProduct)
//             return fetchProduct;
//    }

//     if(product === null){
//         console.log("försöker fetcha produkt");
//         product = fetchProduct();   
//         console.log(product)
//     }
    // useEffect(() => {
    //     console.log("inuti useeffect")
    //     if(location.state !== null){
    //         setProduct(location.state);
    //         console.log(product)
    //     }
    //     else {
    //         const fetchedProduct = getProduct({params: id});
    //         console.log("fetchad", fetchedProduct)
    //     }
    //   }, [location, id]);
    //let product = location.state;


  
      //Nånting är gravt fel här iaf. det jag vill görqa är en logik som fetchar enskild produkt ifall det inte finns någon
      //locfation state data, eftersom man kanske går till sidan via urlen och då finns ingen data där


  return (
  <section className="py-20 overflow-hidden bg-white dark:bg-gray-800">
    <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">            
            <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0 z-50 overflow-hidden ">
                    <div className="relative mb-6 lg:mb-10" style={{height:"450px"}}>
                        <img src={product.image} alt={product.name} className="object-contain w-full h-full " />
                    </div>
                    
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                    <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                      <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                            {product.name}
                        </h2>
                        <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                            Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                            Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                        </p>
                        <div className="p-4 mb-8 border border-gray-300 dark:border-gray-700 rounded-2xl">
                              
                                <div className="mb-1 text-xs font-medium text-gray-700 dark:text-gray-400">
                                    Hurry up! Only {product.stock} left in Stock
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-600">
                                    <div className="bg-red-600 dark:bg-red-400 h-2.5 rounded-full" style={{width:`${product.price}%`}}>
                                    </div>
                                </div>
                            </div>
                        <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                            <span>{product.price} SEK</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center ">
                        <div className="mb-4 mr-4 lg:mb-0">
                            <div className="w-28">
                                <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                    <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                        placeholder="1" />
                                    <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 mr-4 lg:mb-0">
                            <button className="btn-primary">
                                Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </section>
  )
}

export default ProductInfoPage;