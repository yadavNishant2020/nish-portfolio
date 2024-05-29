export default function Intro() {
    return (
        <section className="flex flex-col md:flex-row h-screen gap-4">
            <div className="flex-1 justify-center items-center hidden md:flex">
                <img src="/me.jpg" alt="Profile" className="w-[55%] md:w-3/4 " />
            </div>
            <div className="flex flex-1 flex-col justify-center items-center text-center md:items-baseline md:text-left">
                <div className="flex flex-col gap-4 font-semibold text-7xl lg:text-8xl md:pt-0">
                    <p>Developer.</p>
                    <p>Designer.</p>
                    <p>Coder.</p>
                </div>
                <button 
                    type="button" 
                    className="mt-6 self-center md:self-start text-gray-900 bg-white border border-gray-50 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-950 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    Download CV
                </button>
            </div>
        </section>
    );
}
