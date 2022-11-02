import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import { useStateContext } from '../context/useStateContext'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import ThemeMode from './themeMode'

const Sidebar = () => {
    const { setOpenLanguage, language, setSidebar } = useStateContext()
    const [colorTheme, setTheme] = ThemeMode();

    const handleLanguage = () => {
        setSidebar(false)
        setOpenLanguage(true)
    }

  return (
    <div className='p-3'>
          <div className='flex justify-end'>
          <GrFormClose onClick={() => setSidebar(false)} className="cursor-pointer text-4xl "/>
          </div>
          <div className='flex justify-center font-bold text-xl hover:text-green-400'>
            <button className=''>Login</button>
          </div>
          <div className='flex justify-center font-bold b'>
              <button className='bg-green-400 w-full rounded-xl text-xl p-2 mt-4'>Register</button>
          </div>
          <div>
            <div className='flex justify-between items-center mt-6'>
                <h2 className='text-bold text-xl '>Theme</h2>
                  {colorTheme === "light" ? ( <div className='text-xs'>
                      <MdLightMode onClick={() => setTheme("light")} />
                  </div>) : (<MdDarkMode className="" onClick={() => setTheme("dark")} />)}
            </div>
            <div className='text-bold text-xl cursor-pointer' onClick={handleLanguage}>{language}</div>
          </div>
    </div>
  )
}

export default Sidebar

// MdLightMode
// MdDarkMode