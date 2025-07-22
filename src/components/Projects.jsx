export default function Projects() {
  const projects = [
    {
      title: "Wanderlust (Full Stack Travel Listing Platform)",
      description: `A full-stack MERN web app for listing and exploring travel stays.
            Includes user authentication, listings with map integration, and CRUD operations.
            Built using MongoDB, Express.js, React, Node.js, Bootstrap, Mapbox/OpenStreetMap.
            Features image uploads, search, and responsive design.`,
      liveLink: "https://project1-kr3r.onrender.com/listings", // 🔁 Replace this
      githubLink: "https://github.com/himmu-dot/WanderLust", // 🔁 Replace this
    },
    // Add more projects here
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white text-gray-800 scroll-mt-[100px] p-6"
    >
      <h2 className="text-3xl font-bold mb-6 underline underline-offset-4 decoration-black">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-300 rounded-xl p-5 shadow hover:shadow-md transition duration-300"
          >
            <h3 className="font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
              >
                Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
