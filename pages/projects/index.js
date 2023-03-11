import { loadProjects } from '@/utils/load-datas';

const Projects = ({ projects }) => {
    return <h2>Projects Page</h2>;
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
