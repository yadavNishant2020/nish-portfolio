export default function Intro() {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/nishant_cv.pdf';
        link.download = 'nishant_cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="flex flex-col md:flex-row h-screen gap-4 min-h-screen">
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
                    onClick={downloadCV}
                    className="mt-6 self-center md:self-start border focus:outline-none  focus:ring-4  font-medium text-sm px-5 py-2.5 bg-gray-950 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
                >
                    Download CV
                </button>
            </div>
        </section>
    );
}
