import { loadProjects } from '@/utils/load-datas';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
    return (
        <motion.div
            className='w-full px-4 space-y-12 mb-16'
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
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>
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
