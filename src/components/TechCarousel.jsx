import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import Golang from '../assets/Go.svg';
import Python from '../assets/Python.svg';
import Postgre from '../assets/PostgresSQL.svg';
import Clang from '../assets/Clang.png';
import Cpp from '../assets/Cpp.svg';
import Javascript from '../assets/JavaScript.svg'

function TechCarousel() {
  const svgIcons = [
    { src: Golang, alt: "Golang" },
    { src: Python, alt: "Python" },
    { src: Postgre, alt: "PostgreSQL" },
    { src: Clang, alt: "C" },
    { src: Cpp, alt: "C++" },
    { src: Javascript, alt: "JavaScript" },
  ];

  return (
    <Marquee speed={50} gradient={false} className="py-4">
      <FaReact size={50} className="mx-8 text-cyan-400" />
      <SiGnubash size={50} className="mx-8 text-white" />

      {svgIcons.map((icon, idx) => (
        <img
          key={idx}
          src={icon.src}
          alt={icon.alt}
          className="h-12 w-auto mx-8  transition duration-300"
        />
      ))}
    </Marquee>
  );
}

export default TechCarousel;

