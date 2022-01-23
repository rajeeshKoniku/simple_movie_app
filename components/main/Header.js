import React from 'react';
import Head from 'next/head'

const Header = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
        </Head>
    );
}

export default Header;
