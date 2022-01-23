import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../../components/main/Navbar'
import axios from 'axios'
import Loading from '../../../components/utilities/Loading'
import Header from '../../../components/main/Header';

const Detail = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { id } = router.query

    const getMovies = async () => {

        try {
            setLoading(true)
            const { data } = await axios.get('http://www.omdbapi.com/?i='+ id +'&apikey=f074ffb5')
            setData(data)
            setLoading(false)
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div className='w-full min-h-screen bg-gray-900 pb-96 sm:pb-2 '>
            <Header title="Halaman Detail"/>
            <Navbar />
            {
                loading ?  <Loading/> : <div className="container pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                        <div className="w-4/3">
                            <img src={data.Poster} className='w-full rounded-md pt-2 aspect-square
                        object-cover' />
                        </div>
                        <div className="w-4/3 h-24 font-Dongle text-white ">
                            <div className="flex items-center justify-between">
                                <h1 className='text-white font-semibold text-5xl font-Dongle'>{data.Title}</h1>
                                <p className='w-fill px-2 text-xl  bg-yellow-500 text-white rounded'>
                                   {data.Runtime}
                                </p>
                            </div>
                            <p className='text-2xl font-Dongle'>{data.Year}</p>
                            <p className='w-fill px-4 text-2xl ring hover:ring-pink-700
                        shadow-sm shadow-white py-1 bg-gray-800 text-dark rounded'>
                                {data.Genre}
                            </p>
                            <div className="bg-white shadow shadow-md text-black rounded px-4 py-2 mt-6">
                                <p className='text-3xl pt-2'>Plot : </p>
                                <p className='prose text-2xl'>{data.Plot}</p>
                            </div>
                            <p className='text-2xl pt-2 '>Awards: </p>
                            <p className='w-fill px-4 text-2xl ring hover:ring-pink-700
                        shadow-sm shadow-white py-1 bg-gray-800 text-dark rounded'>
                                {data.Awards}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail;
