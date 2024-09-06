import { createContext, useContext, useState } from "react";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {
    const [dataProfile, setDataProfile] = useState([])
    const [groups, setGroups] = useState([]);
    

    const all = {setDataProfile, dataProfile, groups, setGroups }

    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )
}

export const MyAppContext = () => useContext(Mycontext)