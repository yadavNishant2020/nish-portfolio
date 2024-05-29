
function SkillsComponent({ImageSource, Name}:any) {
    return (
        <div>
            <div>
                <div className='flex items-center flex-col gap-2'>
                    <div className=' w-20 h-20 flex items-center rounded-full p-4 bg-white'><img src={ImageSource} alt="NextJS" /></div>
                    <p className=' font-thin text-lg'>{Name}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsComponent;