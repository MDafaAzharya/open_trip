import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return(
       <nav>
            <div className="md:flex md:justify-between mx-16 hidden">
                <div className="mt-8">
                    <Link to="/beranda" className="mr-10 font-medium text-md hover:border-b-4 rounded-b-sm border-pink-500 duration-200">Beranda</Link>
                    <Link to="/destinasi" className="font-medium text-md hover:border-b-4 rounded-b-sm border-pink-500 duration-200">Destinasi</Link>
                </div>
                <div>
                    <img src="../../../public/logo_trip.png" alt="" srcset="" width={120} />
                </div>
                <div className="mt-8 ">
                    <Link to="/login" className="bg-pink-300 text-pink-500 font-semibold mr-5 md:px-5 md:py-2 rounded-xl hover:bg-pink-500 hover:text-white duration-300">Login</Link>
                    <Link to="/choose" className="bg-pink-500 text-white font-semibold  md:px-5 md:py-2 rounded-xl hover:opacity-70 duration-300">Signup</Link>
                </div>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden ">
                <div className="flex justify-center">
                    <img src="../../../public/logo_trip.png" alt="" srcset="" width={150} />
                </div>
                <div className="grid grid-cols-4 mx-8">
                    <Link to="/beranda" className="text-pink-500 font-semibold text-center rounded-xl hover:bg-pink-500 hover:text-white duration-300 py-1">Beranda</Link>
                    <Link to="/destinasi" className="text-pink-500 font-semibold text-center rounded-xl hover:bg-pink-500 hover:text-white duration-300 py-1">Destinasi</Link>
                    <Link to="/login" className=" text-pink-500 font-semibold text-center rounded-xl hover:bg-pink-500 hover:text-white duration-300 py-1">Login</Link>
                    <Link to="/choose" className="text-pink-500 font-semibold text-center rounded-xl hover:bg-pink-500 hover:text-white duration-300 py-1">Signup</Link>
                </div>
            </div>
       </nav>
    )
} 

export default Navbar