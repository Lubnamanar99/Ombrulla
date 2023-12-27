import React from 'react'

function Fifthbanner() {
  return (
    <div>
        <div className=" w-full flex items-center justify-center md:mt-32">
        <div className="md:flex rounded-xl w-10/12 px-8 py-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <i className="fa-solid fa-square text-blue-500 text-xs"></i>
              <p className="ms-2">
                <b>AI DATA ANALYTICS</b>
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-medium mt-4">
              Empowers Businesses to Make Insightful Decisions
              </h1>
            </div>
            <div className=" text-justify mt-5 md:text-xl">
              <ul>
                <li className="list-disc">
                  <span className='font-semibold'>Actionable Insights:</span> AI data analysis enhances decisions, personalizes customer experiences and improve operations.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Increased Customer Loyalty:</span>
                  AI predictive analytics for personalized recommendations & increased customer loyalty.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Quality Assurance:</span> AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services.
                </li>
                <li className="list-disc mt-2">
                  <span className='font-semibold'>Efficiency and Responsiveness:</span>Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses.
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
              src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp"
              alt="noimg"
             
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fifthbanner