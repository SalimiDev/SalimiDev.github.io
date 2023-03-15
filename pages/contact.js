import Header from '@/components/Header';
import { TfiLocationPin, TfiEmail } from 'react-icons/tfi';
import { IoCallOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='w-full px-4 space-y-6 mb-16'>
            <Header
                pageTitle={'Contact Me'}
                pageDesc={"Let's Get in Touch - Reach out to me and let's discuss how we can collaborate or work together"}
            />

            <div className=' w-full space-y-5 py-12 dark:text-primary-100'>
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
            </div>
        </div>
    );
};

export default Contact;
