import { skills } from '@/data/skillsData';

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ skills });
    } else {
        res.status(400).json({ message: 'Invalid HTTP method.' });
    }
}
