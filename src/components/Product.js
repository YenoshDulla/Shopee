
import {EyeIcon, ShoppingBagIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../features/slice/cartSlice'


const Product = ({product}) => {
const {id,image,category,title,price} =product
const dispatch = useDispatch();

const HandleCart = () =>{
  dispatch(addToCart(product))
  console.log(product)
}
  return (
    <div >
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative 
                      overflow-hidden group transition'> 
        <div className='w-full h-full flex justify-center item-center
         '>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center
           '>
            <img className='max-h-[160px] group-hover:scale-110 trnsition duration-300' src={image} alt="" />
          </div>
        {/* Button */}
        <div className='absolute top-2 right-0 opacity-0  group-hover:opacity-100 group-hover:right-5 transition-all'>
          <button>
            <div className=' bg-blue-400 px-2 py-2 rounded-b-md hover:bg-blue-500 '>
              <ShoppingBagIcon onClick={HandleCart}  className='h-5 stroke-1'/>
            </div>
          </button>
          <Link className='flex items-center justify-center py-2 bg-black text-white rounded-md' to={`/product/${id}`}><EyeIcon className='h-4 '/></Link>
        </div>
        </div>
      </div>
      <div>
          <div className='text-sm italic font-medium'><h1>{category}</h1></div>
          <h2 className='text-sm '>{price}</h2>
          <Link to={`/product/${id}`}><h2 className='font-semibold mb-1'>{title}</h2></Link>
        </div>
    </div>
  )
}

export default Product