import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Link from 'next/link'
import Loading from './Loading';

const Moviesgrid = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getMovies = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('https://www.omdbapi.com/?s=avengers&page=1&apikey=f074ffb5')
            setData(data.Search)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div className=''>
          {
              loading ? <Loading/> :   
              <div className='py-22 px-4 grid grid-cols-1 gap-x-44 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-20 sm:gap-x-8 sm:py-6'>
              {
                  data.map((x, i) => (
                      <div className="w-full h-42 text-white">
                          <div className="flex items-center justify-center w-full h-42 sm:h-66">
                              <img src={x.Poster} className='
                              
                              hover:scale-95 hover:bg-gray-800/50
                              opacity-100 hover:opacity-50 mt-2 
                              w-full aspect-video sm:aspect-square object-cover object-center rounded' />
                              <button class="opacity-0 hover:opacity-100 hover:outline-none
                              focus:ring focus:ring-pink-500
                              rounded px-4 py-1
                              text-white w-fit h-12 bg-gray-500 hover:bg-gray-800/80
                              absolute">
                                  <Link href={`/movies/[id]/detail`} as={`movies/${x.imdbID}/detail`}>
                                      <a>Watch Movies</a>
                                  </Link>
                              </button>
                          </div>
                          <div className="flex items-center justify-between mb-4">
                              <div className='w-3/4'>
                                  <h1 className='font-semibold text-lg'> {x.Title}</h1>
                              </div>
                              <p className='text-sm'>{x.Year}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
          }
        </div>
    );
}

export default Moviesgrid;
