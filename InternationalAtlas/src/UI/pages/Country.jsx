import React, { useContext, useEffect } from 'react'
import { CountryContext } from '../../store/CountryProvider';
import { getCountryList } from '../../API/apiMethods'
import CountryList from '../components/CountryList';
import Loader from '../components/Loader';

const Country = () => {
    const { countryList, setCountryList, isPending, startTransition } = useContext(CountryContext);

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
            await getCountryData();
        })
    }, [])

    if (isPending) return <Loader />;

    return (
        <section className='bg-gray-900 text-gray-300 py-8'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {
                        countryList.map((data, index) => {
                            return <CountryList data={data} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Country
