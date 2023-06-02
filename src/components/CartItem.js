import React from 'react'
import { Link } from 'react-router-dom'
import {XIcon,MinusSmIcon,PlusSmIcon} from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'
import { addToCart, decreaseCart, removeFromCart } from '../features/slice/cartSlice'
const CartItem = ({item}) => {
  const dispatch = useDispatch()

  const {id,title,category,image,price} = item
  const increaseItems = () =>{
    dispatch(addToCart({id}))
  }
  const decreaseItems = () =>{
    dispatch(decreaseCart({id}))
  }
  const removeItem = () =>{
      dispatch(removeFromCart({id}))
  }
  return (
    <div className='flex items-center '>
        <div className='w-full max-h-[150px] flex items-center justify-between py-2 border-b space-y-4'>
          <Link to={`/product/${id}`}><img class="h-[80px]" src={image} alt="" /></Link>
          <div>
            <h2 className="text-sm font-medium">{title}</h2>
            <p className="text-sm">{category}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 ">
                <MinusSmIcon onClick={decreaseItems} className="h-4 shadow-md cursor-pointer"/>
                <span>{item.quantity}</span>
                <PlusSmIcon onClick={increaseItems} className="h-4 shadow-md cursor-pointer"/>
              </div>
              <p className="text-sm">{price*item.quantity}</p>
            </div>
          </div>
          <div onClick={removeItem}>
          <XIcon  className="h-8 cursor-pointer p-1 hover:bg-gray-100 "/>
          </div>
        </div>
    </div>
  )
}

export default CartItem