import React from 'react'

export const TopCrypto = ({ id, name, rank, image, price, percent }) => {
  return (
      <div className='w-full flex items-center px-5'>
          <h1 className='flex-1'>{name}</h1>
          <div className='flex space-x-16 md:space-x-28 lg:space-x-44'>
              <h1 className=''>{price}</h1>
              <h1 className=''>{percent}</h1>
          </div>
          <div className='hidden md:block md:flex-1 border-2 border-black'>
              <div className='hidden md:flex justify-end border-2 border-black md:pr-20 lg:pr-28'>
                  <h1 className=''>market</h1>
              </div>
          </div>
      </div>
  )
}
