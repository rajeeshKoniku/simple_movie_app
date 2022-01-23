import React from 'react';
import Link from 'next/link'

const Navlink = ({textSize ,href, children}) => {
    return (
       <div className='py-1 hover:shadow-lg hover:shadow-gray-900/50'>
            <Link href={href}>
            <a className={`${textSize ? textSize : ''} font-Dongle px-4 py-2`}>
                {children}
            </a>
        </Link>
       </div>
    );
}

export default Navlink;
