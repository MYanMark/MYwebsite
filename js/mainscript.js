// Button switch functionality for "About Me"
function showContent(sectionId) {
    const sections = document.querySelectorAll('#about-page .about-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}