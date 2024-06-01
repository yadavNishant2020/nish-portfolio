import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const listStyle = 'ms-3 transition-all duration-200 ease-in cursor-pointer hover:text-gray-100 text-2xl min-[1120px]:text-lg';

    return (
        <>
            <div className="max-[1120px]:flex hidden items-center justify-between p-4 bg-[#111111] text-gray-400 fixed top-0 left-0 right-0 z-50">
                <img src="/logo.png" alt="Logo" width={100} className="hover:opacity-90" />
                <button onClick={toggleSidebar} className="text-gray-400 focus:outline-none">
                    {isOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-full min-[1120px]:w-64 h-screen bg-[#111111] text-gray-400 transform ${isOpen ? 'translate-x-0' : '-translate-x-full '} transition-transform duration-300 ease-in-out min-[1120px]:translate-x-0`} aria-label="Sidebar">
                <div className="flex items-center justify-center h-full">
                    <ul className="flex flex-col space-y-2 font-sans text-lg gap-7">
                        <li className="cursor-pointer min-[1120px]:block hidden"><img src="/logo.png" alt="" width={170} className="mb-16 transition-all duration-200 ease-in hover:opacity-90" /></li>
                        <li>
                            <a href="#">
                                <span className={listStyle}>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className={listStyle}>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className={listStyle}>Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className={listStyle}>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className={listStyle}>Contact Me</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            {isOpen && (
                <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 z-30 min-[1120px]:hidden"></div>
            )}
        </>
    );
}
