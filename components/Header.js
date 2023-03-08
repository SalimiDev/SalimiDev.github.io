import React from 'react';

const Header = ({pageTitle , pageDesc}) => {
    return (
        <header className='w-full text-center space-y-3 px-5 py-3 mt-2'>
            <h2 className='uppercase'>{pageTitle}</h2>
            <p className='text-description'>{pageDesc}</p>
        </header>
    );
};

export default Header;
