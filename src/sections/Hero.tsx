import { memo, useCallback, useState } from "react";

const Hero = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const downloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/nishant_cv.pdf";
    link.download = "nishant_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section
      className="flex flex-col md:flex-row h-screen gap-4 min-h-screen"
      aria-label="Hero section"
    >
      <div className="flex-1 justify-center items-center hidden md:flex">
        <div className="relative">
          {!imageLoaded && (
            <div className="w-[55%] md:w-3/4 aspect-square bg-gray-800 animate-pulse rounded" />
          )}
          <img
            src="/me.jpg"
            alt="Nishant Yadav - Developer, Designer, Coder"
            className={`w-[55%] md:w-3/4 transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center text-center md:items-baseline md:text-left">
        <header className="flex flex-col gap-4 font-semibold text-7xl lg:text-8xl md:pt-0">
          <h1 className="sr-only">Nishant Yadav - Portfolio</h1>
          <p className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Developer.
          </p>
          <p className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Designer.
          </p>
          <p className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Coder.
          </p>
        </header>
        <button
          type="button"
          onClick={downloadCV}
          className="mt-6 self-center md:self-start border focus:outline-none focus:ring-4 font-medium text-sm px-5 py-2.5 bg-gray-950 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 transition-all duration-200 hover:scale-105"
          aria-label="Download Nishant's CV"
        >
          Download CV
        </button>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
