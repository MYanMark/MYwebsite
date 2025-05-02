// Load the navigation bar
fetch('navigationbar.html') // Ensure the file is correctly named and used.
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Error loading navigation bar:', error));

// Load the footer
fetch('footer.html') // Ensure the correct footer file is used.
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

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