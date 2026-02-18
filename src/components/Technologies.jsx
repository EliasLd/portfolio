import FadeInWhenVisible from "../animations/FadeIn.jsx";
import DecryptedText from "../React-Bits/DecryptedText";
import TechCarousel from "../components/TechCarousel.jsx";
import Jenkins from '../assets/Jenkins.svg';
import Neovim from '../assets/Neovim.svg';
import Vscode from '../assets/vscode.svg';
import Docker from '../assets/docker.svg';
import Podman from '../assets/podman.svg';
import Git from '../assets/Git.svg';
import Gitlab from '../assets/gitlab.svg';

function Technologies() {
  return (
    <section
      id="technologies"
      className="min-h-screen px-6 sm:px-10 md:px-20 py-20 bg-neutral-950 text-white flex justify-center items-center"
    >
      <div className="max-w-5xl w-full space-y-14">
        <FadeInWhenVisible as="h2" className="text-4xl font-bold text-center font-worksans">
          <DecryptedText
            text="Technologies"
            speed={100}
            animateOn="view"
            revealDirection="center"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible as="div" delay={0.2} className="space-y-6">
          <p className="text-white/80 leading-relaxed text-lg">
            I primarily work on <span className="font-semibold text-white">Linux environments</span>, mostly
            <span className="text-white"> Arch (btw) </span> and <span className="text-white">Debian</span>, but I'm perfectly comfortable working on
            <span className="text-white"> Windows</span> as well when required.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible as="div" delay={0.3} className="space-y-4">
          <p className="text-white/80 leading-relaxed text-lg">
            I enjoy working with a wide variety of programming languages — each one brings something new to the table!
          </p>
          <TechCarousel />
        </FadeInWhenVisible>

        <FadeInWhenVisible as="div" delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed text-lg">
              I rely on powerful tools to automate and streamline my workflow:
            </p>
            <div className="flex gap-6 text-4xl">
              <img src={Docker} alt="Docker" className="w-auto h-12" />
              <img src={Podman} alt="Podman" className="w-auto h-12" />
              <img src={Jenkins} alt="Jenkins" className="w-auto h-12" />
              <img src={Git} alt="Git" className="w-auto h-12" />
              <img src={Gitlab} alt="Gitlab" className="w-auto h-12" />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed text-lg">
              I'm a big fan of <span className="text-white">Neovim</span> (yes, I probably spend more time configuring it than coding...),
              but I also use <span className="text-white">VSCode</span> sometimes.
            </p>
            <div className="flex gap-6 text-4xl">
              <img src={Neovim} alt="Neovim" className="w-auto h-12" />
              <img src={Vscode} alt="Visual studio code" className="w-auto h-12" />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default Technologies;

