import { createContext, useState } from "react"

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [regionVal, setRegionVal] = useState('All');

    return (
        <FilterContext.Provider value={{ search, setSearch, regionVal, setRegionVal }}>
            {children}
        </FilterContext.Provider>
    )
}
