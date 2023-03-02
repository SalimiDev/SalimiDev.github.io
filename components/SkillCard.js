import React from 'react';
import Image from 'next/image';

const SkillCard = () => {
    return (
        <div className='w-full h-auto px-3 py-6 font-lato bg-primary-100 shadow-md shadow-black flex flex-col items-center text-center space-y-4'>
            <span className='p-'>
                <Image src='/../public/assets/userImg.png' alt='skill image' width={50} height={50} />
            </span>
            <div className='space-y-2'>
                <h2 className='text-xl font-bold'>JavaScript</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum magni soluta, et non quasi?</p>
            </div>
        </div>
    );
};

export default SkillCard;
