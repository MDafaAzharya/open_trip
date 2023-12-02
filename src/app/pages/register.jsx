import React from "react";
import '../../assets/css/register.css'
import { Link } from "react-router-dom";

function Register() {
    return(
        <div className="page py-14 mt-5 md:mt-0">
           <div className="py-10 px-8 shadow-lg:w-96 w-80 border-t-8 border-red-500 rounded-lg lg:ml-32 mx-auto bg-white">
                <div>
                    <h1 className="font-medium text-3xl mb-5"> Register </h1>                    
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-y-3 my-3">
                        <label htmlFor="" className="font-normal text-sm text-gray-400">Username</label>
                        <input type="text" name="" id="" className="p-2 border border-gray-400 hover:border-red-400 duration-200" />
                    </div>
                    <div className="grid grid-cols-1 gap-y-3 my-3">
                        <label htmlFor="" className="font-normal text-sm text-gray-400">Password</label>
                        <input type="text" name="" id="" className="p-2 border border-gray-400 hover:border-red-400 duration-200" />
                    </div>
                    <div className="grid grid-cols-1 gap-y-3 my-3">
                        <label htmlFor="" className="font-normal text-sm text-gray-400">Email</label>
                        <input type="text" name="" id="" className="p-2 border border-gray-400 hover:border-red-400 duration-200" />
                    </div>
                    <div>
                        <Link to="/" className="px-24 py-2 bg-red-500 text-white font-semibold text-md rounded-lg flex mx-auto mt-5 hover:bg-transparent border-2 
                        hover:border-red-500 hover:text-red-500 duration-300">Register</Link>
                    </div>
                </div>
           </div>
        </div>       
    )
}

export default Register