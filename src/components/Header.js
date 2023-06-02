import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { selectItem } from '../features/slice/cartSlice'
const Header = () => {
const items = useSelector(selectItem)
  const {isOpen,setIsOpen}=useContext(SidebarContext)
  return (
    <div className='sticky top-0 left-0 z-40 w-full h-16 flex items-center justify-between px-20 shadow-md bg-white'>
       <Link to="/"><h1 className='text-xl font-medium text-gray-500 hover:text-blue-500'>Shopee</h1></Link>
       <div className='relative'>
       <ShoppingBagIcon onClick={()=>setIsOpen(!isOpen)} className='h-7 hover:text-blue-500 cursor-pointer'/>
       <span className='absolute -top-3 -right-3 bg-blue-400 rounded-full px-1 text-white'>{items.length}</span>
       </div>
    </div>
  )
}

export default Header