import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import Slider from '@/components/Slider';

const ProjectDetail = () => {
    const [project, setProject] = useState(null);
    const { query } = useRouter();

    //user selected data
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('http://localhost:3000/api/projects');
                const selectedProject = data.projects.find(project => project.id === Number(query.projectid));
                if (selectedProject) {
                    setProject(selectedProject);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [query.projectid]);

    if (!project) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <VscLoading size={50} className='dark:text-white animate-spin' />
            </div>
        );
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <Slider images={project?.sliderImages} />
        </div>
    );
};

export default ProjectDetail;
