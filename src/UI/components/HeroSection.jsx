import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <main className="bg-gray-900 text-gray-300 py-8">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 grid grid-cols-2 gap-4 place-items-center mb-7">
                <div className="order-2 lg:order-1 col-span-full lg:col-span-1">
                    <h1 className="text-4xl font-semibold mb-4">Explore the World, One Country at a Time.</h1>
                    <p className='mb-4'>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
                    <button className='btn flex justify-center items-center gap-2 px-3 cursor-pointer py-1.5 border rounded-2xl'>
                        <span className='col-span-2'>Start Exploring</span> <FaLongArrowAltRight className='grid-cols-1' />
                    </button>
                </div>
                <div className='order-1 lg:order-2 col-span-full lg:col-span-1'>
                    <img className='h-auto max-w-full' src="/images/world.png" alt="world is beauty" />
                </div>
            </div>
        </main>
    )
}

export default HeroSection
