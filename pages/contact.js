import Header from '@/components/Header';
import { TfiLocationPin, TfiEmail } from 'react-icons/tfi';
import { IoCallOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';

import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
});

const Contact = () => {
    const validationSchema = yup
        .object({
            fullName: yup.string().required('Name is required.'),
            email: yup.string().email('Please enter a valid email address.').required('Email is required.'),
            message: yup.string().required('Message is required.'),
        })
        .required();

    //react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = data => {
        console.log(data);
    };

    const errorEffect = {
        initial: { x: 300, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -300, opacity: 0 },
    };

    const errorStyle = 'text-red-600 text-sm';
    const inputStyle =
        'w-full p-1 border-none bg-primary-100 dark:bg-primary-200 focus:outline-none focus:shadow-inner focus:shadow-gray-300';

    return (
        <div className='w-full px-4 space-y-6 mb-16'>
            <Header
                pageTitle={'Contact Me'}
                pageDesc={"Let's Get in Touch - Reach out to me and let's discuss how we can collaborate or work together"}
            />

            <section className='w-full space-y-5 py-12 dark:text-primary-100'>
                <span className='flex gap-3'>
                    <IoCallOutline size={25} color='white' /> <a href='tel:+989370938781'>+98-937-093-8781</a>
                </span>
                <span className='flex gap-3'>
                    <TfiEmail size={23} color='white' /> <a href='mailto:salimi.devop@gmail.com'>salimi.devop@gmail.com</a>
                </span>
                <span className='flex gap-3'>
                    <FaWhatsapp size={23} color='white' /> <a href='https://wa.me/+989370938781'>Send Message on WhatsApp</a>
                </span>
                <span className='flex gap-3'>
                    <TfiLocationPin size={25} color='white' /> <p>Alborz , Iran</p>
                </span>
            </section>

            <section>
                <Map />
            </section>

            <section className='space-y-3'>
                <h3 className='mb-8'>Get in Touch</h3>
                <h4 className='flex justify-start'>Leave me a Message</h4>

                <form onSubmit={handleSubmit(onSubmit)} autocomplete='off' className='w-full space-y-2'>
                    <input {...register('fullName')} autocomplete='new' placeholder='Full Name' className={inputStyle} />
                    <input {...register('email')} placeholder='Email' className={inputStyle} />
                    <textarea {...register('message')} rows='10' placeholder='Message' className={inputStyle} />
                    <input type='submit' className='w-full py-2 bg-primary-300 ' />

                    <AnimatePresence>
                        <ul className='w-full px-1 space-y-1 bg-red-200 list-disc overflow-hidden'>
                            {errors?.fullName?.message && (
                                <motion.li
                                    variants={errorEffect}
                                    initial='initial'
                                    animate='animate'
                                    className='flex gap-1 py-1'>
                                    <label className='text-red-700 text-sm font-bold'>● Full Name: </label>
                                    {<p className={errorStyle}>{errors?.fullName?.message}</p>}
                                </motion.li>
                            )}
                            {errors?.email?.message && (
                                <motion.li
                                    variants={errorEffect}
                                    initial='initial'
                                    animate='animate'
                                    className='flex gap-1 py-1'>
                                    <label className='text-red-700 text-sm font-bold'>● Email:</label>
                                    {<p className={errorStyle}>{errors?.email?.message}</p>}
                                </motion.li>
                            )}
                            {errors?.message?.message && (
                                <motion.li
                                    variants={errorEffect}
                                    initial='initial'
                                    animate='animate'
                                    className='flex gap-1 py-1'>
                                    <label className='text-red-700 text-sm font-bold'>● Message: </label>
                                    {<p className={errorStyle}>{errors?.message?.message}</p>}
                                </motion.li>
                            )}
                        </ul>
                    </AnimatePresence>
                </form>
            </section>
        </div>
    );
};

export default Contact;
