import SectionHeading from '../components/SectionHeading';
import skillsData from '../assets/data/skillsData.json';
import SkillsComponent from '../components/SkillsComponent';
import Lottie from "lottie-react";
import animation from "../assets/img/Animation3.json"
function Skills() {
    const frontendSkills = skillsData.skills.filter(skill => skill.heading === "Frontend");
    const backendSkills = skillsData.skills.filter(skill => skill.heading === "Backend");
    const databaseSkills = skillsData.skills.filter(skill => skill.heading === "Others");

    return (
        <div className='relative'> 
            <SectionHeading Heading={"SKILLS"} Subheading={"Technologies I've worked with."} />
            <div className='flex justify-around flex-col-reverse md:flex-row '>
                <div className='min-[1120px]:pl-[7%] flex flex-col gap-12 flex-1'>
                    <div>
                        <p className='font-semibold text-2xl text-center md:text-left'>Frontend</p>
                        <div className='flex gap-8 m-4 pt-2 flex-wrap justify-evenly md:justify-normal'>
                            {frontendSkills.map((skill, index) => (
                                <SkillsComponent
                                    key={index}
                                    Heading={skill.heading}
                                    ImageSource={skill.imageSource}
                                    Name={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl text-center md:text-left'>Backend</p>
                        <div className='flex gap-8 m-4 pt-2 flex-wrap justify-evenly md:justify-normal'>
                            {backendSkills.map((skill, index) => (
                                <SkillsComponent
                                    key={index}
                                    Heading={skill.heading}
                                    ImageSource={skill.imageSource}
                                    Name={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-2xl text-center md:text-left'>Others</p>
                        <div className='flex gap-8 m-4 pt-2 flex-wrap justify-evenly md:justify-normal'>
                            {databaseSkills.map((skill, index) => (
                                <SkillsComponent
                                    key={index}
                                    Heading={skill.heading}
                                    ImageSource={skill.imageSource}
                                    Name={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Lottie animationData={animation} className='md:w-[40%] w-[25%] absolute md:relative  right-5 top-[-3%] ' />
            </div>    
        </div>
    );
}

export default Skills;
