import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='h-auto flex flex-col items-center text-center mb-4 px-3 py-6 space-y-4  font-lato bg-primary-100 shadow-md shadow-black sm:w-[48%] lg:w-[32%] mx-2 '>
            <span>
                <Image src={skill.icon} alt='skill image' width={50} height={50} />
            </span>
            <div className='space-y-2'>
                <h2 className='text-xl font-bold'>{skill.title}</h2>
                <p className='font-nunito '>{skill.description}</p>
            </div>
        </motion.div>
    );
};

export default SkillCard;
