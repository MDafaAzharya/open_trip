import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';

const Beranda = () => {
    const cardData = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: 'Gunung Bromo',
        imageUrl: 'https://i1.wp.com/rawmalroams.com/wp-content/uploads/2020/06/5D80E5AE-7F0C-4DDD-A05C-2A6304749AB3.jpeg?fit=1024%2C683&ssl=1',
        description: 'Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku.',
        price: '2.000.000',
        rating: 4.5,
      }));
  return (
    <div className='overflow-x-hidden'>
        <div className='bg_beranda'>
            <h1 className='lg:text-5xl text-4xl text-white font-medium lg:ml-32 lg:pt-32 pt-8 text-center lg:text-left'> NEVER STOP <br /> EXPLORING THE WORLD</h1>
        </div>
        <div className='bg-white lg:w-3/4 mx-auto z-50 md:-translate-y-12 rounded-lg'  style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',}}>
            <div className='flex justify-start py-2 px-3 md:p-5'>
                <div>
                    <label htmlFor="">Tujuan</label> <br />
                    <input type="text" placeholder='Semua Tempat' className='lg:text-xl' />
                </div>
                <hr className='hidden md:block h-1 bg-gray-400 w-32 mt-6 rounded-md rotate-90' />
                <div className='md:ml-20'>
                    <label htmlFor="">Jadwal</label> <br />
                    <input type="date" />
                </div>
                <button className='hidden md:block py-3 w-full md:mx-24 lg:mx-32 bg-red-500 text-white rounded-md font-medium text-md border border-red-500 duration-300 hover:bg-transparent hover:text-red-500'> Cari </button>
            </div>
            <button className=' md:hidden py-2 px-20  bg-red-500 text-white rounded-md font-medium text-md border border-red-500 duration-300 hover:bg-transparent 
            hover:text-red-500 ms-24 my-3'> Cari</button>
        </div>
        <div className='md:-mt-0 lg:mt-16 mt-10'>
            <div className='lg:flex lg:justify-between mx-6 lg:mx-20'>
                <h1 className='text-2xl font-semibold'>Destinasi Populer</h1>
                <p className='flex justify-start text-red-500 text-sm font-normal gap-1'> LIHAT LIBURAN LAINNYA <FaArrowRight className='mt-1' /></p>
            </div>
            <div className='flex justify-start gap-5 lg:ml-20 my-8 overflow-x-auto'>
                {cardData.map((card) => (
                <div
                    key={card.id}
                    className='w-64 mx-auto lg:mx-0 md:w-72 lg:w-96 h-full'
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
                        <div className='flex justify-start'>
                        <FaStar color='#f7d200' className='mt-1' size={15} />
                        <p className='text-sm pl-1 '>{card.rating}</p>
                        </div>
                    </div>
                    <button className='w-full bg-red-500 py-2 text-white font-medium rounded-md mt-8 
                        border border-red-500 hover:bg-transparent hover:text-red-500 duration-300'>
                        Pesan Sekarang
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='mt-16'>
            <div className='lg:flex lg:justify-between mx-6 lg:mx-20'>
                <h1 className='text-2xl font-semibold'>Vitamin Sea</h1>
                <p className='flex justify-start text-red-500 text-sm font-normal gap-1'> LIHAT LIBURAN LAINNYA <FaArrowRight className='mt-1' /></p>
            </div>
            <div className='flex justify-start gap-5 lg:ml-20 my-8 overflow-x-auto'>
                {cardData.map((card) => (
                <div
                    key={card.id}
                    className='w-64 mx-auto lg:mx-0 md:w-72 lg:w-96 h-full'
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
                        <div className='flex justify-start'>
                        <FaStar color='#f7d200' className='mt-1' size={15} />
                        <p className='text-sm pl-1 '>{card.rating}</p>
                        </div>
                    </div>
                    <button className='w-full bg-red-500 py-2 text-white font-medium rounded-md mt-8 
                        border border-red-500 hover:bg-transparent hover:text-red-500 duration-300'>
                        Pesan Sekarang
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='mt-16'>
            <div className='lg:flex lg:justify-between mx-6 lg:mx-20'>
                <h1 className='text-2xl font-semibold'>Naik Naik ke Puncak Gunung</h1>
                <p className='flex justify-start text-red-500 text-sm font-normal gap-1'> LIHAT LIBURAN LAINNYA <FaArrowRight className='mt-1' /></p>
            </div>
            <div className='flex justify-start gap-5 lg:ml-20 my-8 overflow-x-auto'>
                {cardData.map((card) => (
                <div
                    key={card.id}
                    className='w-64 mx-auto lg:mx-0 md:w-72 lg:w-96 h-full'
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
                        <div className='flex justify-start'>
                        <FaStar color='#f7d200' className='mt-1' size={15} />
                        <p className='text-sm pl-1 '>{card.rating}</p>
                        </div>
                    </div>
                    <button className='w-full bg-red-500 py-2 text-white font-medium rounded-md mt-8 
                        border border-red-500 hover:bg-transparent hover:text-red-500 duration-300'>
                        Pesan Sekarang
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='mt-16'>
            <div className='lg:flex lg:justify-between mx-6 lg:mx-20'>
                <h1 className='text-2xl font-semibold'>Menyatu Dengan Alam</h1>
                <p className='flex justify-start text-red-500 text-sm font-normal gap-1'> LIHAT LIBURAN LAINNYA <FaArrowRight className='mt-1' /></p>
            </div>
            <div className='flex justify-start gap-5 lg:ml-20 my-8 overflow-x-auto'>
                {cardData.map((card) => (
                <div
                    key={card.id}
                    className='w-64 mx-auto lg:mx-0 md:w-72 lg:w-96 h-full'
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
                        <div className='flex justify-start'>
                        <FaStar color='#f7d200' className='mt-1' size={15} />
                        <p className='text-sm pl-1 '>{card.rating}</p>
                        </div>
                    </div>
                    <button className='w-full bg-red-500 py-2 text-white font-medium rounded-md mt-8 
                        border border-red-500 hover:bg-transparent hover:text-red-500 duration-300'>
                        Pesan Sekarang
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='mt-16 bg-red-500'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=' px-20 py-16'>
                    <h1 className='lg:text-4xl text-3xl font-semibold text-white'> Downdload App</h1>
                    <p className='text-sm mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        A saepe tempore quos, maiores animi esse assumenda obcaecati hic? Commodi e
                        um ullam quaerat consequatur voluptatum nam aliquid a voluptates quas quibusdam!
                    </p>
                    <div className='mt-8'>
                        <h2 className="mb-6 text-sm font-semibold text-white">Get The App</h2>
                        <div className="text-gray-500 dark:text-gray-400 font-medium gap-3 flex justify-start">
                            <img src="../../../public/play_store.png" alt="" width={80} />
                            <img src="../../../public/apple_store.png" alt="" width={80} />
                        </div>
                    </div>
                </div>
                <div className='flex mx-auto'>
                    <img src="../../../public/mobile_mockup.png" alt="" width={350} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beranda