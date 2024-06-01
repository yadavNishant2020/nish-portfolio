export default function Sidebar() {
    const listStyle = 'ms-3 transition-all duration-200 ease-in cursor-pointer hover:text-gray-100';
    return (
        <>

          

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-gray-400 bg-[#111111]" aria-label="Sidebar">
                <div className="flex items-center justify-center h-full">
                    <ul className="flex flex-col space-y-2 font-sans text-lg gap-7 ">
                        <li className="cursor-pointer "><img src="/logo.png" alt="" width={170} className="mb-16 transition-all duration-200 ease-in hover:opacity-90" /></li>
                        <li>
                            <a href="#" >
                                <span className={listStyle}>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <span className={listStyle}>Projects</span>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <span className={listStyle}>Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <span className={listStyle}>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <span className={listStyle}>Contact Me</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}