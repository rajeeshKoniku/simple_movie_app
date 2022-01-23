import React from 'react';
import Navlink from '../utilities/Navlink';
import Mobilenavbar from './MobileNavbar';
import Line from '../utilities/Line';
import Searchbar from '../utilities/Searchbar';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-gray-900 h-12 fixed text-white w-full'>
            <div className="container ">
                <nav className="flex items-center justify-between">
                    <div className="hidden sm:flex items-center gap-x-2">
                        <Navlink href='/' textSize='text-3xl font-semibold'>My App</Navlink>
                        <Navlink href='/' textSize='text-2xl'>Home</Navlink>
                        <Navlink href='/movies' textSize='text-2xl'>Movies</Navlink>
                    </div>
                    <div className="hidden sm:flex items-center gap-x-2">
                 
                        <Navlink href='/auth/login' textSize='text-2xl'>Sign In</Navlink>
                        <Navlink href='/auth/register' textSize='text-2xl'>Sign Up</Navlink>
                    </div>
                </nav>
            </div>
            <div className="sm:hidden flex items-center justify-between px-4 py-1">
                <Navlink href="#" textSize='text-3xl'>My App</Navlink>
                <Mobilenavbar />
            </div>
            <Line />
        </div>
    );
}

export default Navbar;
