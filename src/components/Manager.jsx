import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setpasswordArray] = useState([]);
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, [])
    const showPassword = () => {
        passwordRef.current.type = passwordRef.current.type === "password" ? "text" : "password";
        ref.current.src = ref.current.src.includes("eyecross.svg")
            ? "eye.svg"
            : "eyecross.svg";
    }
    const savePassword = () => {
        if (form.site.length >= 4 && form.username.length >= 4 && form.password.length >= 4) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
            console.log([...passwordArray, form]);
            setform({ site: "", username: "", password: "" })
            toast.success('Saved!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: "bounce",
            })
        }
        else {
            toast.error('Error:Characters must be more than 4', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    const deletePassword = (id) => {
        let c = confirm("Do you really want to delete the password?")
        if (c) {
            console.log("deleting with id ", id)
            setpasswordArray(passwordArray.filter(item => item.id !== id));
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
        }
        toast.success('Password Deleted Succesfully!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: "bounce",
        })
    }
    const editPassword = (id) => {
        console.log("editing with id ", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id));
    }

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //using copilot:-
    const copyText = (e,text) => {
        const textToCopy = text || e.target.parentElement.innerText;
    navigator.clipboard.writeText(textToCopy)
            .then(() => {
                toast.success('Copied to Clipboard!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    // transition: "bounce",
                });
            })
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // Remove the transition="bounce" prop
            />
            <div className="relative min-h-[calc(100vh-10.5rem)] md:min-h-[80.25vh] m-0 p-0">
                {/* Background - stays fixed to viewport */}
                {/* background copied from ibelick bg */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] overflow-hidden"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

                <div className="py-8 text-center md:container md:mx-auto md:px-50 md:py-8 ">
                    <h1 className='text-4xl font-bold text-center'>
                        <span className="text-green-500">&lt;</span>
                        Pass
                        <span className="text-green-500">OP/&gt;</span>
                    </h1>
                    <p className='text-green-900 text-lg text-center'>Your Own Pasword Manager</p>

                    <div className="flex flex-col gap-6 p-4 text-black items-center">
                        <input
                            value={form.site}
                            onChange={handleChange}
                            className='rounded-full border border-green-500 w-full p-4 py-2' type="text"
                            name="site"
                            id="site"
                            placeholder='Enter Website URL' />
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                            <input
                                value={form.username}
                                onChange={handleChange}
                                className='rounded-full border border-green-500 w-full p-4 py-2'
                                type="text"
                                name="username"
                                id="username"
                                placeholder='Enter Username' />
                            <div className="relative">
                                <input
                                    ref={passwordRef}
                                    value={form.password}
                                    onChange={handleChange}
                                    className='rounded-full border border-green-500 w-full p-4 py-2'
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Enter Password' />
                                <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                    <img ref={ref} className='p-2' src="eyecross.svg" alt="eye" />
                                </span>
                            </div>

                        </div>
                        <button onClick={savePassword} className='flex items-center justify-center gap-2 bg-green-400 rounded-full px-8 py-2 hover:bg-green-500 transition-all duration-300 w-fit border-green-900 border cursor-pointer'>
                            <lord-icon
                                src="https://cdn.lordicon.com/sbnjyzil.json"
                                trigger="morph"
                                stroke="bold"
                                state="hover-swirl"
                                colors="primary:#121331,secondary:#000000">
                            </lord-icon>
                            Save Password</button>
                    </div>
                    <div className="displayPasswords">
                        <h2 className='text-2xl font-bold py-2'>Your Passwords</h2>
                        {passwordArray.length === 0 ? <p className='text-lg'>No Passwords Found</p> : ""}
                        {passwordArray.length !== 0 &&
                            <div className="overflow-x-auto mx-2 md:mx-0">
                            <table className="table-auto w-full text-center border-collapse rounded-md overflow-hidden">
                                <thead className='bg-green-500 text-white'>
                                    <tr>
                                        <th className='py-2 px-1'>Site</th>
                                        <th className='py-2 px-1'>Username</th>
                                        <th className='py-2 px-1'>Password</th>
                                        <th className='py-2 px-1'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-100'>
                                    {passwordArray.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='w-32 py-2 px-1 border border-white'>
                                                    <div className='flex  justify-center items-center gap-2'>
                                                        <a href={item.site} target='_blank' rel="noopener noreferrer">{item.site}</a>
                                                        <lord-icon
                                                            onClick={copyText}
                                                            className="cursor-pointer h-6 "
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            colors="primary:#545454">
                                                        </lord-icon>
                                                    </div>
                                                </td>
                                                <td className='w-32 py-2 px-1 border border-white'>
                                                    <div className='flex  justify-center items-center gap-2'>

                                                        {item.username}
                                                        <lord-icon
                                                            onClick={copyText}
                                                            className="cursor-pointer h-6"
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            colors="primary:#545454">
                                                        </lord-icon>
                                                    </div>
                                                </td>
                                                <td className='w-32 py-2 px-1 border border-white'>
                                                    <div className='flex  justify-center items-center gap-2'>

                                                         {"*".repeat(item.password.length)}
                                                        <lord-icon
                                                            onClick={(e)=>{copyText(e,item.password)}}
                                                            className="cursor-pointer h-6"
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            colors="primary:#545454">
                                                        </lord-icon>
                                                    </div>
                                                </td>
                                                <td className='w-32 py-2 border border-white'>
                                                    <span onClick={() => { editPassword(item.id) }}>
                                                        <lord-icon

                                                            className="cursor-pointer h-6 mx-2"
                                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                                            trigger="hover"
                                                            colors="primary:#545454">
                                                        </lord-icon>
                                                    </span>
                                                    <span onClick={() => { deletePassword(item.id) }}>
                                                        <lord-icon

                                                            className="h-6 cursor-pointer mx-2"
                                                            src="https://cdn.lordicon.com/xyfswyxf.json"
                                                            trigger="hover"
                                                            colors="primary:#545454">
                                                        </lord-icon>
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
