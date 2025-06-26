interface SectionHeadingProps {
  Heading: string;
  Subheading: string;
}

function SectionHeading({ Heading, Subheading }: SectionHeadingProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-[7%] py-0 mt-6 sm:mt-8 mb-6 sm:mb-8">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pb-3 sm:pb-4 text-center tracking-wide">
        {Heading}
      </p>
      <p className="pb-3 sm:pb-4 font-thin text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center text-gray-300 max-w-4xl mx-auto leading-relaxed">
        {Subheading}
      </p>
    </div>
  );
}

export default SectionHeading;
