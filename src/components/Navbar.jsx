import { FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-6 py-2 flex gap-3 xs:gap-2 sm:gap-6 shadow-lg items-center">
      <a href="#home">
        <FaHome className="w-auto h-5 text-white hover:text-cyan-400 transition-colors duration-200" />
      </a>
      <a href="#about" className="text-white hover:text-cyan-400 transition-colors duration-200 font-semibold">
        About
      </a>
      <a href="#technologies" className="text-white hover:text-cyan-400 transition-colors duration-200 font-semibold">
        Techs
      </a>
      <a href="#experiences" className="text-white hover:text-cyan-400 transition-colors duration-200 font-semibold">
        Experiences
      </a>
      <a href="#projects" className="text-white hover:text-cyan-400 transition-colors duration-200 font-semibold">
        Projects
      </a>
    </nav >
  );
}

export default Navbar;

