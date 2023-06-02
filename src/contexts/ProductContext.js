import React from 'react'
import {createContext,useState,useEffect} from 'react'

export const productContext = createContext();

const ProductProvider = ({children}) => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
   const fetchProduct = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    setProducts(data)
   }
   fetchProduct();
  },[]);


  return(
    <productContext.Provider value={products}>
        {children}
    </productContext.Provider>
  )
}

export default ProductProvider