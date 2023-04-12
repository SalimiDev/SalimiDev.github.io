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

    const images = [
        {
            id: 1,
            src: 'https://cdn.pixabay.com/photo/2023/02/04/13/47/butterfly-7767228_1280.jpg',
            thumb: 'https://cdn.pixabay.com/photo/2023/02/04/13/47/butterfly-7767228_1280.jpg',
            alt: 'Image 1',
        },
        {
            id: 2,
            src: 'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
            thumb: '/https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
            alt: 'Image 2',
        },
        {
            id: 3,
            src: 'https://cdn.pixabay.com/photo/2023/03/27/13/48/squirrel-7880791_1280.jpg',
            thumb: '/https://cdn.pixabay.com/photo/2023/03/27/13/48/squirrel-7880791_1280.jpg',
            alt: 'Image 3',
        },
    ];

    return (
        <div>
            <h2>{project.title}</h2>
            <Slider  images={images} />
        </div>
    );
};

export default ProjectDetail;
