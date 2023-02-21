import React from 'react';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { RxTwitterLogo } from 'react-icons/rx';
import { MdOutlineMail } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const SocialItems = [
    { icon: MdOutlineMail, url: 'www.google.com' },
    { icon: BsInstagram, url: 'www.google.com' },
    { icon: BsWhatsapp, url: 'www.google.com' },
    { icon: FiTwitter, url: 'www.google.com' },
    { icon: FaGithub, url: 'www.google.com' },
];

const SocialIcons = ({ size, width }) => {
    return (
        <ul className={`w-${width} py-2 flex justify-between`}>
            {SocialItems.map(({ icon: Icon, url }, index) => (
                <li
                    key={`social-icon-${index}`}
                    className='p-[5px] rounded-full border-2 border-grayAccent-400  hover:bg-primary-300 transition duration-300 ease-in-out'>
                    <Link href={url}>
                        <Icon size={size} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
