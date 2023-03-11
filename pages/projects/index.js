import { loadProjects } from '@/utils/load-datas';
import Header from '@/components/Header';
import projectCard from '@/components/projectCard';

const Projects = ({ projects }) => {
    return (
        <div className='w-full px-3 font-lato space-y-12 mb-16'>
            <Header
                pageTitle={'My Projects'}
                pageDesc={
                    "Explore my frontend development projects and experience with HTML, CSS, JavaScript, and frameworks like React, showcasing responsive designs and intuitive user interfaces."
                }
            />
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
