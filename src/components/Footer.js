import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-evenly items-start px-10 py-5 h-96 bg-gray-200'>
        <div className="flex flex-col space-y-2">
            <h1 className='text-gray-500 mb-1 border-b'>Category</h1>
            <p className='text-xs italic'>Men</p>
            <p className='text-xs italic'>WoMen</p>
            <p className='text-xs italic'>Kids</p>
            <p className='text-xs italic'>Clothing</p>
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-gray-500 mb-1 border-b'>Links</h1>
            <p className='text-xs italic'>FAQ</p>
            <p className='text-xs italic'>compare</p>
            <p className='text-xs italic'>store</p>
            <p className='text-xs italic'>pages</p>
            <p className='text-xs italic'>categories</p>
        </div>
        <div className='w-56'>
            <h1 className='font-medium '>About</h1>
            <p className='text-xs break-all '>People who find you online want to know about your 
                company’s mission, vision, and, of course, how you 
                can help them solve their problems. And, an impactful 
                and memorable first impression can 
                help you stand out in the digital world.</p>
        </div>
        <div className='w-56'>
            <h1 className='font-medium '>Contact</h1>
            <p className='text-xs break-all '>People who find you online want to know about your 
                company’s mission, vision, and, of course, how you 
                can help them solve their problems. And, an impactful 
                and memorable first impression can 
                help you stand out in the digital world.</p>
        </div>
        <div className='flex flex-col justify-evenly'>
            <img src="https://user-images.githubusercontent.com/52581/44382006-3db09f80-a567-11e8-92fa-fb7dc45ea6e7.png" width={200} alt="" />
            <p>&#169; copy rights reserved</p>
        </div>
    </div>
    
    
  )
}

export default Footer