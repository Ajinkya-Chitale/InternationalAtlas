import { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router"
import { CountryContext } from "../../store/CountryProvider";
import { getCountryDetails } from "../../API/apiMethods";
import Loader from "./Loader";

const CountryDetails = () => {
    const { id } = useParams();
    const { isPending, startTransition, countryDetail, setCountryDetail } = useContext(CountryContext);

    // Function to get selected country details
    const showCountryDetails = async (selectedCountry) => {
        try {
            const resp = await getCountryDetails(selectedCountry);

            if (resp.status !== 200) {
                throw new Error('Not able to fetch selected country details.')
            }

            setCountryDetail(resp.data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        startTransition(async () => {
            await showCountryDetails(id);
        })
    }, [])

    if (isPending) return <Loader />


    if (countryDetail.length < 1) return null;

    const { flags, name, capital, population, currencies, region, subregion, languages } = countryDetail;

    return (
        <section className="bg-gray-900 text-gray-300 py-8" >
            <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:max-w-5xl lg:p-8">
                <div className="grid grid-cols-2 items-center gap-6">
                    <div className="max-w-[200px] max-h-[200px] mx-auto">
                        <img src={flags.svg} alt={flags.alt} />
                    </div>
                    <div>
                        <h3 className="mb-3 text-3xl">{name.official}</h3>
                        <p className="text-sm text-gray-200"><span className='inline-block mb-3 opacity-80 me-1'>Name:</span><span className='text-gray-400'>{name.common}</span></p>
                        <p className="text-sm text-gray-200"><span className='inline-block mb-3 opacity-80 me-1'>Native Names:</span><span className='text-gray-400'>{Object.keys(name.nativeName).map(ele => {
                            return name.nativeName[ele].common
                        }).join(', ')}</span></p>
                        <p className="text-sm text-gray-200"><span className='inline-block mb-3 opacity-80 me-1'>Capital:</span><span className='text-gray-400'>{capital}</span></p>
                        <p className="text-sm text-gray-200"><span className='inline-block mb-3 opacity-80 me-1'>Population:</span><span className='text-gray-400'>{population.toLocaleString()}</span></p>
                        <p className="text-sm text-gray-200"><span className='inline-block mb-3 opacity-80 me-1'>Currencies:</span><span className='text-gray-400'>{Object.keys(currencies).map(ele => {
                            return currencies[ele].name
                        }).join(', ')}</span></p>
                        <p className="text-sm text-gray-200"><span className='inline-block mb-3 opacity-80 me-1'>Region:</span><span className='text-gray-400'>{region}</span></p>
                        <p className="text-sm text-gray-200"><span className='inline-block mb-3 opacity-80 me-1'>Sub Region:</span><span className='text-gray-400'>{subregion}</span></p>
                        <p className="text-sm text-gray-200"><span className='inline-block opacity-80 me-1'>Languages:</span><span className='text-gray-400'>{Object.keys(languages).map(ele => {
                            return languages[ele]
                        }).join(', ')}</span></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end me-16 pb-2">
                <NavLink to={'/country'}>
                    <button type="button" className="border-2 border-gray-700 px-4 py-1 rounded-2xl cursor-pointer">Go Back</button>
                </NavLink>
            </div>
        </section >
    )
}

export default CountryDetails
