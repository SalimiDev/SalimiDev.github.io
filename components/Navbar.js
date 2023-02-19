import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    const NavItems = [
        ['Home', '/'],
        ['About', '/about'],
        ['Skills', '/skills'],
        ['Projects', '/projects'],
        ['Contact', '/contact'],
    ];

    return (
        <ul className='font-Montserrat'>
            {NavItems.map((item, index) => (
                <li
                    key={index}
                    className='py-2 font-medium text-lg relative group hover:text-primary-50 dark:hover:text-primary-600 transition-all duration-300'>
                    <Link href={item[1]} className=' relative z-50 '>
                        {item[0]}
                    </Link>
                    <div className='absolute z-0 left-0 bottom-0 w-0 h-full bg-primary-300 dark:bg-primary-200  transition-all duration-500  group-hover:w-full'></div>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;
