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
      className="flex flex-col md:flex-row h-screen gap-4 min-h-screen px-4 sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      {/* Mobile Image - Shown on mobile only */}
      <div className="flex justify-center items-center md:hidden pt-16 pb-8">
        <div className="relative w-64 h-64">
          {!imageLoaded && (
            <div className="w-full h-full bg-gray-800 animate-pulse rounded-full" />
          )}
          <img
            src="/me.jpg"
            alt="Nishant Yadav - Developer, Designer, Coder"
            className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
      </div>

      {/* Desktop Image - Hidden on mobile */}
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

      {/* Content Section */}
      <div className="flex flex-1 flex-col  md:justify-center items-center text-center md:items-baseline md:text-left px-4 sm:px-0">
        <header className="flex flex-col gap-2 sm:gap-4 font-semibold text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <h1 className="sr-only">Nishant Yadav - Portfolio</h1>
          <p className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Developer.
          </p>
          <p className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Designer.
          </p>
          <p className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Coder.
          </p>
        </header>
        <button
          type="button"
          onClick={downloadCV}
          className="mt-6 sm:mt-8 self-center md:self-start border focus:outline-none focus:ring-4 font-medium text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-950 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 transition-all duration-200 hover:scale-105"
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
