import { useRouter } from 'next/router';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import Slider from '@/components/Slider';

const ProjectDetail = ({ projects }) => {
    if (!projects) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <VscLoading size={50} className='dark:text-white animate-spin' />
            </div>
        );
    }

    return (
        <div>
            <h2>{projects.title}</h2>
            <Slider images={projects?.sliderImages} />
        </div>
    );
};

export default ProjectDetail;

export async function getStaticPaths() {
    const { data } = await axios.get('http://localhost:3000/api/projects');

    const paths = data.map(project => {
        return {
            params: { projectDetail: `${project.id}` },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;

    const { data } = await axios.get(`http://localhost:3000/api/projects/${params.projectDetail}`);

    return {
        props: {
            projects: data,
        },
    };
}
