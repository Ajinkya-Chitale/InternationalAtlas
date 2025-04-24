import React, { useContext, useEffect } from 'react'
import { CountryContext } from '../../store/CountryProvider';
import { getCountryList } from '../../API/apiMethods'
import CountryList from '../components/CountryList';
import Loader from '../components/Loader';
import SearchSection from '../components/SearchSection';
import { FilterContext } from '../../store/FilterProvider';

const Country = () => {
    const { countryList, setCountryList, isPending, startTransition } = useContext(CountryContext);
    const { search, regionVal } = useContext(FilterContext);

    // Funtion to fetch list of countries 
    const getCountryData = async () => {
        try {
            const resp = await getCountryList();

            if (resp.status !== 200) {
                throw new Error("Not able to fetch country data.");
            }

            return setCountryList(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        startTransition(async () => {
            if (countryList.length > 0) return;
            await getCountryData();
        })
    }, [])

    if (isPending) return <Loader />;

    // Search Country Logic
    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    };

    const filterRegion = (country) => {
        if (regionVal !== "All") {
            return country.region === regionVal;
        }
        return country;
    }

    // Change country array based on search value
    const filterCountries = countryList.filter((country) => {
        return searchCountry(country) && filterRegion(country);
    });

    return (
        <section className='bg-gray-900 text-gray-300 py-8'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <SearchSection />
                <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {
                        filterCountries.map((data, index) => {
                            return <CountryList data={data} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Country