import { useRouter } from 'next/router';
import Image from 'next/image';
import notFoundImage from '../public/assets/notFoundImage.gif';
import SocialIcons from '@/components/SocialIcons';

const NotFound = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col justify-center items-center space-y-3 text-grayAccent-800 dark:text-primary-100 font-nunito'>
            <Image src={notFoundImage} alt='Not Found' />
            <div className='p-2 text-center space-y-2 leading-7'>
                <h2 className='text-2xl text-grayAccent-800 dark:text-primary-white  font-bold'>
                    <span className=' text-primary-300'>Oops!</span> Page not found.
                </h2>
                <p>Please check the URL or use the navigation bar to locate the page you&apos;re looking for.</p>
                <p>
                    If the issue persists, please feel free to <b>contact</b> me for further assistance.
                </p>
            </div>
            <button
                onClick={() => router.replace('/')}
                style={{ marginTop: '40px' }}
                className='w-60 px-4 py-2 lg:px-6 lg:py-3 bg-primary-300 text-primary-white'>
                BACK TO HOME
            </button>

            <span className='w-full flex justify-center text-primary-black dark:text-primary-white'>
                <SocialIcons size={10} width={48} />
            </span>
        </div>
    );
};

export default NotFound;
