"use client"

import React, { useEffect, useRef, useState } from 'react';
import { BiLibrary } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RiListUnordered } from "react-icons/ri";



function LibraryNotLogged() {

    const [minWidth, maxWidth] = [20.498, 31.400];
    const [width, setWidth] = useState(maxWidth);
    const isResized = useRef(false);

    useEffect(() => {
        window.addEventListener("mouseup", () => {
            isResized.current = false
        });

        window.addEventListener("mousemove", (e) => {
            if (!isResized.current) {
                return
            }
            setWidth((prevWidth) => {
                const newWidth = (e.clientX / window.innerWidth) * 100;

                const isInRange = newWidth >= minWidth && newWidth <= maxWidth;

                return isInRange ? newWidth : prevWidth;
            })

        })
    }, []);


    return (
        <div className="flex">

            <div className=' bg-primaryColor h-[77vh] rounded-lg p-0 overflow-hidden' style={{ width: `${width}vw` }}>
                <div className='flex items-center justify-between pt-3 px-4 pb-2'>

                    <header className='flex items-center space-x-1'>
                        <BiLibrary size={35} />
                        <button className='font-spotiBold text-md select-none'>Tu biblioteca</button>
                    </header>

                    <div className='flex items-center space-x-0 ml-auto'>
                        <button className='p-2' ><MdAdd size={27} /></button>
                    </div>
                </div>

                <div className='overflow-y-auto overflow-x-hidden flex-grow'>

                    <div className='mx-2 mt-5 rounded-md bg-secondaryColor select-none font-spoti'>
                        <div className='p-4 space-y-5 '>

                            <div className='space-y-2'>
                                <p className='font-spotiBold text-white text-md'>Crea tu primera playlist</p>
                                <p className='text-sm text-white'>¡Es muy fácil! Te vamos a ayudar</p>
                            </div>

                            <button className=' px-4 py-1.5 rounded-full bg-white text-primaryColor text-sm font-spotiBold'>Crear playlist</button>
                        </div>
                    </div>

                    <div className='mx-2 mt-5 rounded-md bg-secondaryColor select-none font-spoti'>
                        <div className='p-4 space-y-5 '>

                            <div className='space-y-2'>
                                <p className='font-spotiBold text-white text-md'>Busquemos algunos podcasts para seguir</p>
                                <p className='text-sm text-white'>Te mantendremos al tanto de los nuevos episodios.</p>
                            </div>

                            <button className=' px-4 py-1.5 rounded-full bg-white text-primaryColor text-sm font-spotiBold'>Explorar podcasts</button>
                        </div>
                    </div>

                </div>



                <div className='bg-red-500 absolute p-5 h-96'>
                    <div className='text-xs grid grid-cols-[repeat(auto-fill,minmax(auto, 1fr))] w-fit overflow-hidden text-gray-400 hover:text-white cursor-pointer'>
                        <p className='w-fit'>Legal</p>
                        <p className='w-fit'>Seguridad y Centro de Privacidad</p>
                        <p className='w-fit'>Politica de Privacidad</p>
                        <p className='w-fit'>Cookies</p>
                        <p className='w-fit'>Sobre los anuncios</p>
                        <p className='w-fit'>Accesibilidad</p>
                    </div>
                </div>

            </div>

            {/*HANDLER */}

            <div className={`${isResized ? 'flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100 w-2 active:cursor-grabbing hover:cursor-grab' :
                'flex items-center justify-center w-2'}`}


                onMouseDown={() => { isResized.current = true }}>
                <hr className={`${isResized ? 'active:bg-white' : ''} w-0.5 h-[95%] border-none bg-chipCheckbox`}>

                </hr>

            </div>

        </div>
    )
}

export default LibraryNotLogged
