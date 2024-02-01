import React, { useState } from 'react'
import Navabar from './companents/Navabar'
import { BrowserRouter } from 'react-router-dom'
import Dropdown from './companents/Dropdown'
import Rout from './companents/Rout'
import ProductDetail from './companents/Product'

// import Responsive from './companents/Responsive'
const App = () => {
  const [cart,setCart]= useState([])
  const [close, setClose] = useState(false)
  const [product, setProduct] = useState(ProductDetail)
  const [detail,setDetail] = useState([])
  const searchbtn =(product)=>{
  const change =ProductDetail.filter((x)=>{
    
      return x.Name === product
  })
  setProduct(change)
  }
  //detail
  const view = (product)=>{
  setDetail([{...product}]);
  setClose(true)
  }

  const addtocart=(product)=>{
    const exsit =cart.find((x)=>{
      return x.id===product.id
      })
  if(exsit)
  {
  alert("Artiq bu Productdu Elave Etmisiniz")
  }
  else{
  setCart([...cart,{...product,qty:1}])
  alert("Productdunuz Sebete Elave Olundu")
  }
  }
  return (
    <>
      <BrowserRouter>
        <Navabar searchbtn={searchbtn} />
        <Dropdown/> 
        <Rout detail={detail} view={view} product={product} setProduct={setProduct} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      </BrowserRouter>
    </>
  )
}

export default App