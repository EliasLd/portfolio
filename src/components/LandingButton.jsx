function LandingButton({ icon: Icon, link, download = false, children }) {
  return (
    <a
      href={link}
      download={download}
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-white bg-transparent
             hover:bg-cyan-400 hover:text-black transform hover:scale-105 
             transition-all duration-200 ease-in-out"
    >
      {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10" />}
      {children}
    </a>
  );
}

export default LandingButton;
