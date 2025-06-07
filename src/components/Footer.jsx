import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-slate-800 text-white relative bottom-0 z-10 box-border h-full'>
                <div className="flex flex-wrap flex-1 justify-center md:container md:mx-auto md:justify-between items-center md:px-5 py-2 md:py-3 ">
                    <div className="logo font-bold text-2xl">
                        <span className="text-green-500">&lt;</span>
                        Pass
                        <span className="text-green-500">OP/&gt;</span>
                    </div>
                    <p className='flex items-center text-center'>
                        <lord-icon
                            src="https://cdn.lordicon.com/drdlomqk.json"
                            trigger="hover"
                            colors="primary:#ffc738,secondary:#848484,tertiary:#b26836"
                            className='w-8 h-6'>
                        </lord-icon>
                        Passwords Protected, Stress Deleted. © 2025
                    </p>
                    <div className='flex justify-center items-center'>
                        Created with&nbsp;
                        <script src="https://cdn.lordicon.com/lordicon.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/ajzwsrcs.json"
                            trigger="hover">
                        </lord-icon>
                        &nbsp;by KBR
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer