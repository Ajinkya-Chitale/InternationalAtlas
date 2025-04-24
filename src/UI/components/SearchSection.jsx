import { useContext } from "react";
import { FilterContext } from "../../store/FilterProvider";
import { CountryContext } from "../../store/CountryProvider";

const SearchSection = () => {
    const { countryList, setCountryList } = useContext(CountryContext);
    const { search, setSearch, setRegionVal } = useContext(FilterContext);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleRegion = (e) => {
        e.preventDefault();
        setRegionVal(e.target.value);
    }

    const handleAscDesc = (e, value) => {
        e.preventDefault();
        const sortCountries = [...countryList].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        });
        setCountryList(sortCountries);
    }

    return (
        <section className="mb-10 grid grid-cols-4 gap-4">
            <input className="border border-gray-200 rounded-2xl px-2.5 py-1" type="text" placeholder="Search..." value={search} onChange={handleSearch} />

            <button type="button" value="asc" className="border border-gray-200 rounded-2xl px-2.5 py-1 cursor-pointer" onClick={(e) => handleAscDesc(e, "asc")}>Asc</button>
            <button type="button" value="desc" className="border border-gray-200 rounded-2xl px-2.5 py-1 cursor-pointer" onClick={(e) => handleAscDesc(e, "desc")}>Desc</button>

            <select className="border border-gray-200 rounded-2xl px-2.5 py-1 cursor-pointer" onChange={handleRegion}>
                <option className="text-gray-800" value='All'>All</option>
                <option className="text-gray-800" value='Asia'>Asia</option>
                <option className="text-gray-800" value='Antarctic'>Antarctic</option>
                <option className="text-gray-800" value='Europe'>Europe</option>
                <option className="text-gray-800" value='Oceania'>Oceania</option>
                <option className="text-gray-800" value='Americas'>Americas</option>
            </select>
        </section>
    )
}

export default SearchSection
