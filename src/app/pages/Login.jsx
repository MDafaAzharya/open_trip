import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="bg-gray-100 w-full h-screen pt-10 md:pt-20">
            <div className="bg-white w-8/12 mx-auto rounded-lg hidden lg:block">
                <div className="md:flex md:justify-start ">
                    <div className="login_bg w-6/12">
                    </div>
                    <div className="w-6/12">
                        <div className="flex justify-center">
                        `   <img src="../../../public/logo_trip.png" alt="" width={180} className="flex justify-center" />
                        </div>
                        <div className="grid grid-cols-1 mx-12">
                            <label htmlFor="" className="text-slate-600 mb-3">Username</label>
                            <input type="text" className="p-2 border border-slate-400  hover:border-red-400 duration-200" />
                        </div>
                        <div className="grid grid-cols-1 mx-12 mt-6">
                            <label htmlFor="" className="text-slate-600 mb-3">Password</label>
                            <input type="text" className="p-2 border border-slate-400  hover:border-red-400 duration-200" />
                        </div>
                        <div>
                        <Link to="/beranda" className="py-2 bg-red-500 text-white font-semibold text-md flex mx-12 px-36 mt-8 rounded-md hover:bg-transparent border-2 
                            hover:border-red-500 hover:text-red-500 duration-300">Login</Link>
                        </div>
                        <div className="flex justify-around mx-5 mt-3">
                            <a className="font-normal text-xs "> Forgot Password </a>
                            <a className="font-normal text-xs flex justify-start">Dont have account? <p className="text-red-500">register here</p></a>
                        </div>
                        <div className="flex justify-center mt-16">
                        <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.smk.dev/" className="hover:underline">OPEN TRIP</a>. All Rights Reserved.
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* // Mobile Navigation */}
            <div className="lg:hidden">
               <div className="bg-white w-10/12 mx-auto rounded-lg">
                    <div className="flex justify-center">
                        `   <img src="../../../public/logo_trip.png" alt="" width={150} className="flex justify-center" />
                        </div>
                    <div className="grid grid-cols-1 mx-12">
                        <label htmlFor="" className="text-slate-600 mb-3">Username</label>
                        <input type="text" className="p-2 border border-slate-400  hover:border-red-400 duration-200 active:border-red-400" />
                    </div>
                    <div className="grid grid-cols-1 mx-12 mt-6">
                        <label htmlFor="" className="text-slate-600 mb-3">Password</label>
                        <input type="text" className="p-2 border border-slate-400  hover:border-red-400 duration-200" />
                    </div>
                    <div className="flex md:justify-end md:mr-12">
                    <Link to="/beranda" className="px-20 md:px-32  py-2 bg-red-500 text-white font-semibold text-md mt-8 mx-auto md:mx-0 rounded-md hover:bg-transparent border-2 
                        hover:border-red-500 hover:text-red-500 duration-300">Login</Link>
                    </div>
                    <div className="mx-12 mt-3">
                        <a className="font-normal text-sm "> Forgot Password? </a>
                        <p className="font-normal text-sm flex justify-start ">Dont have account? </p><a className="text-red-500 underline underline-offset-1">register here</a>
                    </div>
                    <div className="flex justify-center mt-10 pb-5">
                        <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.smk.dev/" className="hover:underline">OPEN TRIP</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login