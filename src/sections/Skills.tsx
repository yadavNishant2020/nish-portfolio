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
    <div className="relative min-h-screen">
      <SectionHeading
        Heading={"SKILLS"}
        Subheading={"Technologies I've worked with."}
      />
      <div className="flex justify-around flex-col-reverse md:flex-row">
        <div className="min-[1120px]:pl-[7%] flex flex-col gap-12 flex-1">
          {skillCategories.map(({ title, skills }) => (
            <div key={title}>
              <h3 className="font-semibold text-2xl text-center md:text-left mb-4">
                {title}
              </h3>
              <div className="flex gap-8 m-4 pt-2 flex-wrap justify-evenly md:justify-normal">
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

        <div className="md:w-[40%] w-[25%] absolute md:relative right-5 top-[-3%]">
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
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
