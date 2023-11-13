import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './App.css'
import Root from "./pages/Root";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductInfoPage from './pages/ProductInfoPage'
import { getAllProducts } from "./utils/http";
import About from "./pages/About";
import CartProvider from './utils/context/cartContext';
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />} loader={getAllProducts}>
      <Route index element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/product/:id' element={<ProductInfoPage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Route>
    ));

  return (
    <>
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
    </>
  )
}

export default App
