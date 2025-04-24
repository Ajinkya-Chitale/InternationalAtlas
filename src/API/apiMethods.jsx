import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1", // base URL is the API endpoint"
});

// HTTP Request - GET Country Data
export const getCountryList = () => {
    return api.get('/all?fields=name,population,region,capital,flags')
}


// HTTP Request - Get Country Details Data
export const getCountryDetails = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}