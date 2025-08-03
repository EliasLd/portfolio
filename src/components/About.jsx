import FadeInWhenVisible from "../animations/FadeIn.jsx";
import DecryptedText from "../React-Bits/DecryptedText";
import Button from '../components/Button.jsx';
import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineSimCardDownload } from "react-icons/md";

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function About() {
  const age = calculateAge('2004-09-15');

  return (
    <section id="about" className="min-h-screen w-full px-10 py-20 bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full text-white space-y-10">
        <FadeInWhenVisible as="h2" className="text-4xl font-bold text-center font-worksans">
          <DecryptedText
            text="About me"
            speed={100}
            animateOn="view"
            revealDirection="center"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible as="p" delay={0.2} className="text-lg text-white/80 leading-relaxed font-worksans">
          I'm passionate about development in all its forms — from crafting scalable components to building smart utilities that make life easier.
          I love exploring new technologies, learning how things work under the hood, and working in Linux-based environments.
        </FadeInWhenVisible>

        <FadeInWhenVisible as="p" delay={0.3} className="text-lg text-white/80 leading-relaxed font-worksans">
          I'm {age} years old and currently working as a Software Engineer apprentice at <a href="https://www.edf.fr/en/the-edf-group/edf-at-a-glance" className="text-blue-500 transition hover:underline">EDF</a> while pursuing my engineering degree at <a href="https://www.esilv.fr/en/" className="text-blue-500 transition hover:underline">ESILV</a> in Paris.<br />
          I specialize in software development, cloud computing, and cybersecurity. I'm always eager to learn new things and currently looking for an international internship opportunity as part of my academic program.
        </FadeInWhenVisible>

        <FadeInWhenVisible as="p" delay={0.4} className="text-lg text-white/80 leading-relaxed font-worksans">
          Outside of tech, I love to travel and discover new cultures. I'm also into sports — especially running and weight training. I'm deeply passionate about manga and anime, which continue to inspire me in many creative ways.
        </FadeInWhenVisible>

        <FadeInWhenVisible as="div" delay={0.5} className="flex items-center gap-5">
          <Button icon={LuGithub} link="https://github.com/EliasLd" classname="text-white" />
          <Button icon={FaLinkedin} link="https://www.linkedin.com/in/elias-el-abd" classname="text-white" />
          <Button icon={MdOutlineSimCardDownload} link="/CV.pdf" classname="text-white" download />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default About;

