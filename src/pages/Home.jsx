import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { useStateContext } from '../context/useStateContext'

const Home = () => {
    const {sidebar } = useStateContext()

  return (
    <div >
        {sidebar? (
            <div className='bg-gray-300 h-screen fixed right-0 w-[300px]'>
                <Sidebar />
            </div>
        ) : (
            ''
        )}
        <Header />
    </div>
  )
}

export default Home