import SectionHeading from '../components/SectionHeading';
import skillsData from '../assets/data/skillsData.json';
import SkillsComponent from '../components/SkillsComponent';
import { Player } from '@lottiefiles/react-lottie-player';

function Skills() {
    const frontendSkills = skillsData.skills.filter(skill => skill.heading === "Frontend");
    const backendSkills = skillsData.skills.filter(skill => skill.heading === "Backend");
    const databaseSkills = skillsData.skills.filter(skill => skill.heading === "Database");

    return (
        <div>
            <SectionHeading Heading={"SKILLS"} Subheading={"Technologies I've worked with."} />
            <div className='pl-[7%] flex flex-col gap-7'>
                <div>
                    <p className='font-semibold text-2xl'>Frontend</p>
                    <div className='flex gap-8 m-4 pt-2'>
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
                    <p className='font-semibold text-2xl'>Backend</p>
                    <div className='flex gap-8 m-4 pt-2'>
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
                    <p className='font-semibold text-2xl'>Database</p>
                    <div className='flex gap-8 m-4 pt-2'>
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
            <Player src={"https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"} className='w-100 ' />
        </div>
    );
}

export default Skills;
