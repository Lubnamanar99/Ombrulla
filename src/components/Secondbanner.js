import React from 'react'
import "./Second.css"

function Secondbanner() {
  return (
    <div class="img2">
        <div  className="md:mt-20 mt-10 w-full flex items-center  justify-center">
        <div className=" px-10 py-8 md:mx-20 md:px-32 md:py-32">
          <div className="flex items-center">
            <i className="fa-solid fa-square text-blue-500 text-xs"></i>
            <p className="ms-2 font-bold">The Best AI Service Provider</p>
          </div>
          <div>
            <h1 className="md:text-5xl text-3xl  font-bold mt-4">
              Crafting Tomorrow's World with {" "}
              <span className="text-blue-600  font-normal text-right">
               
                AI Excellence
              </span>
            </h1>
          </div>
          <div className=" text-gray-500 mt-5 ">
            The majority of customers lack data-driven insights and automation.
            Using AI, Ombrulla assist clients in extracting data from diverse
            sources such as photos, videos, and data lakes, which can assist
            businesses in making data-driven insights and improving their bottom
            line.
          </div>
         
          <div className="flex items-center">
            <button className="ml-5 mt-5 w-12 h-12  bg-blue-600 rounded-full hover:bg-white">
              <i className="fa-solid fa-caret-down fa-rotate-270 text-3xl text-white hover:text-blue-600"></i>
            </button>
            <span className="ms-5 text-md font-bold mt-5">
              Watch Corporate Video
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secondbanner