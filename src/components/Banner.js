import React from 'react'

function Banner() {
    return (
        <div>
            <div className="container mt-5   mx-auto ">
                <div className="flex flex-col md:flex-row w-full">
                   
                    <div className="w-full">
                        <div className="md:px-20 ms-35">
                            <h1 className="text-6xl font-semibold w-8/12  mt-28">
                                Manual Inspection is
                                <span className="text-6xl font-normal text-blue-600">
                                  
                                    Slow & Error-Prone
                                </span>
                            </h1>
                        </div>
                        <div className="mt-5 text-gray-500 md:px-10">
                            <p>
                            AI visual inspection, powered by computer vision, revolutionises the inspection process in manufacturing, enhancing precision and cost-effectiveness, all the while maintaining product excellence
                            </p>
                        </div>
                        
                        <div className="mt-10 flex md:px-20">
                            <button className="w-36 h-12 bg-blue-600  text-white hover:bg-white hover:text-blue-600 hover:border-black border-2 px-4 py-2 rounded-full">
                                Schedule call
                            </button>
                            <div className="flex items-center">
                                <button className="ml-5 w-12 h-12  bg-blue-600 rounded-full hover:bg-white">
                                    <i className="fa-solid fa-caret-down fa-rotate-270 text-3xl text-white  hover:text-blue-600"></i>
                                </button>
                                <span className="ms-5 text-lg hidden md:block">
                                    Watch Video
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- second row --> */}
                    <div className="w-full">
                        <div className="flex justify-center align-center">
                        <div>
            <img class=" mt-8 rounded-full w-96 h-96 " src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt=""/>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner