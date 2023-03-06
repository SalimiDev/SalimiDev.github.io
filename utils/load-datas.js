async function loadSkills() {
    // Call an external API endpoint to get skills
    const res = await fetch('http://localhost:8000/skills');
    const data = await res.json();

    return data;
}

async function loadSoftSkills() {
    const res = await fetch('http://localhost:8000/softSkills');
    const data = await res.json();

    return data;
}

export { loadSkills, loadSoftSkills };
