import {GrMenu} from "react-icons/gr"
import { useStateContext } from "../context/useStateContext"

const Header = () => {
    const { setSidebar, setOpenLanguage } = useStateContext()

    const handleSidebar= () => {
        setSidebar(true)
        setOpenLanguage(false)
    }

  return (
    <div className="flex justify-between p-5">
          <h1 className="text-3xl cursor-pointer">Logo</h1>
          <GrMenu className="text-3xl cursor-pointer" onClick={handleSidebar}/>
    </div>
  )
}

export default Header