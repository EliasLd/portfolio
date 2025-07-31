import RotatingText from '../React-Bits/RotatingText.jsx'

function Landing() {
  return (
    <div className="w-full h-screen flex flex-col gap-y-10 justify-center pointer-events-none">
      <p className="font-worksans font-bold text-5xl sm:text-8xl text-white text-center">
        <span className="font-JetBrainsMono text-green-400 italic">$</span> echo "Elias"
      </p>
      <div className="flex flex-row gap-x-2 justify-center items-center text-white font-JetBrainsMono text-xl sm:text-3xl font-semibold" >
        <p>Compiling</p>
        <RotatingText
          texts={['dreams', 'ideas', 'visions', 'stories', 'emotions']}
          mainClassName="inline-block px-2 sm:px-2 md:px-3 bg-blue-700 items-center text-white font-worksans font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <p>into code</p>
      </div>
    </div >
  );
}

export default Landing;
