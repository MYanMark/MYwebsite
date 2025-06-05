
// Find the portfolio container
const portfolioContainer = document.getElementById("portfolio-container");

// Dynamically create and insert project cards
projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "project";

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-details">
            <button onclick="location.href='${project.link}'">View Project</button>
        </div>
    `;

    portfolioContainer.appendChild(projectCard);
});

