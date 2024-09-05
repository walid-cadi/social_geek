import { createContext, useContext, useState } from "react";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {
const [dataProfile, setDataProfile] = useState([])

    const all = {setDataProfile, dataProfile }

    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )
}

export const MyAppContext = () => useContext(Mycontext)