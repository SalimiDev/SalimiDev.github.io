import Image from 'next/image';

const SkillCard = ({ skill }) => {
    return (
        <div className='w-full h-auto flex flex-col items-center text-center mb-4 px-3 py-6 space-y-4  font-lato bg-primary-100 shadow-md shadow-black sm:w-[48%] lg:w-[32%] '>
            <span>
                <Image src={skill.icon} alt='skill image' width={50} height={50} />
            </span>
            <div className='space-y-2'>
                <h2 className='text-xl font-bold'>{skill.title}</h2>
                <p>{skill.description}</p>
            </div>
        </div>
    );
};

export default SkillCard;
