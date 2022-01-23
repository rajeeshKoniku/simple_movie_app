import React from 'react';
import Line from '../utilities/Line';
import Moviesgrid from '../utilities/MoviesGrid';
import Searchbar from '../utilities/Searchbar';

const Body = () => {
    return (
        <div  id="browse" className='container bg-gray-900'>
            <div className="w-2/3">
                <h1  className='text-white text-2xl font-semibold px-4'>Popular Movies</h1>
            </div>
                <Moviesgrid/>
        </div>
    );
}

export default Body;
