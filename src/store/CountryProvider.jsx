import React, { createContext, useState, useTransition } from "react"

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [countryList, setCountryList] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [countryDetail, setCountryDetail] = useState([]);

    return (
        <CountryContext.Provider value={{ countryList, setCountryList, isPending, startTransition, countryDetail, setCountryDetail }}>
            {children}
        </CountryContext.Provider>
    )
}
