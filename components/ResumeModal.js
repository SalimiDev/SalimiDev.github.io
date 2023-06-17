import React from 'react';
import Image from 'next/image';
import fa from '../assets/fa.svg';
import en from '../assets/en.svg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ResumeModal = ({ showModal, onClose }) => {
    if (!showModal) {
        return null;
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='w-full text-center mx-2 px-1 py-5 bg-primary-400 md:w-1/2'>
            <div className='w-full flex justify-end pr-2'>
                <AiOutlineCloseCircle size={23} color='white' className='cursor-pointer' onClick={() => onClose()} />
            </div>

            <div className='space-y-14'>
                <h5 className='text-primary-100 dark:text-primary-100 text-center'>
                    Choose your prefered language for resume
                </h5>
                <div className='flex justify-center space-x-20'>
                    <a href='https://github.com/SalimiDev/SalimiDev/blob/41664adccfa782def807157eee1533498e5dcb32/resume/Mehdi_Salimi-Frontend_Resume-Ordibehesht-402_eng.pdf?raw=true'>
                        <span className='space-y-3'>
                            <Image src={en} alt='eng' width={75} />
                            <h6 className='text-white'>English</h6>
                        </span>
                    </a>
                    <a href='https://github.com/SalimiDev/SalimiDev/blob/da308fe677a30e7aef737c0bf16471655c7d12eb/resume/Mehdi_Salimi-Frontend_Resume-Tir-402_fa.pdf?raw=true'>
                        <span className='space-y-3'>
                            <Image src={fa} alt='eng' width={75} />
                            <h6 className='text-white'>Farsi</h6>
                        </span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
export default ResumeModal;
