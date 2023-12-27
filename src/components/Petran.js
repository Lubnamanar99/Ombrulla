import React from 'react'

function Petran() {
    return (
        <div>
            <div className="w-full flex items-center justify-center bg-blue-600 md:mt-40 h-auto">
                <div className="md:flex md:flex-row w-11/12 py-6">
                <div class="ms-auto ">
            <img class="h-5 mt-20" src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="noimg"/>
            <h1 class=" text-white text-2xl md:text-base  font-normal">PErformance - TRacking - ANalytics</h1>
            <h1 class="text-3xl font-bold mt-2 text-white">AI & IoT Enabled 
                Asset Performance Management</h1>
            <p className='text-white'>Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.</p>
            <button
                class="mt-8 px-6 py-3 font-bold text-white border border-white rounded-full hover:text-black">Schedule
                Call</button>
            <button class="text-2xl ml-8 text-white px-3 py-2  border border-white rounded-full bg-blue-500 "> <i className="fa-solid fa-caret-down fa-rotate-270 text-3xl text-white hover:text-blue-600"></i>
                   </button>
            <a class="ml-8 text-md font-bold" href="">Watch Video</a>
        </div>

                    
                    <div className="px-14 md:px-0 py-14 mt-10 md:w-11/12">
                        <img
                            className="rounded md:w-full md:h-full"
                            src="	https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp"
                            alt="noimg"
                           
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petran