import { useRouter } from 'next/router';
// import Slider from '@/components/Slider';
import Link from 'next/link';
//icons
import { VscLoading } from 'react-icons/vsc';
import { CgCodeSlash } from 'react-icons/cg';
import { RiGithubFill } from 'react-icons/ri';
import { RiExternalLinkLine } from 'react-icons/ri';
import { MdOutlineDescription } from 'react-icons/md';
//data
import { projects } from '@/data/projectsData';

const ProjectDetail = () => {
    const { query } = useRouter();
    const queryID = Number(query?.projectDetail);
    //handle to get selected project
    const selectedProject = projects?.filter(project => project.id === queryID);
    const { title, sliderImages, techStack, repository, demoLink, description } = selectedProject[0] || [];

    if (!selectedProject) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <VscLoading size={50} className='dark:text-white animate-spin' />
            </div>
        );
    }

    return (
        <>
            <h2 className='mb-10 md:mb-14 lg:mb:16'>{title}</h2>
            <div className='px-3 mb-16 lg:flex lg:gap-5 lg:px-8'>
                <div className='mb-10 lg:w-1/2'>{/* <Slider images={sliderImages} /> */}</div>

                <div className='space-y-6 text-center sm:text-start'>
                    <div className='flex flex-col items-center gap-1 sm:flex-row'>
                        <span className='flex gap-2'>
                            <CgCodeSlash size={20} className='mt-1.5 text-primary-300' />
                            <h4 className='whitespace-nowrap text-primary-300 dark:text-primary-100 '>Technology Stack :</h4>
                        </span>
                        <div className='flex gap-2'>
                            {techStack?.map((tech, index) => (
                                <h6 key={index} className='mt-1'>
                                    {tech}
                                </h6>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-1 sm:flex-row'>
                        <span className='flex gap-2'>
                            <RiGithubFill size={20} className='mt-1.5 text-primary-300' />
                            <h4 className='whitespace-nowrap text-primary-300 dark:text-primary-100 '>
                                Github Repository :
                            </h4>
                        </span>
                        <Link
                            href='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                            target='_blank'
                            className='font-lato font-bold mt-1 text-primary-black dark:text-primary-white'>
                            {repository}
                        </Link>
                    </div>

                    <div className='flex flex-col items-center gap-1 sm:flex-row'>
                        <span className='flex gap-2'>
                            <RiExternalLinkLine size={20} className='mt-1.5 text-primary-300' />
                            <h4 className='whitespace-nowrap text-primary-300 dark:text-primary-100 '>Project Demo :</h4>
                        </span>
                        <Link
                            href='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                            target='_blank'
                            className='font-lato font-bold mt-1 text-primary-black dark:text-primary-white'>
                            {demoLink}
                        </Link>
                    </div>

                    <div className='flex flex-col items-center gap-1 sm:flex-row sm:text-justify sm:items-start'>
                        <span className='flex gap-2'>
                            <MdOutlineDescription size={20} className='mt-1.5 text-primary-300' />
                            <h4 className='whitespace-nowrap text-primary-300 dark:text-primary-100 '>Description :</h4>
                        </span>
                        <p className='dark:text-white'>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;
