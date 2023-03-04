import React from 'react';

const Header = ({pageTitle , pageDesc}) => {
    return (
        <header className='w-full text-center font-lato space-y-3 px-5 py-3 mt-10'>
            <h1 className='text-primary-black font-black text-3xl dark:text-primary-white uppercase'>{pageTitle}</h1>
            <p className='text-grayAccent-800 dark:text-primary-100'>{pageDesc}</p>
        </header>
    );
};

export default Header;
