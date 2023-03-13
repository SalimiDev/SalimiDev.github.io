import { loadProjects } from '@/utils/load-datas';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import usePagination from '@/hooks/usePagination';

const Projects = ({ projects }) => {
    const itemsPerPage = 3; // number of items per page
    const { slicedData, goToNextPage, goToPreviousPage, changePage, getPaginationGroup, totalPages, currentPage } =
        usePagination(projects, itemsPerPage);

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

            {/* padination ui */}
            <div className='flex gap-1 dark:text-primary-white justify-center'>
                <button onClick={goToPreviousPage} disabled={currentPage === 1} className='disabled:opacity-50'>
                    Prev
                </button>
                <span className='flex gap-1 mx-3'>
                    {getPaginationGroup().map(item => (
                        <button
                            key={item}
                            onClick={changePage}
                            className={`w-6 h-6 bg-primary-300 text-primary-white hover:bg-amber-400 transition duration-300 shadow-sm shadow-black ${
                                currentPage === item && 'bg-amber-400'
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

export async function getStaticProps() {
    const projects = await loadProjects();

    return {
        props: {
            projects,
        },
    };
}
