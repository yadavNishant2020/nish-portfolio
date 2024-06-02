import SectionHeading from "../components/SectionHeading"
import animation from "../assets/img/Animation2.json"
import Lottie from "lottie-react"

function About() {
    return (
        <div className="min-h-screen flex  items-center">
            <div>
                <SectionHeading Heading={"ABOUT ME"} Subheading={"Know me more."} />
                <div className="px-[7%] flex ">
                    <div className="md:flex-1  hidden md:flex justify-center items-center">
                        <Lottie animationData={animation} className='md:w-[80%] w-[25%]  md:relative  right-5 top-[-5%] ' />
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-6 ">
                        <p className="text-2xl font-semibold">Nishant Singh Yadav</p>
                        <p className="text-lg font-thin text-blue-400">Front-end Developer</p>
                        <p className="text-lg">Hello! 🎉 I'm a professional Front-End Developer from Mohali (Punjab), holding a Bachelor's degree in Computer Science from Chandigarh University. 🎓 Since my first year of college, I have been passionate about web development. 💻 With over 2 years of experience, my focus is on creating attractive and functional websites and applications. I also have a love for building interactive UIs and engaging in side projects. 🚀</p>
                        <div className="pt-4 md:pt-0 text-center md:text-left">
                            <a href="#contact">
                            <button
                                type="button"
                                className="self-center md:self-start focus:outline-none focus:ring-4 font-medium text-sm px-5 py-2.5 bg-gray-950 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">
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