import React, { useEffect, useState } from 'react';
import Navbar from '../components/main/Navbar'
import axios from 'axios'
import Loading from '../components/utilities/Loading'
import Link from 'next/link'
import Jumbotron from '../components/main/Jumbotron';

const Movies = () => {
    const [url, setUrl] = useState('')
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
   // const [loading, setLoading] = useState()

    const next = async () => {
        setPage(page + 1)
    }
    const prev = async () => {
        if (page === 1) {
            setPage(page + 1)
        }
        setPage(page - 1)
    }
    const getMovies = async () => {
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?s=${url}&page=${page}&apikey=f074ffb5`)
            setData(data.Search)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMovies()
    }, [url, page]);

    return (
        <div className='bg-gray-900 min-h-screen'>
            <Navbar />
            <Jumbotron title='Search anything in this site'
                      hidden='hidden'/>
            <div className='container font-Dongle text-3xl sm:text-2xl px-4 pt-4 pb-9'>
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-8 py-2 bg-white rounded-l-md text-black border-r-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        className='
                    text-black h-9 border-l-none  rounded-r-md
                    text-3xl sm:text-3xl
                    bg-white w-full py-3 pl-2 pr-3 shadow z-10'
                        type="text"
                        value={url}
                        autoFocus
                        onChange={(evt) => { 
                            setUrl(evt.target.value)
                            setPage(1)
                        }}
                        placeholder='Search movie...' />
                </div>
                <div className='text-white pt-16'>
                {
                        !data ? <Loading /> : 
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10">
                        {data.map((x, i) => (
                            <div className='flex items-start'>
                                <img src={x.Poster}
                                    alt='Image not found on server :('
                                    className='w-1/5 py-2 ring ring-pink-500 rounded aspect-square object-cover object-center' />

                                <div className="inline-block pl-4 py-3 ">
                                    <div className="
                                    mt-12 inline px-4 py-1 rounded bg-sky-600 ">
                                        <Link  href={`/movies/[id]/detail`} as={`movies/${x.imdbID}/detail`}>
                                            <a>Watch Now</a>
                                        </Link>
                                    </div>
                                    <div className="bg-white text-black ring ring-pink-600 rounded px-4 py-3">
                                        <h1 className='text-4xl font-md py-2'>{x.Title}</h1>
                                        <div className="flex items-center">
                                            <p className='prose text-md pr-5'>{x.Type}</p>
                                            <p className='bg-yellow-600 text-white px-4 py-0 rounded-md inline text-2xl'>{x.Year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
}
                </div>
                <div className="flex items-center justify-between">
                    <button
                            onClick={prev}
                            className='
                   text-white rounded hover:bg-sky-700
                   focus:outline-none focus:ring focus:ring-pink-500 px-3 bg-sky-600 mt-5' 
                   disabled={page > 1 ? false : true}
                   >Prev</button>
                    <h1 className='text-white font-3xl font-Dongle'>
                        Halaman {page}
                    </h1>
                       <button
                            onClick={next}
                            className='
                  text-white rounded hover:bg-sky-700
                  focus:outline-none focus:ring focus:ring-pink-500 px-3 bg-sky-600 mt-5'
                  disabled={ url === '' ? true : false}
                  >Next</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Movies;
