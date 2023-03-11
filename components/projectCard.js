import Image from 'next/image';

const ProjectCard = ({ project }) => {
    const { id, title, description, coverImage, demoLink, repository, techStack } = project;

    return (
        <div className='w-full h-auto mx-auto p-3 mb-8 space-y-4 bg-primary-100  shadow-md shadow-black sm:w-[46%] lg:w-[30%]'>
            <div className='w-full h-64 relative overflow-hidden rounded-sm '>
                <Image
                    src={coverImage}
                    alt={title}
                    objectFit='cover'
                    fill
                    className='rounded-sm hover:scale-105 transition duration-500'
                />
            </div>

            <div className='space-y-1 pb-3'>
                <h5 className='flex dark:text-primary-black'>{title}</h5>
                <p>{description}</p>
            </div>

            <button className='flex px-4 py-2 bg-primary-300 text-primary-white rounded-sm shadow-sm shadow-black hover:bg-amber-400 transition duration-300'>
                VIEW DEATAIL
            </button>
        </div>
    );
};

export default ProjectCard;
