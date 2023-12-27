import React from 'react'

function Blog() {
    return (
        <div>

            <div className="w-full mt-10 flex flex-col items-center justify-center">
                <h6>
                    <i className="fa-solid fa-square fa-2xs me-3 text-blue-600"></i>BLOG UPDATES
                    <i className="fa-solid fa-square fa-2xs ms-3  text-blue-600"></i>
                </h6>
                <h1 className="text-3xl font-bold mt-3">
                    To Read
                </h1>
                <div className="mx-10 mt-5 border-t-2 md:flex md:flex-row">
                    
                    <div className="mt-8">
                        <img
                            className="rounded-sm md:w-96"
                            src="https://blog.ombrulla.com/wp-content/uploads/2023/12/AI-in-Logisics-and-Supply-chain.webp"
                            alt="noimg"
                            
                        />
                        <p className="mt-10 text-base md:text-xl md:w-96 font-semibold text-gray-900">
                        AI Revolutionizes Logistics and Supply Chain Management
                        </p>
                        <p className="text-sm  md:w-96 text-blue-600/50">
                        Artificial intelligence (AI) has dramatically influenced logistics and supply chain management, bringing about a wave of transformation and optimization. Here are some key ways  AI data analytics impact these sectors:
                        </p>
                        <div className="flex mt-2">
                            <img
                                className="w-10 rounded-full"
                                src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g"
                                alt="noimg"
                                
                            />
                            <div className="flex flex-col ms-3 ">
                                <p>Zara Elizabeth</p>
                                <p className='text-blue-600/50'>Dec 21, 2023 · 4 min read</p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="mt-8 md:ms-4">
                        <img
                            className="rounded-sm md:w-96"
                            src="https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp"
                            alt="noimg"
                           
                        />
                        <p className="mt-10  text-base md:text-xl font-semibold text-gray-900  md:w-96">
                        Google I/O 2023: A Deeper Look at the Future of AI
                        </p>
                        <p className="text-sm  md:w-96 text-blue-600/50">
                        Google I/O 2023 was a whirlwind of exciting announcements and innovations, but one theme stood out: making AI more helpful for everyone. From new features in popular apps to advancements in core technologies, Google showcased its commitment to democratizing AI and making it a powerful tool for people of all backgrounds
                        </p>
                        <div className="flex mt-2">
                            <img
                                className="w-10 rounded-full"
                                src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g"
                                alt="noimg"
                                
                            />
                            <div className="flex flex-col ms-3">
                                <p>Zara Elizabeth</p>
                                <p className='text-blue-600/50'>Dec 8, 2023 · 5 min read</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 md:ms-4">
                        <img
                            className="rounded-sm md:w-96"
                            src="https://blog.ombrulla.com/wp-content/uploads/2023/11/Blog-Images.png"
                            alt="noimg"
                            
                        />
                        <p className="mt-10  text-base md:text-xl font-semibold text-gray-900  md:w-96">
                        A Deep Understanding of AI Visual Inspection
                        </p>
                        <p className="text-sm  md:w-96 text-blue-600/50">
                        Artificial Intelligence stands as a transformative force, demonstrating its potential across diverse sectors. Its integration into production and manufacturing is reshaping traditional practices by enabling operators to harness the capabilities of deep learnin
                        </p>
                        <div className="flex mt-2">
                            <img
                                className="w-10 rounded-full"
                                src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g"
                                alt="noimg"
                                
                            />
                            <div className="flex flex-col ms-3">
                                <p>Zara Elizabeth</p>
                                <p className='text-blue-600/50'>Nov 28, 2023 · 5 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Blog