import { createContext, useContext, useState } from "react";

const StateContext = createContext()

export const ContextProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)
    const [openLanguage, setOpenLanguage] = useState(false)
    const [language, setLanguage] = useState("English")

    return(
        <StateContext.Provider value={{ sidebar, setSidebar, openLanguage, setOpenLanguage, language, setLanguage }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)