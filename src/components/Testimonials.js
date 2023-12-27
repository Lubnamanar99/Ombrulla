import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <div className="bg-blue-950 mt-8  p-3 md:px-20 flex flex-col gap-y-20 gap-x-7  text-white">
                <div className="mt-8">
                    <div className="flex md:gap-x-4 gap-x-2 items-center mb-4">
                        <i className="fa-solid fa-square text-blue-500 text-xs "></i>
                        <p className="text-medium md:font-bold font-normal">
                            OUR TESTIMONIALS
                        </p>
                    </div>
                    <h3 className="flex md:text-4xl text-3xl font-medium">
                        What Customers Say About Us
                    </h3>
                </div>

                <Slider {...settings}>
                <div className=' inline-flex md:gap-x-8 gap-x-4 '>
                    
                        <div className=" bg-white md:w-2/5 w-72 rounded-lg">
                        

                            <div className=" p-10 ">
                                
                                <p className="text-black font-normal text-lg">
                                    Ombrulla demonstrates how AI could quickly extract value
                                    from our data and show significant economic benefits.
                                    Ombrulla comes highly recommended by us and we look forward
                                    to collaborating with them on future initiatives.
                                </p>
                            </div>
                            <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                                <div className=" w-8 h-8 md:w-20 md:h-20 rounded-full overflow-hidden">
                                    <img
                                        src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp"
                                        alt="noimg"
                                    />
                                </div>
                                <div className=" font-medium">
                                    <p className="text-black">Joseph</p>
                                    <p className="text-indigo-500">Planet Fitness</p>
                                </div>
                            </div>
                        </div>

                        
                   

                    
                    
                    
                </div>

                {/*second card */}
                <div>
                    
                    <div className=" bg-white md:w-2/5 w-72 rounded-lg">
                        

                        <div className=" p-10 ">
                            
                            <p className="text-black font-normal text-lg">
                            Ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.
                            </p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className=" w-8 h-8 md:w-20 md:h-20 rounded-full overflow-hidden">
                                <img
                                    src="https://www.ombrulla.com/_astro/wild-leaf.85d7f76f_Z1vakWD.webp"
                                    alt="noimg"
                                />
                            </div>
                            <div className=" font-medium">
                                <p className="text-black">Tony Michael</p>
                                <p className="text-indigo-500">CEO, The Cotillion Hotels, New York, USA</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/*third card */}
                <div>
                <div className=" bg-white md:w-2/5 w-72 rounded-lg">
                        

                        <div className=" p-10 ">
                            
                            <p className="text-black font-normal text-lg">
                            We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.
                            </p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className=" w-8 h-8 md:w-20 md:h-20 rounded-full overflow-hidden">
                                <img
                                    src="https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp"
                                    alt="noimg"
                                />
                            </div>
                            <div className=" font-medium">
                                <p className="text-black">David Thomas</p>
                                <p className="text-indigo-500">Managing Director Best Western, Kansas, USA.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/*card4 */}
                <div>
                <div className=" bg-white md:w-2/5 w-72 rounded-lg">
                        

                        <div className=" p-10 ">
                            
                            <p className="text-black font-normal text-lg">
                            We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.
                            </p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className=" w-8 h-8 md:w-20 md:h-20 rounded-full overflow-hidden">
                                <img
                                    src="https://www.ombrulla.com/_astro/azelit.c51d4d1e_ZFoIpv.webp"
                                    alt="noimg"
                                />
                            </div>
                            <div className=" font-medium">
                                <p className="text-black">Vinod MN</p>
                                <p className="text-indigo-500">Managing Director, AZEL IT Solutions</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/*card5 */}
                <div>
                <div className=" bg-white md:w-2/5 w-72 rounded-lg">
                        

                        <div className=" p-10 ">
                            
                            <p className="text-black font-normal text-lg">
                            Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures.
                            </p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className=" w-8 h-8 md:w-20 md:h-20 rounded-full overflow-hidden">
                                <img
                                    src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp"
                                    alt="noimg"
                                />
                            </div>
                            <div className=" font-medium">
                                <p className="text-black">Quresh Goga</p>
                                <p className="text-indigo-500">Shipcom wireless</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>

            </div>
            
        </div>
    )
}

export default Testimonials