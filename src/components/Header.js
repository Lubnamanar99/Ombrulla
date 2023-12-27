import React from 'react'



function Header() {
    return (
        <div className='mt-3 m-5 '>
       <nav className="md:flex md:items-center md:justify-between">
    <div className="flex justify-between items-center">
        <span class=" ms-20 p-5  cursor-pointer">
        <div className="flex items-center" >
                            <img  style={{height:"30px"}}
                                src='https://www.ombrulla.com/logo.svg' alt='logo'></img>
                        </div>

        </span>
        
    </div>
   
    <ul className="me-20 md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-base hover:text-sky-600  font-bold">Home</a>
        </li>
        
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-base hover:text-sky-600 font-bold">Services</a>
            </li>
        

        
        <li className="mx-4 my-6 md:my-0">
            <a href="#" class="text-base hover:text-sky-600  font-bold">Product</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-base hover:text-sky-600  font-bold">About</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-base hover:text-sky-600  font-bold">Blog</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
            <a href="#" className="text-base hover:text-sky-600 font-bold">Contact</a>
        </li>
        
    </ul>
</nav>




        </div>
    )
}

export default Header