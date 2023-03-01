import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import userImg from '../public/assets/userImg.png';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';

const AppSidebar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className='h-16 flex justify-between border-grayAccent-300 lg:h-screen  lg:flex-col   lg:border-r  dark:border-grayAccent-700'>
            <div className='w-1/2 flex border-grayAccent-300 space-x-1  lg:w-full  lg:flex-col lg:py-8 lg:border-b-1/2 lg:space-y-4 dark:border-grayAccent-700'>
                <Image
                    src={userImg}
                    alt='user'
                    className='w-16  p-2 ml-1 rounded-full shadow-xl border-primary-400 lg:p-0 lg:w-36 lg:mx-auto  lg:border-8  dark:border-primary-200'
                />
                <h3 className='font-poppins text-sm my-auto lg:text-3xl  lg:py-2  -sm:hidden '>Mehdi Salimi</h3>
            </div>
            <div
                className={`w-full top-16 px-[5px] fixed z-40 lg:relative lg:block -lg:bg-primary-200 -lg:dark:bg-primary-900 -lg:opacity-90 ${
                    !isNavOpen && 'hidden'
                }`}>
                <Navbar />
            </div>
            <div className='flex flex-col justify-center lg:w-full lg:flex-row'>
                <div className='flex justify-center space-x-2 '>
                    <SocialIcons size={5} width={36} />
                    <div
                        className='HAMBURGER-ICON space-y-2 px-2 my-auto lg:hidden'
                        onClick={() => setIsNavOpen(!isNavOpen)}>
                        <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
                        <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
                        <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
                    </div>
                </div>
                <span className=' py-2  border-t-1/2 lg:border-grayAccent-300 dark:border-grayAccent-700 hidden'>
                    <Link href='www.github.com' className='font-nunito font-semibold text-sm md:text-base'>
                        &copy; 2023 <span className='hover:text-primary-300 transition duration-200'>Mehdi Salimi</span>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default AppSidebar;
