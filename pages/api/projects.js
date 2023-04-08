import { projects } from '@/data/projectsData';

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ projects });
    } else {
        res.status(400).json({ message: 'Invalid HTTP method.' });
    }
}
