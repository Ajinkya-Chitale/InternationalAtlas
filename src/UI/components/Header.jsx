import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
    return (
        <header>
            <div className='bg-gray-800'>
                <nav className='max-w-7xl w-full mx-auto text-gray-300 flex justify-between items-center flex-col sm:flex-row h-16 sm:h-20'>
                    <h1 className='text-2xl font-semibold tracking-wide'>
                        <NavLink className="flex items-center gap-2" to={'/'}>
                            <img className='h-4 w-4' src="/images/globe.png" alt="logo icon" /> <span>InternationalAtlas</span>
                        </NavLink>
                    </h1>
                    <div>
                        <ul className='flex gap-2'>
                            <li><NavLink to={'/'} className={'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}>Home</NavLink></li>
                            <li><NavLink to={'/about'} className={'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}>About</NavLink></li>
                            <li><NavLink to={'/country'} className={'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}>Country</NavLink></li>
                            <li><NavLink to={'/contact'} className={'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}>Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
