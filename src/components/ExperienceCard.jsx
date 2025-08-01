function ExperienceCard({ exp }) {
  return (
    <div className="flex flex-col gap-4 p-6 border border-white/10 rounded-xl bg-white/5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold font-worksans">
            <a href={exp.link} className="hover:underline text-white/90">
              {exp.title} @ {exp.company}
            </a>
          </h3>
          <p className="text-sm text-white/60">{exp.duration}</p>
        </div>
        <img src={exp.logo} alt={exp.company} className="w-15 h-15 object-contain" />
      </div>

      <ul className="list-disc pl-5 text-white/80 text-base leading-relaxed">
        {exp.description.map((line, j) => (
          <li key={j} className="mb-2">{line}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2">
        {exp.techs.map((tech, k) => (
          <span
            key={k}
            className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;

