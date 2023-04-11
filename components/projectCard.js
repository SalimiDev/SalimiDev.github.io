import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiLink } from 'react-icons/hi';
import { ImGithub } from 'react-icons/im';

const ProjectCard = ({ project }) => {
    const { id, title, description, coverImage, demoLink, repository, techStack } = project;

    const iconStyle = 'text-primary-200 cursor-pointer lg:text-black hover:text-primary-300 transition duration-300 ';

    const projectDetailURL = title?.toLowerCase()?.replace(/\s+/g, '-');

    return (
        <div className='w-full h-auto mx-auto pb-5 p-3 mb-8 space-y-4 bg-primary-100  shadow-md shadow-black sm:w-[46%] lg:w-[30%]'>
            <div className='w-full h-64 relative overflow-hidden rounded-sm group '>
                <Image src={coverImage} alt={title} objectFit='cover' fill className='rounded-sm ' />
                <div className='absolute w-0 h-full sm:bg-white opacity-75 transition-all duration-500 group-hover:w-full'></div>
                <div className='w-full h-full flex justify-center items-end lg:items-center p-4 gap-4 absolute lg:z-20 lg:opacity-0 transition duration-500 group-hover:opacity-100 '>
                    <Link href={demoLink} target='_blank'>
                        <HiLink size={35} className={iconStyle} />
                    </Link>
                    <Link href={repository} target='_blank'>
                        <ImGithub size={35} className={iconStyle} />
                    </Link>
                </div>
            </div>

            <div className='space-y-1 pb-3'>
                <h5 className='flex dark:text-primary-black'>{title}</h5>
                <p>{description}</p>
            </div>

            <Link href={`/projects/${projectDetailURL}?projectid=${id}`}>
                <button className='flex px-4 py-2 bg-primary-300 text-primary-white rounded-sm shadow-sm shadow-black hover:bg-amber-400 hover:text-primary-400 transition duration-300'>
                    VIEW DETAIL
                </button>
            </Link>
        </div>
    );
};

export default ProjectCard;
