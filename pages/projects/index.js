import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import usePagination from '@/hooks/usePagination';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
//data
import { projects } from '@/data/projectsData';

const Projects = () => {
    const itemsPerPage = 3; // number of items per page

    const { slicedData, goToNextPage, goToPreviousPage, changePage, getPaginationGroup, totalPages, currentPage } =
        usePagination(projects, itemsPerPage);

    const router = useRouter();
    const { asPath, query } = router;
    const page = query.page;

    useEffect(() => {
        if (asPath === '/projects') {
            router.replace('/projects?page=1');
        }
    }, [asPath, router]);

    // Check if requested page exists
    if (page > totalPages) {
        // Redirect to 404 page
        router.push('/404');
        return null;
    }

    return (
        <motion.div
            className='w-full px-4 space-y-6 mb-16'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}>
            <Header
                pageTitle={'My Projects'}
                pageDesc={
                    'Explore my frontend development projects and experience with HTML, CSS, JavaScript, and frameworks like React, showcasing responsive designs and intuitive user interfaces.'
                }
            />

            <section className='w-full h-auto flex flex-wrap gap-x-2'>
                {slicedData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>

            {/* pagination ui */}
            <div className='flex gap-1 dark:text-primary-white justify-center'>
                <button onClick={goToPreviousPage} disabled={currentPage === 1} className='disabled:opacity-50'>
                    prev
                </button>
                <span className='flex gap-1 mx-3'>
                    {getPaginationGroup().map(item => (
                        <button
                            key={item}
                            onClick={changePage}
                            className={`w-6 h-6  hover:bg-yellow-300 hover:text-primary-500 transition duration-300 shadow-sm shadow-black ${
                                currentPage === item ? 'bg-yellow-300 text-primary-500' : 'bg-primary-300 text-primary-white'
                            }`}>
                            {item}
                        </button>
                    ))}
                </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages} className='disabled:opacity-50'>
                    Next
                </button>
            </div>
        </motion.div>
    );
};

export default Projects;
