function ProjectCard({ title, description, techs, illustration, link }) {
  return (
    <div
      className="flex flex-col gap-y-3 md:gap-y-1 justify-between p-6 border border-white/10 rounded-xl bg-white/5 overflow-hidden
             md:h-[550px] lg:h-[500px]"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={`src/assets/${illustration}`}
          alt={title}
          className="w-full h-52 object-cover rounded-lg border border-white/10 transition-transform duration-300 ease-in-out hover:scale-102"
        />
      </a>
      <h3 className="text-2xl font-semibold text-white font-worksans">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
