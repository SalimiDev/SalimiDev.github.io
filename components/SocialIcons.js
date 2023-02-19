import React from 'react';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { RxTwitterLogo } from 'react-icons/rx';
import { MdOutlineMail } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const SocialItems = [
    { icon: <MdOutlineMail size='16' />, url: 'www.google.com' },
    { icon: <BsInstagram size='16' />, url: 'www.google.com' },
    { icon: <BsWhatsapp size='16' />, url: 'www.google.com' },
    { icon: <FiTwitter size='16' />, url: 'www.google.com' },
    { icon: <FaGithub size='16' />, url: 'www.google.com' },
];

const SocialIcons = () => {
    return (
        <ul className='w-[70%] py-2 flex justify-between'>
            {SocialItems.map((item, index) => (
                <li
                    key={index}
                    className='p-[5px] rounded-full border-2 border-grayAccent-400  hover:bg-primary-300 transition duration-300 ease-in-out'>
                    <Link href={item.url}>{item.icon}</Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
