import React from 'react'
import { Accordion } from 'flowbite-react';
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

const AccordionComp = () => {
  return (
    <div>
         <Accordion collapseAll className='acc lg:w-80 border-0  mx-auto md:mx-0'  style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Tipe Perjalanan</Accordion.Title>
                <Accordion.Content>
                    <div className='flex justify-start gap-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-sm font-medium'> Open trip </label>
                    </div>
                    <div className='flex justify-start gap-2 mt-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-sm font-medium'> Private trip </label>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Tema Perjalanan</Accordion.Title>
                <Accordion.Content>
                    <div>
                        <div className='flex justify-start gap-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-sm font-medium'> Destinasi Populer </label>
                        </div>
                        <div className='flex justify-start gap-2 mt-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-sm font-medium'> Vitamin sea </label>
                        </div>
                        <div className='flex justify-start gap-2 mt-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-sm font-medium'> Naik Naik ke Puncak Gunung  </label>
                        </div>
                        <div className='flex justify-start gap-2 mt-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='text-sm font-medium'> Menyatu Dengan Alam  </label>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Budget</Accordion.Title>
                <Accordion.Content>
                    <div>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-400 font-medium bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                Rp
                            </span>
                            <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm 
                            border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Budget Minimum"/>
                        </div>
                        <div className="flex mt-5">
                            <span className="inline-flex items-center px-3 text-sm text-gray-400 font-medium bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                Rp
                            </span>
                            <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm 
                            border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Budget Maksimum"/>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Lokasi Keberangkatan</Accordion.Title>
                <Accordion.Content>
                    <div className="flex mt-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-400 font-medium bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                             <IoSearchOutline />
                        </span>
                        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm 
                        border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Lokasi Keberangkatan"/>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Destinasi</Accordion.Title>
                <Accordion.Content>
                    <div className="flex mt-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-400 font-medium bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                             <IoSearchOutline />
                        </span>
                        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm 
                        border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Destinasi"/>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Rating</Accordion.Title>
                <Accordion.Content>
                    <div className='flex justify-start gap-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-sm font-medium flex justify-start'> <FaStar color='#f7d200' className='mt-1 mr-1' size={14}/> 5 Bintang </label>
                    </div>
                    <div className='flex justify-start gap-2 mt-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-sm font-medium flex justify-start'> <FaStar color='#f7d200' className='mt-1 mr-1' size={14}/> 3 - 4 Bintang </label>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Periode Keberamgkatan</Accordion.Title>
                <Accordion.Content>
                     <div className="flex mt-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-400 font-medium bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <CiCalendarDate />
                        </span>
                        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm 
                        border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Destinasi"/>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='border-b border-gray-500 py-3 my-2 px-5'>Durasi</Accordion.Title>
                <Accordion.Content>
                    <div className='flex justify-between'>
                        <div className='flex justify content-between py-1 px-3 border border-gray-400 w-28 rounded-sm'>
                            <p>1</p>
                            <p className='ml-10'> Hari </p>
                        </div>
                        <div className='flex justify content-between py-1 px-3 border border-gray-400 w-28 rounded-sm'>
                            <p>10</p>
                            <p className='ml-10'> Hari </p>
                        </div>
                    </div>
                    <hr className='h-2 bg-red-500 w-full mt-3 rounded lg' />
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    </div>
  )
}

export default AccordionComp