function Button({ icon: Icon, link, download = false, children }) {
  return (
    <a
      href={link}
      download={download}
      className="group flex items-center gap-2 px-3 py-2 rounded-xl text-white hover:text-cyan-400 transition-colors duration-200"
    >
      {Icon && (
        <Icon
          className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 ease-in-out group-hover:rotate-5"
        />
      )}
      {children}
    </a>
  );
}

export default Button;

