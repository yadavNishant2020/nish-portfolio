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
      <div className="flex items-center flex-col gap-2">
        <div className="relative w-20 h-20 flex items-center justify-center rounded-full p-4 bg-white">
          {!imageLoaded && !imageError && (
            <div className="w-12 h-12 bg-gray-300 animate-pulse rounded" />
          )}
          {!imageError && (
            <img
              src={ImageSource}
              alt={`${Name} icon`}
              className={`w-12 h-12 object-contain transition-opacity duration-300 ${
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
            <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-lg font-bold">
              {Name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <p className="font-thin text-lg">{Name}</p>
      </div>
    );
  }
);

SkillsComponent.displayName = "SkillsComponent";

export default SkillsComponent;
