import { memo, useState } from "react";

interface SkillsComponentProps {
  Heading: string;
  ImageSource: string;
  Name: string;
}

const SkillsComponent = memo(
  ({ ImageSource, Name }: Omit<SkillsComponentProps, "Heading">) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
      <div className="flex items-center flex-col gap-2 sm:gap-3 w-full max-w-[100px] mx-auto">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full p-3 sm:p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          {!imageLoaded && !imageError && (
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 animate-pulse rounded" />
          )}
          {!imageError && (
            <img
              src={ImageSource}
              alt={`${Name} icon`}
              className={`w-8 h-8 sm:w-12 sm:h-12 object-contain transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          )}
          {imageError && (
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-sm sm:text-lg font-bold">
              {Name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <p className="font-thin text-xs sm:text-sm lg:text-base text-center leading-tight break-words">
          {Name}
        </p>
      </div>
    );
  }
);

SkillsComponent.displayName = "SkillsComponent";

export default SkillsComponent;
