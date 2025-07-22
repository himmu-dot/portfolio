export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-5 px-6 shadow-md flex justify-between items-center sticky top-0 z-50">

      <div className="text-2xl font-extrabold tracking-wide">HIMANSHU's Portfolio</div>

      <ul className="flex space-x-8 text-base font-medium">
        <li>
          <a
            href="#about"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105 inline-block"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105 inline-block"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105 inline-block"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#achievements"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105 inline-block"
          >
            Achievements
          </a>
        </li>
        <li>
          <a
            href="/HIMANSHU_Resume_Final_Updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400">
             Resume
           </a> 
        </li>
      </ul>
    </nav>
  );
}
