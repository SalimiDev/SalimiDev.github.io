import React from 'react';

const Header = ({pageTitle , pageDesc}) => {
    return (
        <header className='w-full text-center font-nunito space-y-3 px-9 py-3'>
            <h1 className='text-primary-black font-black font-nunito text-3xl '>{pageTitle}</h1>
            <p className='text-grayAccent-800'>{pageDesc}</p>
        </header>
    );
};

export default Header;
