import React from 'react';
import Image from 'next/image';
import userImg from '../public/assets/userImg.png';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';
import Link from 'next/link';

const AppSidebar = () => {
    return (
        <div className='h-screen flex flex-col justify-between border-r border-grayAccent-300 dark:border-grayAccent-600'>
            <div className='py-10 border-b-1/2 border-grayAccent-300 dark:border-grayAccent-600'>
                <Image
                    width='186'
                    src={userImg}
                    alt='user'
                    className='w-36 md:w-48 mx-auto rounded-full border-8 md:border-[9px] border-primary-400 dark:border-primary-200'
                />
            </div>

            <div className='px-[5px]'>
                <Navbar />
            </div>
            <div className='w-full flex flex-col justify-center'>
                <div className='flex justify-center'>
                    <SocialIcons size={16} width={44} />
                </div>
                <span className=' py-2  border-t-1/2 border-grayAccent-300 dark:border-grayAccent-600'>
                    <Link href='www.github.com' className='font-nunito font-semibold text-sm md:text-base'>
                        &copy; 2023 <span className='hover:text-primary-300 transition duration-200'>Mehdi Salimi</span>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default AppSidebar;
