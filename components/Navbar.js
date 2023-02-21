import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const { pathname } = useRouter();
    const NavItems = [
        ['Home', '/'],
        ['About', '/about'],
        ['Skills', '/skills'],
        ['Projects', '/projects'],
        ['Contact', '/contact'],
    ];

    return (
        <ul className='font-nunito font-bold text-base md:text-lg'>
            {NavItems.map((item, index) => (
                <li
                    key={index}
                    className={`relative py-2 group hover:text-primary-white dark:hover:text-primary-600 transition-all duration-300 ${
                        pathname === item[1] && ' bg-primary-300 text-primary-white'
                    }`}>
                    <Link href={item[1]} className='relative z-50 block'>
                        {item[0]}
                    </Link>
                    <div className='absolute z-0 left-0 bottom-0 w-0 h-full bg-primary-300 dark:bg-primary-200  transition-all duration-500  group-hover:w-full'></div>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;
