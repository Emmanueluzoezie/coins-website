import { createContext, useContext, useState } from "react";

const StateContext = createContext()

export const ContextProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)

    return(
        <StateContext.Provider value={{ sidebar, setSidebar }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)