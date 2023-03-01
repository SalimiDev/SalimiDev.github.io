import SocialIcons from '@/components/SocialIcons';
export default function Home() {
    return (
        <div className='h-[90%] flex flex-col justify-center text-center p-4 space-y-8 md:space-y-10 font-nunito'>
            <div className='space-y-4 md:space-y-6'>
                <h2 className='text-primary-black dark:text-primary-white text-3xl sm:text-4xl md:text-5xl font-bold'>
                    Hi, I am <span className='text-primary-300'>Mehdi Salimi</span>
                </h2>
                <p className='text-primary-black dark:text-primary-white font-semibold text-sm md:text-lg'>
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
