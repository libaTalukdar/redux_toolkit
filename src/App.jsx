   
import {Routes,Route, HashRouter} from "react-router-dom"
import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
import ProductDetail from "./components/ProductDetail"
import Contact from "./pages/Contact"
import About from "./pages/About"

const App = () => {
  const [order,setOrder] = useState(null)
  return (
  <HashRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
    <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
    <Route path="/filter-data" element={<FilterData/>}></Route>
    <Route path="/product/:id" element={<ProductDetail/>}></Route>
    </Routes>
    <Footer/>
    </HashRouter>
  )
}

export default App
