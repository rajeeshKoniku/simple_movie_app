import React from 'react';

const Jumbotron = (props) => {
    return (
        <div class="container">
            <div class="w-2/3">
                <div class="text-white py-16 px-4 pt-28">
                    <h1 class="text-3xl font-bold">FreeFlix</h1>
                    <p class="text-xl leading-relaxed font-light mt-4 mb-6">
                        {props.title}
                    </p>
                    <a href="#browse" class={`${props.hidden} bg-white text-gray-900 px-6 py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-400`}>
                        Browse Movies
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
