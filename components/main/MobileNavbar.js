import React, { Fragment } from 'react';
import Navlink from '../utilities/Navlink';
import { Menu } from '@headlessui/react'
import Line from '../utilities/Line';

const Mobilenavbar = () => {
    return (
        <Menu>
            <Menu.Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </Menu.Button>
            <Menu.Items
                className='absolute right-0 top-0 mt-9 mr-10 bg-white text-black w-1/3 rounded px-4 py-2'>
                <Menu.Item>
                    <Navlink href='/' textSize='text-2xl inline-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3 text-purple-800" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Home</Navlink>
                </Menu.Item>

                <Menu.Item>
                    <Navlink href='/' textSize='text-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        Movies</Navlink>
                </Menu.Item>
                <Menu.Item>
                    <Navlink href='/' textSize='text-2xl'>About</Navlink>
                </Menu.Item>
               
                <Menu.Item>
                    <Navlink href='/' textSize='text-2xl'>Sign Up</Navlink>
                </Menu.Item>
                <Menu.Item>
                    <Navlink href='/' textSize='text-2xl'>Sign In</Navlink>
                </Menu.Item>

            </Menu.Items>
        </Menu>
    );
}

export default Mobilenavbar;
