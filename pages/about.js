import React from 'react';
import Image from 'next/image';
import aboutMe from '../public/assets/aboutMe.jpg';
import { FaDownload } from 'react-icons/fa';

const About = () => {
    return (
        <div className='h-[90%] lg:flex justify-center font-nunito px-4'>
            <div className='flex pb-10 flex-col justify-center space-y-5 leading-relaxed'>
                <h1 className='mb-4'>About Me</h1>
                <div className='space-y-5 items-center lg:flex lg:space-x-5'>
                    <div className='lg:w-1/2'>
                        <Image src={aboutMe} alt='about me' />
                    </div>
                    <div className='lg:w-1/2 pr-5 space-y-4'>
                        <h2>
                            I am <span className='text-primary-300'>Mehdi Salimi</span>
                        </h2>
                        <p className='text-description'>
                            I am a frontend web developer. I can provide clean code and pixel perfect design. I also make
                            website more & more interactive with web animations.
                        </p>
                        <ul className='dark:text-primary-100 leading-8'>
                            <li>
                                <strong>Full Name :</strong>Mehdi Salimi
                            </li>
                            <li>
                                <strong>Age :</strong>30 years
                            </li>
                            <li>
                                <strong>Nationality :</strong>Iranian
                            </li>
                            <li>
                                <strong>Languages :</strong>English, Persian
                            </li>
                            <li>
                                <strong>Address :</strong>Tehran, Iran
                            </li>
                            <li>
                                <strong>Freelance :</strong>Available
                            </li>
                        </ul>

                        <button
                            style={{ marginTop: '40px' }}
                            className=' flex gap-2 px-4 py-2 bg-primary-300 text-primary-white rounded-sm lg:px-6 lg:py-3'>
                            DOWNLOAD RESUME
                            <span>
                                <FaDownload />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
