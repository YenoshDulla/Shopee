import React, { useContext } from 'react'
import {ArrowNarrowRightIcon,TrashIcon} from '@heroicons/react/outline'
import { SidebarContext } from '../contexts/SidebarContext'
import { useSelector } from 'react-redux'
import { clearCart, getTotal, selectItem } from '../features/slice/cartSlice'
import CartItem from './CartItem'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Sidebar = () => {
  const {isOpen,handleClone} = useContext(SidebarContext)
  const items = useSelector(selectItem)
  const {totalamount} = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const ClearItems = () =>{
      dispatch(clearCart())
  }
  
  useEffect(()=>{
    dispatch(getTotal());
  },[items,dispatch])
  return (
    <div className={`${isOpen ? 'right-0' :'-right-full'}  w-full h-full bg-white fixed top-0  shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-40 px-4 lg:px-[35px] xl:px-[20px] relative'`}>
      <div className='flex items-center justify-between py-4 border-b'>
        <h1>Shopping Bag ({items.length})</h1>
        <ArrowNarrowRightIcon onClick={handleClone} className='h-10 cursor-pointer hover:bg-gray-200 rounded-full p-1 transition-all'/>
      </div>
      {items.map((item)=>(
        <CartItem
        key={item.id}
        item={item}
        />
      ))}
      <div className='flex items-center justify-between w-full mt-4'>
        <h2>Total : {totalamount}</h2>
        <button onClick={()=>ClearItems()}><TrashIcon className='h-6'/></button>
      </div>
      <button className='absolute bottom-0 bg-black p-2 text-white font-medium w-full mx-auto hover:bg-gray-800'>Checkout</button>
    </div>
  )
}

export default Sidebar