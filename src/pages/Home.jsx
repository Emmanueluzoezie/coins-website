import React from 'react'
import Header from '../components/header'
import Language from '../components/Language'
import PopularCoins from '../components/popularCoins'
import Sidebar from '../components/sidebar'
import { useStateContext } from '../context/useStateContext'
import { languageLinks } from '../data/data'

const Home = () => {
    const { sidebar, openLanguage } = useStateContext()

  return (
    <div className='relative'>
        {sidebar? (
              <div className='bg-gray-200 dark:dark-sidebar h-screen fixed right-0 w-[350px]'>
                <Sidebar />
            </div>
        ) : (
            ''
        )}
         
        <Header />
          <div>
              <h1 className='p-5 font-bold text-4xl '>Search for over 1000+ cryptocurrencies</h1>
              <div className='p-5 font-bold text-2xl '>
              <h2>Popular cryptocurrencies</h2>
                  <PopularCoins />
          </div>
          </div>  
    </div>
  )
}

export default Home