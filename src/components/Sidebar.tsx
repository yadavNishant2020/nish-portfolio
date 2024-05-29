export default function Sidebar() {
    const listStyle = 'ms-3 transition-all duration-200 ease-in cursor-pointer hover:text-gray-100';
    return (
        <>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

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