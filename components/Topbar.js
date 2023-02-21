import React from 'react';
import Link from 'next/link';
import useDarkMode from '@/hooks/useDarkMode';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const Topbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className='h-[10%] w-full  flex justify-end'>
            <span className='p-5 flex space-x-4'>
                {isDarkMode ? (
                    <Link href='#/' onClick={toggleDarkMode}>
                        <HiOutlineSun color='white' size='25px' />
                    </Link>
                ) : (
                    <Link href='#/' onClick={toggleDarkMode}>
                        <HiOutlineMoon color='#0D152B' size='25px' />
                    </Link>
                )}
            </span>
        </div>
    );
};

export default Topbar;
