import React from 'react'
import countryData from '../../../src/API/countryData.json'

const About = () => {
    return (
        <section className='bg-gray-900 text-gray-300 py-8'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-center text-3xl mb-6'>Here are the Interesting Facts <br /> we're proud of</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                        countryData.map(ele => {
                            const { id, name, capital, region, population, interestingFact } = ele;

                            return (
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md" key={id}>
                                    <h3 className="text-lg text-gray-600 font-bold mb-2">{name}</h3>
                                    <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Capital:</span><span>{capital}</span></p>
                                    <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Region:</span><span>{region}</span></p>
                                    <p className="text-sm text-gray-600"><span className='inline-block mb-1 opacity-80 me-1'>Population:</span><span>{population}</span></p>
                                    <p className="text-sm text-gray-600"><span className='opacity-80 me-1'>Interesting Fact:</span><span>{interestingFact}</span></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default About
