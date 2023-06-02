import React, { useContext } from 'react'
import {ArrowNarrowRightIcon,TrashIcon} from '@heroicons/react/outline'
import { SidebarContext } from '../contexts/SidebarContext'
import { useSelector } from 'react-redux'
import { selectItem } from '../features/slice/cartSlice'
import CartItem from './CartItem'
const Sidebar = () => {
  const {isOpen,handleClone} = useContext(SidebarContext)
  const items = useSelector(selectItem)
  return (
    <div className={`${isOpen ? 'right-0' :'-right-full'}  w-full h-full bg-white fixed top-0  shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-40 px-4 lg:px-[35px] xl:px-[20px]'`}>
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
        <h2>Total : </h2>
        <button><TrashIcon className='h-6'/></button>
      </div>
    </div>
  )
}

export default Sidebar