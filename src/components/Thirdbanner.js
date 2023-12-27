import React from 'react'

function Thirdbanner() {
  return (
    <div>
        <div className=" w-full flex items-center justify-center md:mt-32">
        <div className="md:flex rounded-xl w-10/12 px-8 py-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <i className="fa-solid fa-square text-blue-500 text-xs"></i>
              <p className="ms-2">
                <b>AI INFRASTRUCTURE INSPECTION</b>
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-medium mt-4">
                Enhances Efficiency, Safety, and Cost-Effectiveness
              </h1>
            </div>
            <div className=" text-justify mt-5 md:text-xl">
              <ul>
                <li className="list-disc">
                  <span className='font-semibold'>Cutting-Edge Solution:</span> Ombrulla leverages AI, drones,
                  and IoT technologies to transform infrastructure inspection.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Real-Time Insights:</span> Real-time insights enhance
                  inspection efficiency, safety, and reduce conventional
                  challenges.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Longevity and Cost-Effectiveness:</span> Ombrulla ensures the
                  longevity and safety of critical infrastructure while offering
                  a cost-effective solution.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Responsive Maintenance: </span>Enhances infrastructure
                  management, increasing reliability and responsiveness, and
                  reducing risks.
                </li>
              </ul>
            </div>
          
            <div className="mt-6 flex items-center">
              <button className="w-36 h-12 bg-blue-600  text-white hover:bg-white hover:text-blue-600 hover:border-black border-2 px-4 py-2 rounded-full">
                Schedule call
              </button>
              <p className="ms-2">
                <b className='hover:text-blue-600'>
                  Read more{" "}
                  <ion-icon
                    class="text-blue-600 -rotate-45" name="arrow-forward-outline"></ion-icon>
                  
                </b>
              </p>
            </div>
          </div>
          
          <div className="md:block  px-14 hidden">
            <img
              className="rounded h-auto   mt-20 ml-8"
              src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp"
              alt="noimg"
             
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thirdbanner