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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />} loader={getAllProducts}>
      <Route index element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/product/:id' element={<ProductInfoPage />}></Route>
      <Route path='/about' element={<About />}></Route>

    </Route>
    ));

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
