import React from 'react'
import { AiOutlineSlack } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsApple, BsFillPersonFill } from 'react-icons/bs'
import PopularCoins from './popularCoins'
import google from "../data/google.png"

const HomeComponent = () => {
  return (
    <div>
          <div className='flex items-center space-x-2 p-3 bg-yellow-100 dark:bg-yellow-900 cursor-pointer text-sm sm:text-lg my-7'>
              <AiOutlineSlack />
              <p className=''>Register now - Get up to 100 USDT in trading fee (for verified user)</p>
              <FaArrowRight className='font-bold' />
          </div>
          <h1 className='px-5 font-bold text-4xl '>Search for over 1000+ cryptocurrencies</h1>
          <div className='flex items-center space-x-1 mx-3 mt-10 cursor-pointer '>
              <AiOutlineSlack className='text-xl ml-4' />
              <p>Trade Bitcoin for free</p>
              <MdKeyboardArrowRight className='text-2xl' />
          </div>
          <div className='mt-4 px-4'>
              <button className='flex items-center justify-center bgcolor w-full p-2 space-x-2 text-lg text-black rounded-lg'>
                  <BsFillPersonFill />
                  <h2>Signup with Email or Phone</h2>
              </button>
              <div className='flex mt-3 items-center w-full justify-center'>
                  <div className='flex-1 mr-2 border-b-[1px] border-white' />
                  <h2>Or continue with</h2>
                  <div className='flex-1 ml-2 border-b-[1px] border-white' />
              </div>
              <div className='flex items-center'>
                  <button className='flex items-center flex-1 justify-center bg-gray-600 my-4 p-3 rounded-lg'>
                      <img src={google} className="w-4 h-4 mr-3" alt="google-logo" />
                      Google
                  </button>
                  <button className='flex items-center flex-1 justify-center bg-gray-600 m-4 p-3 rounded-lg'>
                      <BsApple className='mr-3'/>
                      Apple
                </button>
              </div>
              <div className='w-full flex flex-wrap lg:justify-center px-2'>
                <div className='lg:flex-1 w-[50%] mt-5'>
                      <h1 className='text-2xl font-bold'>$76 billion</h1>
                      <p className='text-xs sm:text-lg'>24h trading volume on Binance exchange</p>
                </div>
                <div className='lg:flex-1 w-[50%] mt-5'>
                      <h1 className='text-2xl font-bold'>350+</h1>
                      <p className='text-xs sm:text-lg'>Cryptocurrencies listed</p>
                </div>
                <div className='lg:flex-1 w-[50%] mt-5'>
                      <h1 className='text-2xl font-bold'>120 million</h1>
                      <p className='text-xs sm:text-lg'>Registered users</p>
                </div>
                  <div className='lg:flex-1 w-[50%] mt-5'>
                      <h1 className='text-2xl font-bold'>{'<'}0.10%</h1>
                      <p className='text-xs sm:text-lg'>Lowest transaction fees</p>
                </div>
              </div>
          </div>
          <div className='p-5 font-bold text-2xl '>
              <h2>Popular cryptocurrencies</h2>
              <PopularCoins />
          </div>
    </div>
  )
}

export default HomeComponent