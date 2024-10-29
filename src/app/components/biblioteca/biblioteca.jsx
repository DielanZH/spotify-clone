"use client"

import React, { useEffect, useRef, useState } from 'react';
import { BiLibrary } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RiListUnordered } from "react-icons/ri";



function Biblioteca() {

  const [minWidth, responsiveWidth, maxWidth, defaultWidth] = [4.375, 21.094, 62.5, 18.229];
  const [width, setWidth] = useState(defaultWidth);
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

      <div className='bg-primaryColor h-[77vh] rounded-lg p-0 overflow-hidden' style={{ width: `${width}vw` }}>
        <div className='flex items-center justify-between pt-3 px-4 pb-2'>

          <header className='flex items-center space-x-1'>
            <BiLibrary size={35} />
            <button className='font-spoti text-xl select-none'>Tu biblioteca</button>
          </header>

          <div className='flex items-center space-x-0 ml-auto'>

            <button className='p-2' ><MdAdd size={27} /></button>
            <button className='p-2' ><IoMdArrowBack size={25} /></button>

          </div>
        </div>

        <div className='flex h-9 mx-4 my-2 select-none font-spoti'>
          <div className='flex space-x-2 h-8'>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm'><span>Playlist</span></button>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm'><span>Artistas</span></button>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm'><span>Albumes</span></button>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm whitespace-nowrap'><span>Podcast y programas</span></button>
          </div>

          <div className='flex items-center justify-center ml-auto' >
            <button className='p-2'><LuSearch size={20} /></button>
            <button className='flex items-center justify-center pl-4 pr-3 py-2'>
              <span className='text-sm'>Recientes</span>
              <RiListUnordered size={20} className='ml-1' />
            </button>
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

export default Biblioteca
