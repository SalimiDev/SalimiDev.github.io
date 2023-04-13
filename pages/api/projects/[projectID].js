import { projects } from '@/data/projectsData';

export default async function handler(req, res) {
    const { projectID } = req.query;

    if (req.method === 'GET') {
        const project = projects.filter(project => project.id === Number(projectID));

        // Return the single project data
        res.status(200).json(...project);
    } else {
        res.status(400).json({ message: 'Invalid HTTP method.' });
    }
}
