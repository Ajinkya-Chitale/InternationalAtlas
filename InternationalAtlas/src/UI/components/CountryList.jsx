import { FaLongArrowAltRight } from "react-icons/fa";

const CountryList = ({ data }) => {
    const { flags, name, capital, region, population } = data;

    return (
        <div className='countryBox p-6 rounded-tl-2xl rounded-br-2xl'>
            <img className='w-full max-w-[40rem] h-[6rem] mb-4' src={flags.svg} />
            <h2 className='text-[18px] mb-2'>{name.common}</h2>
            <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Population:</span><span className='text-gray-400'>{population}</span></p>
            <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Region:</span><span className='text-gray-400'>{region}</span></p>
            <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Capital:</span><span className='text-gray-400'>{capital}</span></p>
            <button type='button' className='cursor-pointer mt-2 text-[12px] border px-3 py-1 rounded-2xl flex items-center gap-2'><span>Read More</span> <FaLongArrowAltRight /></button>
        </div>
    )
}

export default CountryList
