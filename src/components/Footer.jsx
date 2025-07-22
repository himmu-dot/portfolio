import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 px-6 py-10 text-center">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 hover:text-yellow-500 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 hover:text-yellow-500 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 hover:text-yellow-500 transition-colors"
        >
          <FaCode />
        </a>
      </div>
      <p className="text-sm mt-2">
        &copy; {new Date().getFullYear()} Himanshu | All rights reserved
      </p>
    </footer>
  );
}
