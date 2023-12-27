import React from 'react'

function Brand() {
    return (
        <div>
            <div className="hidden md:w-full md:mt-10 md:flex md:flex-col md:items-center md:justify-center">
                <div class="flex justify-center items-center flex-col mt-20">
                    <h6>
                        <i className="fa-solid fa-square fa-2xs me-3 text-blue-600"></i>BRANDS
                        WE WORK WITH
                        <i className="fa-solid fa-square fa-2xs ms-3  text-blue-600"></i>
                    </h6>
                    <h1 className="text-3xl font-bold mt-3">
                        Trusted by Thousands of Businesses
                    </h1>
                </div>

                <div class="grid grid-cols-3 ml-20 mt-8 gap-0 mt-8">
                    <div class="ml-5 bg-slate-100 w-auto h-64 mb-2 flex justify-center items-center flex-col ">
                        <img class="h-12 mt-5 w-48 h-32" src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="noimg" />
                    </div>
                    <div class="ml-5 bg-slate-100 mb-2 flex justify-center items-center flex-col ">
                        <img class="h-12 mt-5 w-48 h-32" src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="noimg" />
                    </div>
                    <div class="ml-5 bg-slate-100 me-20 mb-2 flex justify-center items-center flex-col ">
                        <img class="h-12 mt-5 w-48 h-32" src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="noimg" />
                    </div>

                    <div class="ml-5 bg-slate-100 w-auto h-64 mb-20 flex justify-center items-center flex-col ">
                        <img class="h-12 mt-5 w-48 h-32" src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="noimg" />
                    </div>
                    <div class="ml-5 bg-slate-100 mb-20 flex justify-center items-center flex-col ">
                        <img class="h-12 mt-5 w-48 h-32" src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="noimg" />
                    </div>
                    <div class="ml-5 bg-slate-100 me-20 mb-20 flex justify-center items-center flex-col">
                        <img class="h-12 mt-5 w-48 h-32" src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="noimg" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Brand