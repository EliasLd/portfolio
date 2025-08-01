import FadeInWhenVisible from "../animations/FadeIn.jsx";
import DecryptedText from "../React-Bits/DecryptedText";
import experiences from "../data/experiences";
import ExperienceCard from "../components/ExperienceCard";

function Experiences() {
  return (
    <section id="experiences" className="min-h-screen w-full px-4 py-20 bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full text-white space-y-14">
        <FadeInWhenVisible as="h2" className="text-4xl font-bold text-center font-worksans">
          <DecryptedText text="Experiences" speed={100} animateOn="view" revealDirection="center" />
        </FadeInWhenVisible>

        {experiences.map((exp, i) => (
          <FadeInWhenVisible key={i} delay={0.2 + i * 0.1}>
            <ExperienceCard exp={exp} />
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

export default Experiences;

