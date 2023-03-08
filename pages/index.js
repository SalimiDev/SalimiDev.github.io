import SocialIcons from '@/components/SocialIcons';

export default function Home() {
    return (
        <div className='h-[90%] flex flex-col justify-center text-center p-4 space-y-8 md:space-y-10'>
            <div className='space-y-4 md:space-y-6'>
                <h1>
                    Hi, I am <span className='text-primary-300'>Mehdi Salimi</span>
                </h1>
                <p className='text-subtitle-lg '>
                    I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website
                    more & more interactive with web animations.
                </p>
            </div>

            <span className='w-full flex justify-center text-primary-black dark:text-primary-white'>
                <SocialIcons size={10} width={48} />
            </span>
        </div>
    );
}
