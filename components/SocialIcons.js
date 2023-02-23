import React from 'react';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { RxTwitterLogo } from 'react-icons/rx';
import { MdOutlineMail } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const SocialItems = [
    { icon: MdOutlineMail, url: 'https://google.com' },
    { icon: BsInstagram, url: 'https://google.com' },
    { icon: BsWhatsapp, url: 'https://google.com' },
    { icon: FiTwitter, url: 'https://google.com' },
    { icon: FaGithub, url: 'https://google.com' },
];

const SocialIcons = ({ size, width }) => {
    return (
        <ul className={`w-${width} py-2 flex justify-between`}>
            {SocialItems.map(({ icon: Icon, url }, index) => (
                <li
                    key={`social-icon-${index}`}
                    className='p-[5px] rounded-full border-2 border-grayAccent-400  hover:bg-primary-300 transition duration-300 ease-in-out'>
                    <Link href={url} target='_blank'>
                        <Icon size={size} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
