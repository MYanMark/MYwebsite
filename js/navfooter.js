
// Load the navigation bar
fetch('navigationbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Dynamically generate project links inside the navigation dropdown
        const navProjectsMenu = document.getElementById('nav-projects');
        if (navProjectsMenu) {
            projects.forEach(project => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = project.link;
                a.textContent = project.title;
                li.appendChild(a);
                navProjectsMenu.appendChild(li);
            });
        }
    })
    .catch(error => console.error('Error loading navigation bar:', error));

// Load the footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
