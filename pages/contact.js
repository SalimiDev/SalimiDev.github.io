import Header from '@/components/Header';
import { TfiLocationPin, TfiEmail } from 'react-icons/tfi';
import { IoCallOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        console.log('first');
    };

    const errorStyle = 'text-red-600 text-sm';
    const inputStyle = 'w-full p-1 border-none bg-primary-100 dark:bg-primary-200';

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

            <section className='space-y-3'>
                <h3 className='mb-8'>Get in Touch</h3>
                <h4 className='flex justify-start'>Leave me a Message</h4>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-2'>
                    <input {...register('fullName', { required: true })} placeholder='Full Name' className={inputStyle} />
                    {errors.fullName && <p className={errorStyle}>This field is required!</p>}

                    <input {...register('email', { required: true })} placeholder='Email' className={inputStyle} />
                    {errors.email && <p className={errorStyle}>Please enter your email!</p>}

                    <textarea
                        {...register('message', { required: true })}
                        cols='30'
                        rows='10'
                        placeholder='Message'
                        className={inputStyle}
                    />
                    {errors.message && <p className={errorStyle}>Please enter your message.</p>}

                    <input type='submit' className='w-full py-2 bg-primary-300 ' />
                </form>
            </section>
        </div>
    );
};

export default Contact;
