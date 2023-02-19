import React from 'react';
import Image from 'next/image';
import userImg from '../public/assets/userImg.png';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';
import Link from 'next/link';

const AppSidebar = () => {
    return (
        <div className='h-full flex flex-col justify-between border-r border-grayAccent-300 dark:border-grayAccent-600'>
            <div className='w-auto border-10 py-10 border-b-1/2 border-grayAccent-300 dark:border-grayAccent-600'>
                <Image
                    width='186'
                    src={userImg}
                    alt='user'
                    className='mx-auto rounded-full border-[9px] border-primary-400 dark:border-primary-200'
                />
            </div>

            <div className=' px-[5px]'>
                <Navbar />
            </div>
            <div className='w-full flex flex-col justify-center'>
                <div className='w-full flex justify-center'>
                    <SocialIcons />
                </div>
                <span className=' py-2  border-t-1/2 border-grayAccent-300 dark:border-grayAccent-600'>
                    <Link href='www.github.com' className='font-nunito'>
                        &copy; 2023 <span className='hover:text-primary-300 transition duration-200'>Mehdi Salimi</span>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default AppSidebar;
