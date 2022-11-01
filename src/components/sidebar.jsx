import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import { useStateContext } from '../context/useStateContext'

const Sidebar = () => {
    const {setSidebar} = useStateContext()

  return (
    <div className='p-3'>
          <div className='flex justify-end'>
          <GrFormClose onClick={() => setSidebar(false)} className="cursor-pointer text-4xl "/>
          </div>
    </div>
  )
}

export default Sidebar