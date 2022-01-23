import React from 'react';

const Input = ({type, placeholder}) => {
    return (
        <input type={type}
        className='focus:ring focus:ring-pink-500 
        transition duration-300 w-full px-5 py-2 rounded block mb-2 font-Dongle text-2xl '
        placeholder={placeholder}
        />
    );
}

export default Input;
