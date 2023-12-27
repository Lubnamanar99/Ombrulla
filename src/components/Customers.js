import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Customers() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div >
            <div className='mt-20 mb-8 p-3 md:px-20 flex flex-col items-center gap-x-7 gap-y-7'>
                <h1 className='text-sm'><i className="fa-solid fa-square text-blue-500 text-xs "></i>{" "} OUR COUSTOMERS{" "}<i className="fa-solid fa-square text-blue-500 text-xs "></i></h1>
                <h1 class="text-4xl font-semibold mt-5">They Trust Us</h1>
            </div>
            <Slider {...settings}>
                <div className="bg-white-500 p-4">
                    <div className='Slide1 inline-flex md:gap-x-8 gap-x-4 items-center'>
                        <img
                            className="w-1/4  rounded "
                            src="https://www.ombrulla.com/best-western.webp"
                            alt="Slide 1"
                        />
                        <img
                            className="w-1/4  rounded"
                            src="https://www.ombrulla.com/dubai-festival-city.webp"
                            alt="Slide 1"
                        />
                        <img
                            className="w-1/4  rounded"
                            src="https://www.ombrulla.com/wild-leaf.webp"
                            alt="Slide 1"
                        />
                        <img
                            className="w-1/4  rounded"
                            src="https://www.ombrulla.com/emirates.webp"
                            alt="Slide 1"
                        />
                        <img
                            className="w-1/4  rounded"
                            src="https://www.ombrulla.com/burger-king.webp"
                            alt="Slide 1"
                        />
                    </div>



                </div>
                <div className="bg-white-500 p-4">
                    <div className='Slide1 inline-flex md:gap-x-8 gap-x-4 items-center'>
                        <img
                            className="w-1/4  rounded "
                            src="https://www.ombrulla.com/damac.webp"
                            alt="Slide 1"
                        />
                        <img
                            className="w-1/4  rounded"
                            src="https://www.ombrulla.com/planet-fitness.webp"
                            alt="Slide 1"
                        />
                        <img
                            className="w-1/4  rounded"
                            src="https://www.ombrulla.com/suja.webp"
                            alt="Slide 1"
                        />
                        <img
                            className="w-1/4  rounded"
                            src="https://www.ombrulla.com/azelit.webp"
                            alt="Slide 1"
                        />

                    </div>


                </div>

            </Slider>
        </div>
    )
}

export default Customers