import React from "react";
import { Link } from "react-router-dom";

function Choose (){
    return (
        <div className="page py-14 mt-5 md:mt-0">
        <div className="py-10 shadow-lg w-80 md:w-96 border-t-8 border-red-500 rounded-lg lg:ml-32 mx-auto bg-white ">
             <div>
                 <h1 className="font-medium text-3xl mb-5 px-8"> Choose Registration </h1>                    
             </div>
             <div>
                 <div className="my-8">
                    <Link to="/register" className="md:w-80 w-72 flex justify-center mx-auto py-2 bg-red-500 text-white font-semibold text-lg rounded-lg 
                    hover:bg-transparent border-red-500 border hover:text-red-500 duration-300"> Register as User</Link>
                 </div>
                 <div className="flex justify-start w-full opacity-80">
                    <hr className="bg-gray-600 border-1 border-gray-400 w-40  mt-3" />
                    <p className="mx-5 font-sm text-sm text-gray-600"> Or </p>
                    <hr className="bg-gray-600 border-1 border-gray-400 w-44  mt-3" />
                 </div>
                 <div className="mt-8">
                 <Link to="/registerHoster" className="md:w-80 w-72 flex justify-center mx-auto py-2 bg-red-500 text-white font-semibold text-lg rounded-lg 
                 hover:bg-transparent border-red-500 border hover:text-red-500 duration-300"> Register as Hoster</Link>
                 </div>
             </div>
        </div>
     </div>
    )
}

export default Choose