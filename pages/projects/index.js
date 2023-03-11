import { loadProjects } from '@/utils/load-datas';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';

const Projects = ({ projects }) => {
    return (
        <div className='w-full px-4 space-y-12 mb-16'>
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
        </div>
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
