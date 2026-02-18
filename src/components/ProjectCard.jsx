import chip8ppImg from '../assets/slippery_slope.png';
import sereniteImg from '../assets/serenite.png';
import scanscraperImg from '../assets/scan-scraper.png';
import pokemonppImg from '../assets/pokemonpp.png';
import gotalkImg from '../assets/gotalk.svg';
import portfolioImg from '../assets/pt.jpg';
import rofiMusicDlImg from '../assets/rofi-music-dl.png'
import webgohookImg from '../assets/github-network.jpg'

const illustrations = {
  chip8: chip8ppImg,
  serenite: sereniteImg,
  scan: scanscraperImg,
  pokemonpp: pokemonppImg,
  gotalk: gotalkImg,
  rofiMusic: rofiMusicDlImg,
  pt: portfolioImg,
  webgohook: webgohookImg

}

function ProjectCard({ title, description, techs, illustration, link, website }) {
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
        <div className="w-full aspect-[16/9] rounded-lg border border-white/10 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-102">
          <img
            src={illustrations[illustration]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </a>
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-semibold text-white font-worksans">{title}</h3>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-3 py-1 bg-transparent text-white transition-colors duration-300 ease-in-out
                       hover:bg-white hover:text-black sm:font-medium text-sm sm:text-base"
          >
            Visit
          </a>
        )}
      </div>
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
