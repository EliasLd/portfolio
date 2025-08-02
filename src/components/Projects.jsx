import FadeInWhenVisible from "../animations/FadeIn.jsx";
import DecryptedText from "../React-Bits/DecryptedText";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-10 sm:px-10 md:px-20 py-20 bg-neutral-900 flex justify-center items-center">
      <div className="max-w-6xl w-full text-white space-y-14">
        <FadeInWhenVisible as="h2" className="text-4xl font-bold text-center font-worksans">
          <DecryptedText text="Projects" speed={100} animateOn="view" revealDirection="center" />
        </FadeInWhenVisible>

        <div className="w-full px-2 sm:px-0 flex justify-center">
          <div className="grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 gap-6 max-w-5xl w-full">
            {projects.map((project, i) => (
              <FadeInWhenVisible
                key={i}
                as="div"
                delay={0.2 + i * 0.1}
              >
                <ProjectCard {...project} />
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

