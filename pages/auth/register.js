import React from 'react';
import Header from '../../components/main/Header'
import Navbar from '../../components/main/Navbar';
import Input from '../../components/utilities/Input';

const Login = () => {
    return (
        <div className='w-full min-h-screen font-Dongle bg-gray-900'>
            <Navbar />
            <Header title="Halaman Login" />
            <div class="flex justify-center items-center h-screen ">
                <form className='inline-block' onSubmit={
                    (e) => {
                        e.preventDefault()
                    }
                }>
                    <h1 className='text-white text-7xl block'>Register to <span className='text-red-700'>Freeflix</span> </h1>
                    <Input type='text' placeholder='Enter Email' />
                    <Input type='password' placeholder='Enter Password' />
                    <div
                        className='flex items-center justify-center hover:cursor-pointer
                        w-full bg-sky-500 hover:bg-sky-600 transition durarion-300
                                    text-white px-4 py-1 text-3xl rounded text-center'>
                        <p className='pr-1 '>SIGN UP</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login
