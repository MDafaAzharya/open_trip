import React from "react"
import { Link } from "react-router-dom"

const RegisterHoster = () => {
    return (
        <div className="container mx-auto px-10 lg:px-[280px] lg:py-[50px] mt-10 md:mt-0">
            <div className="px-10 md:px-[90px] py-[60px] border-t-8 border-red-500" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                <h1 className="font-bold text-black text-[25px]">Register as Hoster</h1>
                <form action="" className="mt-5 space-y-4">
                    <div className="space-y-2">
                        <label className="text-slate-500">Username</label>
                        <input type="text" className="border border-slate-400 rounded-md block py-[6px] w-full" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-500">Password</label>
                        <input type="text" className="border border-slate-400 rounded-md block py-[6px] w-full" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-500">Email</label>
                        <input type="text" className="border border-slate-400 rounded-md block py-[6px] w-full" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-500">Nomor Handphone</label>
                        <input type="text" className="border border-slate-400 rounded-md block py-[6px] w-full" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-500">Alamat</label>
                        <textarea className="border border-slate-400 block rounded-md w-full" cols="30" rows="10"></textarea>
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-500">Upload Foto KTP</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Foto KTP</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG </p>
                                </div>
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-500">Upload Foto Selfie Dengan KTP</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Foto Selfie Dengan KTP</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG </p>
                                </div>
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    <div className="">
                        <label className="block  text-slate-500 ">Bank Pembayaran</label>
                        <select className="bg-gray-50 border rounded-md border-gray-300 text-slate-500 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-slate-500">Nomor Rekening</label>
                        <input type="text" className="border rounded-md border-slate-400 block py-[6px] w-full" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-slate-500">Foto Buku Tabungan</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Foto Buku Tabungan KTP</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG </p>
                                </div>
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    <div className="">
                        <Link to="/login" className="lg:px-56 md:px-52 px-20 ms-2 bg-red-500 border border-red-500 py-2 rounded-md text-white font-medium hover:border 
                        hover:bg-transparent hover:border-red-500 hover:text-red-500 duration-300">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterHoster