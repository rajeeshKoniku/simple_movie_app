import React from 'react';
import Body from '../components/main/Body';
import Header from '../components/main/Header';
import Jumbotron from '../components/main/Jumbotron';
import Navbar from '../components/main/Navbar';
import Line from '../components/utilities/Line'

const Index = () => {
    return (
       <div className='w-full h-max bg-gray-900'>
         <Header title="Halaman Index"/>
         <Navbar/>
         <Jumbotron title='Watch every single movie anywhere, anytimes, and the most important is
                        FREE with 0 cost.'
                      />
         <Body/>
       </div>
    );
}
export default Index
