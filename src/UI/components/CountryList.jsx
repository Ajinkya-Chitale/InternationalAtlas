import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CountryList = ({ data }) => {
    const { flags, name, capital, region, population } = data;
    const navigate = useNavigate();

    const handleReadMore = (name) => {
        navigate(`/country/${name}`);
    }

    return (
        <div className='countryBox p-6 rounded-tl-2xl rounded-br-2xl'>
            <LazyLoadImage className='max-w-[180px] max-h-[100px] mb-4' src={flags.svg} alt="flags.alt" />
            <h2 className='text-[18px] mb-2'>{name.common}</h2>
            <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Population:</span><span className='text-gray-400'>{population.toLocaleString()}</span></p>
            <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Region:</span><span className='text-gray-400'>{region}</span></p>
            <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Capital:</span><span className='text-gray-400'>{capital[0]}</span></p>
            <button type='button' className='cursor-pointer mt-2 text-[12px] border px-3 py-1 rounded-2xl flex items-center gap-2' onClick={() => handleReadMore(name.common)}><span>Read More</span> <FaLongArrowAltRight /></button>
        </div >
    )
}

export default CountryList