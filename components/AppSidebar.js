import React from 'react';
import Image from 'next/image';
import userImg from '../public/assets/userImg.png';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';
import Link from 'next/link';

const AppSidebar = () => {
    return (
        <div className='w-80 h-screen bg-primary-400 text-center  text-white border-r border-grayAccent-600 relative'>
            <div className='w-full border-10 py-10 border-b-1/2 border-grayAccent-600 '>
                <Image
                    width='186'
                    src={userImg}
                    alt='user'
                    className='mx-auto rounded-full border-[9px] border-primary-200'
                />
            </div>

            <div className='py-24 px-[5px]'>
                <Navbar />
            </div>
            <div className='w-full absolute bottom-10 flex justify-center'>
                <SocialIcons />
            </div>
            <span className='w-full py-2 absolute bottom-0 flex justify-center border-t-1/2 border-grayAccent-600 '>
                <Link href='www.github.com' className='font-nunito'>
                    &copy; 2023 <span className='hover:text-primary-200 transition duration-200 '>Mehdi Salimi</span>
                </Link>
            </span>
        </div>
    );
};

export default AppSidebar;
