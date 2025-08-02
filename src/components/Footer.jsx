import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full py-6 bg-neutral-950 border-t border-white/10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-white/50 font-worksans">
        <span>© {new Date().getFullYear()} EliasLd. All rights reserved.</span>
        <a
          href="https://github.com/eliasld"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors duration-200"
          title="My GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
