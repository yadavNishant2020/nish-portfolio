import SectionHeading from "../components/SectionHeading";
import animation from "../assets/img/Animation2.json";
import Lottie from "lottie-react";

function About() {
  return (
    <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-full">
        <SectionHeading Heading={"ABOUT ME"} Subheading={"Know me more."} />
        <div className="px-4 sm:px-[7%] flex flex-col lg:flex-row gap-6 lg:gap-0">
          {/* Animation - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:flex lg:flex-1 justify-center items-center">
            <Lottie
              animationData={animation}
              className="w-[60%] xl:w-[80%] lg:relative right-5 top-[-5%]"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-5">
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-semibold">
                Nishant Singh Yadav
              </p>
              <p className="text-base sm:text-lg font-thin text-blue-400 mt-2">
                Full Stack Developer
              </p>
            </div>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
              👋 Hi, I'm a Front-End Developer from Jhansi, Uttar Pradesh, with
              a 🎓 B.Tech in Computer Science from Chandigarh University. I
              build fast, responsive, and user-friendly web & mobile apps using
              ⚛️ React.js, 📱 React Native, and 💨 Tailwind CSS.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              With 2+ years of experience 💼 across startups and freelance
              projects, I focus on clean UI, performance optimization, and
              scalable front-end solutions. Currently working remotely as a 💻
              Sr. Associate Software Engineer at Brahma AI Systems. 🚀
            </p>

            <div className="pt-3 md:pt-0 text-center lg:text-left">
              <a href="#contact">
                <button
                  type="button"
                  className="border focus:outline-none focus:ring-4 font-medium text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-950 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
