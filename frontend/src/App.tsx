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
import ProductInfo from './pages/ProductInfo'
import { getAllProducts } from "./pages/Products";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path='/products' element={<Products />} loader={getAllProducts}></Route>
      <Route path='/product/:id' element={<ProductInfo />}></Route>
    </Route>
    ));

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
