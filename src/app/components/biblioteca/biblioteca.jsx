import React from 'react';
import { BiLibrary } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RiListUnordered } from "react-icons/ri";



function Biblioteca() {
  return (
    <div>

      <div className='bg-neutral-900 h-svh rounded-lg p-0'>
        <div className='flex items-center justify-between pt-3 px-4 pb-2'>

          <header className='flex items-center space-x-1'>
            <BiLibrary size={35} />
            <button className='font-bold text-xl'>Tu biblioteca</button>
          </header>

          <div className='flex items-center space-x-0 ml-auto'>

            <button className='p-2' ><MdAdd size={27} /></button>
            <button className='p-2' ><IoMdArrowBack size={25} /></button>

          </div>
        </div>

        <div className='flex space-x-16 h-9 mx-4 my-2'>
          <div className='flex space-x-1 h-8'>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm'><span>Playlist</span></button>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm'><span>Artistas</span></button>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm'><span>Albumes</span></button>
            <button className='bg-[#2b2a2a] rounded-full px-3.5 text-sm'><span>Podcast y programas</span></button>
          </div>

          <div className='flex items-center justify-center'>
            <button className='p-2'><LuSearch size={20} /></button>
            <button className='flex items-center justify-center pl-4 pr-3 py-2'><span className='text-sm'>Recientes</span><RiListUnordered size={20} className='ml-1' /> </button>

          </div>


        </div>



      </div>

    </div>
  )
}

export default Biblioteca
