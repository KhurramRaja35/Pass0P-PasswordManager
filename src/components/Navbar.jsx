import React from 'react'
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='bg-slate-800 text-white sticky top-0 z-10 box-border '>
                
                <div className='md:container md:mx-auto  md:py-8 flex justify-between items-center px-4 py-5 h-16'>
                    <div className="logo font-bold text-2xl">
                        <span className="text-green-500">&lt;</span>
                        Pass
                        <span className="text-green-500">OP/&gt;</span>
                    </div>
                   
                            
                        <button className="h-10 w-30 flex justify-center items-center gap-2 p-2 box-border  bg-green-400 rounded-full  hover:bg-green-500 transition-all duration-300">
                        <a className='hover:font-bold flex justify-center items-center gap-2  active:text-green-500' href="https://github.com/KhurramRaja35" target="_blank" rel="noopener noreferrer">
                            <lord-icon
                                src="https://cdn.lordicon.com/ioihllwu.json"
                                trigger="hover"
                                colors="primary:#ebe6ef,secondary:#848484">
                            </lord-icon>
                            Github
                        </a>

                        </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
