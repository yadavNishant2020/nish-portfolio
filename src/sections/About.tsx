import SectionHeading from "../components/SectionHeading"
import animation from "../assets/img/Animation2.json"
import Lottie from "lottie-react"

function About() {
    return (
        <div className="min-h-screen flex items-center">
            <div>
                <SectionHeading Heading={"ABOUT ME"} Subheading={"Know me more."} />
                <div className="px-[7%] flex">
                    <div className="md:flex-1 hidden md:flex justify-center items-center">
                        <Lottie animationData={animation} className='md:w-[80%] w-[25%] md:relative right-5 top-[-5%]' />
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-6">
                        <p className="text-2xl font-semibold">Nishant Singh Yadav</p>
                        <p className="text-lg font-thin text-blue-400">Full Stack Developer</p>
                        <p className="text-lg">
                            👋 Hi, I’m a Front-End Developer from Jhansi, Uttar Pradesh, with a 🎓 B.Tech in Computer Science from Chandigarh University. I build fast, responsive, and user-friendly web & mobile apps using ⚛️ React.js, 📱 React Native, and 💨 Tailwind CSS. <br />
                            <br />
                            With 2+ years of experience 💼 across startups and freelance projects, I focus on clean UI, performance optimization, and scalable front-end solutions. Currently working remotely as a 💻 Sr. Associate Software Engineer at Brahma AI Systems. 🚀
                        </p>
                        <div className="pt-4 md:pt-0 text-center md:text-left">
                            <a href="#contact">
                                <button
                                    type="button"
                                    className="self-center md:self-start border focus:outline-none focus:ring-4 font-medium text-sm px-5 py-2.5 bg-gray-950 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">
                                    Contact Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About