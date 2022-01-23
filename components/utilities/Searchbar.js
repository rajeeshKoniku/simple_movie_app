import React, { useEffect, useState } from 'react';
import { Popover } from '@headlessui/react'
import axios from 'axios'

const Searchbar = () => {
    const [ url, setUrl ] = useState()
    const [ data, setData ] = useState()
    const [ loading, setLoading ] = useState()
    const change = (e) => {
        setUrl(e.target.value)
    }
    const getMovies = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`https://www.omdbapi.com/?s=${url}&page=1&apikey=f074ffb5`)
           setData(data.Search)
           console.log(data);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getMovies()
    }, []);

    return (
        <div className='lg:inline font-Dongle lg:text-2xl container mt-5'>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-8 py-2 bg-white rounded-l-md text-black border-r-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            className='
                    text-black h-9 border-l-none  rounded-r-md
                    bg-white w-full py-3 pl-2 pr-3 shadow z-10'
                            type="text"
                            value={url}
                            autoFocus
                            onChange={(evt) => { console.log(evt.target.value) }}
                            placeholder='Search movie...' />
                    </div>
     

        </div>
    );
}

export default Searchbar;
