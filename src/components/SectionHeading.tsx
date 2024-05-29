
function SectionHeading({ Heading, Subheading }:any) {
    return (
        <div className="p-[7%] py-0">
            <p className=" text-4xl md:text-6xl font-semibold pb-4 text-center tracking-wide underlin">{Heading}</p>
            <p className="pb-6 font-thin text-base md:text-2xl text-center">{Subheading}</p>
        </div>)
}

export default SectionHeading