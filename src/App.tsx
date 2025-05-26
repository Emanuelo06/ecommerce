import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { CartProvider } from "./context/CartContext";
import CartPreview from "./components/CartPreview";

import './App.css'

function App() {


  return (
   <CartProvider>
     <BrowserRouter>
        <CartPreview />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
     </BrowserRouter>
   </CartProvider>
  )
}

export default App
