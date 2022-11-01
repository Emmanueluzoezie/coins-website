import {GrMenu} from "react-icons/gr"
import { useStateContext } from "../context/useStateContext"

const Header = () => {
    const { setSidebar } = useStateContext()

  return (
    <div className="flex justify-between p-5">
          <h1 className="text-3xl cursor-pointer">Logo</h1>
          <GrMenu className="text-3xl cursor-pointer" onClick={() => setSidebar(true)}/>
    </div>
  )
}

export default Header