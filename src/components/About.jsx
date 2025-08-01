import { motion } from "framer-motion";
import DecryptedText from '../React-Bits/DecryptedText.jsx'

function About() {
  return (
    <section id="about" className="min-h-screen w-full px-4 py-20 bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full text-white space-y-10">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center font-worksans"
        >
          <DecryptedText
            text="About me"
            speed={100}
            animateOn="view"
            revealDirection="center"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-white/80 leading-relaxed font-worksans"
        >
          I'm passionate about development in all its forms — from crafting scalable components to building smart utilities that make life easier.
          I love exploring new technologies, learning how things work under the hood, and working in Linux-based environments.
        </motion.p>


        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-white/80 leading-relaxed font-worksans"
        >
          I'm 21 years old and currently working as a Software Engineer apprentice at <a href="https://www.edf.fr/en/the-edf-group/edf-at-a-glance" className="text-blue-500 transition hover:underline">EDF</a> while pursuing my engineering degree at <a href="https://www.esilv.fr/en/" className="text-blue-500 transition hover:underline"
          >ESILV</a> in Paris.<br />
          I specialize in software development, cloud computing, and cybersecurity. I'm always eager to learn new things and currently looking for an international internship opportunity as part of my academic program.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-white/80 leading-relaxed font-worksans"
        >
          Outside of tech, I love to travel and discover new cultures. I'm also into sports — especially running and weight training. I'm deeply passionate about manga and anime, which continue to inspire me in many creative ways.
        </motion.p>
      </div>
    </section>
  );
}

export default About;

