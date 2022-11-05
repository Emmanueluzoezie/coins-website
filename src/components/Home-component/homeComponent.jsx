import React from 'react'
import { AiOutlineSlack } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsApple, BsFillPersonFill } from 'react-icons/bs'
import PopularCoins from '../popularCoins'
import FirstHomeItem from './firstHomeItem'
import { useStateContext } from '../../context/useStateContext'
import useSWR from 'swr'
import axios from 'axios'
import { TopCrypto } from './TopCrypto'
import { useNavigate } from 'react-router-dom'

const HomeComponent = () => {
  const {currency} = useStateContext()
  const navigate = useNavigate()

  const address = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  const fetcher = (url) => axios.get(url).then(res => res.data)

  const {data, isLoading} = useSWR(address, fetcher)

  data && console.log(data)

  return (
    <div>
          <div className='flex items-center space-x-2 p-2 bg-yellow-100 dark:bg-yellow-900 cursor-pointer text-sm sm:text-sm mb-7' onClick={() => navigate("/register")}>
              <AiOutlineSlack />
              <p className=''>Register now - Get up to 100 USDT in trading fee (for verified user)</p>
              <FaArrowRight className='font-bold' />
          </div>
          <FirstHomeItem />
          <div className='p-5 font-bold text-2xl '>
              <h2>Popular cryptocurrencies</h2>
              {/* <PopularCoins /> */}
          </div>
          <div className='w-full flex items-center px-5 mb-4'>
            <h1 className='flex-1'>Name</h1>
            <div className='flex space-x-16 md:space-x-28 lg:space-x-44'>
              <h1 className=''>Last Price</h1>
              <h1 className=''>24h Change</h1>
            </div>
          <div className='hidden md:block md:flex-1 border-2 border-black'>
          <div className='hidden md:flex justify-end border-2 border-black md:pr-20 lg:pr-28'>
                <h1 className=''>market</h1>
              </div>
          </div>
        {/* <h1>Name</h1> */}
          </div>
      {data && data?.splice(0, 5).map((crypto) => (
        <TopCrypto data={data}
          key={crypto.id}
          id={crypto.id}
          name={crypto.name}
          rank={crypto.rank}
          image={crypto.image}
          price={crypto.current_price}
          percent={crypto.market_cap_change_percentage_24h} 
          // price_change_percentage_24h
        />
      ))} 
    </div>
  )
}

export default HomeComponent