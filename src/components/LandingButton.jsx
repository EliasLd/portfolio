function LandingButton({ icon: Icon, link, download = false, children }) {
  return (
    <a
      href={link}
      download={download}
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-white hover:text-cyan-400 transition-colors duration-200"
    >
      {Icon && (
        <Icon
          className="w-6 h-6 sm:w-10 sm:h-10 transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
      )}
      {children}
    </a>
  );
}

export default LandingButton;

