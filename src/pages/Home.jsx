import React from 'react'
import Header from '../components/header'
import Language from '../components/Language'
import Sidebar from '../components/sidebar'
import { useStateContext } from '../context/useStateContext'
import { languageLinks } from '../data/data'

const Home = () => {
    const { sidebar, openLanguage } = useStateContext()

  return (
    <div className='relative'>
        {sidebar? (
            <div className='bg-gray-300 h-screen fixed right-0 w-[350px]'>
                <Sidebar />
            </div>
        ) : (
            ''
        )}
         
        <Header />
        {openLanguage && <Language />}
    </div>
  )
}

export default Home