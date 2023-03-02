export async function loadPosts() {
    // Call an external API endpoint to get skills
    const res = await fetch('http://localhost:8000/skills');
    const data = await res.json();

    return data;
}
