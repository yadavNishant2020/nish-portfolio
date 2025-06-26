import { memo, useMemo, lazy, Suspense } from "react";
import SectionHeading from "../components/SectionHeading";
import skillsData from "../assets/data/skillsData.json";
import SkillsComponent from "../components/SkillsComponent";
import animationData from "../assets/img/Animation3.json";

// Lazy load Lottie to reduce initial bundle size
const Lottie = lazy(() => import("lottie-react"));

const Skills = memo(() => {
  const { frontendSkills, backendSkills, otherSkills } = useMemo(() => {
    const skills = skillsData.skills;
    return {
      frontendSkills: skills.filter((skill) => skill.heading === "Frontend"),
      backendSkills: skills.filter((skill) => skill.heading === "Backend"),
      otherSkills: skills.filter((skill) => skill.heading === "Others"),
    };
  }, []);

  const skillCategories = useMemo(
    () => [
      { title: "Frontend", skills: frontendSkills },
      { title: "Backend", skills: backendSkills },
      { title: "Others", skills: otherSkills },
    ],
    [frontendSkills, backendSkills, otherSkills]
  );

  return (
    <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <SectionHeading
        Heading={"SKILLS"}
        Subheading={"Technologies I've worked with."}
      />

      <div className="flex flex-col xl:flex-row gap-6 xl:gap-10">
        {/* Animation - Top on mobile, right on desktop */}
        <div className="w-full xl:w-2/5 flex justify-center xl:justify-end xl:order-2">
          <div className="w-64 sm:w-80 lg:w-96 xl:w-full max-w-md">
            <Suspense
              fallback={
                <div className="w-full h-64 bg-gray-800 animate-pulse rounded" />
              }
            >
              <Lottie
                animationData={animationData}
                className="w-full h-auto"
                loop={true}
                autoplay={true}
              />
            </Suspense>
          </div>
        </div>

        {/* Skills Content */}
        <div className="flex-1 xl:order-1">
          <div className="flex flex-col gap-6 sm:gap-8">
            {skillCategories.map(({ title, skills }) => (
              <div key={title} className="w-full">
                <h3 className="font-semibold text-xl sm:text-2xl text-center lg:text-left mb-3 sm:mb-4">
                  {title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
                  {skills.map((skill, index) => (
                    <SkillsComponent
                      key={`${title}-${skill.name}-${index}`}
                      ImageSource={skill.imageSource}
                      Name={skill.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
