export default function Intro() {
    return (
        <section className='flex h-screen '>
            <div className="flex flex-1 justify-center items-center  bg-[url('/BlackWhite.webp')] bg-no-repeat bg-cover bg-center" >
                <img src="/me.jpg" alt="" width={450} height={450} />
            </div>
            <div className='flex flex-1 flex-col justify-center items-center'>
                <div className="font-semibold text-8xl pt-[0%]">
                    Developer.
                    <br />
                    Designer.
                    <br />
                    Coder.
                    <br/>
                    <button type="button" className="text-gray-900 bg-white border border-gray-50 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-2.5 mb-2 dark:bg-gray-950 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Download CV</button>

                </div>

            </div>
        </section>
    )
}
