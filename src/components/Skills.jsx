export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white scroll-mt-[100px] p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 underline underline-offset-4 decoration-yellow-400">
          Skills
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium">
          {/* Frontend */}
          <li className="bg-gray-800 p-3 rounded-md text-center">HTML</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">CSS</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">JavaScript</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">React</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">Tailwind CSS</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">Bootstrap</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">EJS</li>

          {/* Backend */}
          <li className="bg-gray-800 p-3 rounded-md text-center">Node.js</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">Express.js</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">RESTful APIs</li>

          {/* Database */}
          <li className="bg-gray-800 p-3 rounded-md text-center">MongoDB</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">MySQL</li>

          {/* Programming Languages */}
          <li className="bg-gray-800 p-3 rounded-md text-center">Java (DSA)</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">Python</li>

          {/* Tools & Platforms */}
          <li className="bg-gray-800 p-3 rounded-md text-center">Git</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">GitHub</li>
          <li className="bg-gray-800 p-3 rounded-md text-center">Postman</li>
          

          
        </ul>
      </div>
    </section>
  );
}
