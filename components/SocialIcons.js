import React from 'react';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const SocialItems = [
    { icon: MdOutlineMail, url: 'mailto:salimi.devop@gmail.com' },
    { icon: FaGithub, url: 'https://github.com/SalimiDev' },
    { icon: FaTelegram, url: 'https://t.me/salimidevop' },
    { icon: BsWhatsapp, url: 'https://wa.me/+989370938781' },
    { icon: BsInstagram, url: 'https://www.instagram.com/mehdi_salimi92' },
];

const SocialIcons = ({ size, width }) => {
    return (
        <ul className={`w-${width} py-2 flex space-x-1`}>
            {SocialItems.map(({ icon: Icon, url }, index) => (
                <li
                    key={`social-icon-${index}`}
                    className='p-[5px] rounded-full border-2 border-grayAccent-400  hover:bg-primary-300 transition duration-300 ease-in-out'>
                    <Link href={url} target='_blank'>
                        <Icon size={size * 2} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
