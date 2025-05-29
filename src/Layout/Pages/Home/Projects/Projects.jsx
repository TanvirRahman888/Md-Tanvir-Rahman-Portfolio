
const Projects = () => {
    return (
        <div className="mx-auto border-2 border-amber-500 rounded-xl my-7 p-5" id="projects">
            <p className="text-2xl mx-auto font-bold text-center my-5 ">My Projects</p>
            <hr className="h-1 mx-5 my-5 text-amber-500" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div>
                    <a
                        href="https://lovelink-d8a3d.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline font-semibold"
                    >
                        Visit LoveLink Website
                    </a>

                    <iframe
                        className="w-full lg:auto"
                        height="415"
                        src="https://lovelink-d8a3d.web.app/"
                        title="Love Link"
                        frameBorder="1"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <a
                        href="https://blue-beach-hotel.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline font-semibold"
                    >
                        Visit Blue Beach Hotel Website
                    </a>

                    <iframe
                        className="w-full lg:auto"
                        height="415"
                        src="https://blue-beach-hotel.web.app/"
                        title="Love Link"
                        frameBorder="1"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <a
                        href="https://travel-with-tanvir.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline font-semibold"
                    >
                        Visit Travel With Tanvir Website
                    </a>

                    <iframe
                        className="w-full lg:auto"
                        height="415"
                        src="https://travel-with-tanvir.web.app/"
                        title="Love Link"
                        frameBorder="1"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Projects;