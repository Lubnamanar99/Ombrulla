import React from 'react'

function Fourthbanner() {
  return (
    <div>
        <div className="w-full flex items-center justify-center md:mt-32">
        <div className="md:flex rounded-xl w-10/12 px-8 py-6">
          
          <div className=" md:block px-10 md:-ms-16 hidden">
            <img
              className="rounded"
              src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp"
              alt="noimg"
             
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center">
              <i className="fa-solid fa-square text-blue-500 text-xs"></i>
              <p className="ms-2">
                <b>AI VISUAL INSPECTION</b>
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-medium mt-4">
                Improving Quality with Greater Precision
              </h1>
            </div>
            <div className=" text-justify mt-5 md:text-xl">
              <ul>
                <li className="list-disc">
                  <span className='font-semibold'>Automated Defect Detection:</span> Automated visual inspection
                  uses computer vision and machine learning to identify defects
                  autonomously.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Advanced Image Processing:</span> It captures and enhances
                  digital images for relevant feature extraction.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Informed Decision-Making:</span>The system classNameifies
                  defects, aiding manufacturers in quality control decisions.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Real-Time Quality Assurance: </span> Integration with
                  manufacturing enables real-time quality control and reduces
                  substandard product risks.
                </li>
              </ul>
            </div>
            
            <div className="mt-6 flex items-center">
              <button className="w-36 h-12 bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-black border-2 px-4 py-2 rounded-full">
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
        </div>
      </div>
    </div>
  )
}

export default Fourthbanner