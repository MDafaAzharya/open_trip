import React from 'react'
import { IoFilter } from "react-icons/io5";
import AccordionComp from '../component/Accordion';
import { FaStar } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


export const Destinasi = () => {
    const cardData = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: 'Gunung Bromo',
        imageUrl: 'https://i1.wp.com/rawmalroams.com/wp-content/uploads/2020/06/5D80E5AE-7F0C-4DDD-A05C-2A6304749AB3.jpeg?fit=1024%2C683&ssl=1',
        description: 'Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku.',
        price: '2.000.000',
        rating: 4.5,
      }));
  return (
    <div className='mt-6'>
        <div>
            <div className="flex justify-between mx-8 md:mx-16">
                <div>
                    <h1 className="font-semibold text-3xl">Semua Tur</h1>
                </div>
                <div className='my-auto'>
                    <label htmlFor="" className='text-gray-500 text-ms mr-2 md:mr-6'>Urutan</label>
                    <select name="" id="" className='select border border-gray-400 pl-2 pr-8 md:pr-14 py-1 text-gray-500 rounded-md'>
                        <option value="">Pilih Urutan</option>
                        <option value="" >Satu</option>
                        <option value="">Dua</option>
                        <option value="">Tiga</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-start mx-8 md:mx-16'>
                <hr className="bg-red-500 h-3 w-24 mt-3"/>
                <hr  className="bg-gray-600 border-1 border-gray-400 w-full mt-auto"  />
            </div>
        </div>
        <div className='lg:flex lg:justify-start md:mx-16 mx-10 mt-8'>
            <div>
                <div className='flex justify-start mb-6'>
                    <IoFilter color="#ef4444" className='mt-1' />
                    <p className='font-medium text-md text-red-500'>Filter</p>
                </div>
                <div>
                    <AccordionComp/>
                </div>
            </div>
            <div className='grid lg:ms-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-0'>
                {cardData.map((card) => (
                <div
                    key={card.id}
                    className='w-64 mx-auto lg:mx-0 md:w-72 lg:w-64 h-full pb-4'
                    style={{
                    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                    }}
                >
                    <div>
                    <img src={card.imageUrl} alt='' width={500} />
                    </div>
                    <div className='py-3 mx-5'>
                    <h1 className='text-black font-bold text-2xl'>{card.title}</h1>
                    <p className='font-normal text-sm my-3'>{card.description}</p>
                    <div className='flex justify-between '>
                        <div className='flex justify-start'>
                        <p className='font-semibold text-md text-red-500'>Rp{card.price} </p>
                        <p className='text-sm'>/orang</p>
                        </div>
                        <div className='flex justify-start mb-8'>
                        <FaStar color='#f7d200' className='mt-1' size={15} />
                        <p className='text-sm pl-1 '>{card.rating}</p>
                        </div>
                    </div>
                    <Link to="/detailDestinasi" className='px-12 bg-red-500 py-2 text-white font-medium rounded-md  
                        border border-red-500 hover:bg-transparent hover:text-red-500 duration-300'>
                        Pesan Sekarang
                    </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='md:flex md:justify-end mt-10  mx-10'>
            <div>
                <ul className='flex justify-start gap-1'>
                    <li className='w-8 h-8 border pt-2 pl-1 mx-3 border-gray-300 rounded-sm'><AiOutlineLeft size={17}/></li>
                    <li className='h-8 w-8 border border-gray-300 rounded-sm text-center'>1</li>
                    <li className='h-8 w-8 border border-gray-300 rounded-sm text-center'>2</li>
                    <li className='h-8 w-8 border border-gray-300 rounded-sm text-center'>3</li>
                    <li className='h-8 w-8 border border-gray-300 rounded-sm text-center'>4</li>
                    <li className='h-8 w-8 border border-gray-300 rounded-sm text-center'>5</li>
                    <li className='w-8 h-8 border pt-2 pl-1 mx-3 border-gray-300 rounded-sm'><AiOutlineRight size={17} /></li>
                </ul>
            </div>
            <div className='mt-5 md:mt-0 flex justify-center md:mx-0'>
                    <select name="" id="" className='select border border-gray-300 pl-2 pr-8 md:pr-8 py-1 text-gray-500 rounded-md'>
                        <option value="">1/ Page</option>
                        <option value="" >2/ Page</option>
                        <option value="">3/ Page</option>
                        <option value="">4/ Page</option>
                    </select>
                </div>
        </div>
    </div>
  )
}
