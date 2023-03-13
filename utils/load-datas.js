async function loadSkills() {
    // Call an external API endpoint to get skills
    const res = await fetch('http://localhost:4000/skills');
    const data = await res.json();

    return data;
}

async function loadSoftSkills() {
    const res = await fetch('http://localhost:4000/softSkills');
    const data = await res.json();

    return data;
}

async function loadProjects() {
    const res = await fetch('http://localhost:4000/projects');
    const data = await res.json();

    return data;
}



export { loadSkills, loadSoftSkills , loadProjects };
