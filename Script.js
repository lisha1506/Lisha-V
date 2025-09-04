// Create Projects Section

const projectsSection = document.createElement("section");

projectsSection.id = "projects";

projectsSection.innerHTML = `<h2>My Projects</h2>`;

const projectList = document.createElement("div");

projectList.className = "projects";

const projects = [

  { title: "Portfolio Website", desc: "A personal website to showcase my skills and projects." },

  { title: "Library Management", desc: "A system to manage books and student records efficiently." },

  { title: "Weather App", desc: "An app that shows real-time weather updates using an API." }

];

projects.forEach(p => {

  const card = document.createElement("div");

  card.className = "project-card";

  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;

  projectList.appendChild(card);

});

projectsSection.appendChild(projectList);

app.appendChild(projectsSection);

// Create Contact Section

const contactSection = document.createElement("section");

contactSection.id = "contact";

contactSection.innerHTML = `

  <h2>Contact Me</h2>

  <p>Email: lishav@example.com</p>

  <p>Phone: +91 98765 43210</p>

`;

app.appendChild(contactSection);

// Create Footer

const footer = document.createElement("footer");

footer.innerHTML = `<p>&copy; 2025 Lisha V | All Rights Reserved</p>`;

app.appendChild(footer);
