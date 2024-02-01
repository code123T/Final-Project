import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shop } from './Shop'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Cart from './Cart'
const Rout = ({detail,view,product,setProduct,close,setClose,cart,setCart,addtocart}) => {
  return (

 <Routes>
<Route path='/Home' element={<Home detail={detail} view={view} close={close} setClose={setClose}  addtocart={addtocart}/>}></Route>
<Route path='/Shop' element={<Shop detail={detail} view={view} product={product} setProduct={setProduct} close={close} setClose={setClose} addtocart={addtocart}/>}></Route>
<Route path='/About' element={<About/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
 </Routes>
  
  )
}

export default Rout