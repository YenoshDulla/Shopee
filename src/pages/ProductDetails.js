import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { addToCart } from '../features/slice/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
  const [details,setDetails] = useState([])
  const location = useLocation();
 const dispatch = useDispatch();
  const HandleCart = () =>{
    dispatch(addToCart(details))
  }
  
useEffect(()=>{
  setDetails(location.state.items)
},[location.state.items]);
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 md:flex gap-10  '>
        <div className='w-[700px] h-[450px] '>
          <img className='w-full h-full objec-contain' src={details.image} alt="" />
        </div>
        <div className=' h-full flex flex-col justify-between gap-10 my-auto px-10'>
          <h1 className='text-xl font-medium'>{details.title}</h1>
          <p className='text-sm font-medium'> <span className='text-sm font-thin'>Price </span>{details.price}</p>
          <p className='text-sm'>{details.description}</p>
          <div className='flex gap-10'>
          {/* <div className='flex items-center justify-evenly w-56 bg-gray-50 p-1 border '>
            <h1 className='text-sm text-gray-400'>Quantity</h1> 
            <MinusIcon className='h-5 border cursor-pointer'/>
            <span>0</span>
            <PlusSmIcon className='h-5 border cursor-pointer'/>
          </div> */}
             <button onClick={HandleCart}  className='border p-2 w-44 bg-black text-white font-medium hover:bg-gray-700'>add to cart</button>
          </div>
          <h2 className='text-sm text-gray-400 italic'>{details.category}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails