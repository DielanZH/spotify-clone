import React from 'react';
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

function Nav_bar() {
  return (

    <div className='grid grid-cols-3 h-16 items-center'>

      {/* Logo */}
      <div className='flex items-center justify-center sm:justify-start ml-7 -mt-0.5'>
        <FaSpotify size={33}/>
      </div>

      <div className='flex items-center justify-center space-x-2 px-3'>
        {/* Botón de Home */}
        <div className='bg-[#212121] rounded-full p-2.5 flex items-center justify-center '>
            <button>
              <GoHome size={28}/>
            </button>
        </div>

        {/* Contenedor de búsqueda */}
        <div className='flex items-center justify-center gap-3 bg-[#212121] rounded-full p-2.5  w-[77%]'>

          {/* Botón de búsqueda */}
          <button className='flex items-center justify-center h-full min-h-4 min-w-4'>
            <GoSearch size={27}/>
          </button>

          {/* Input de búsqueda */}
          <input className="flex bg-transparent outline-none h-6 border-r border-[#B3B3B3] w-[86%] min-w-10" type="text" placeholder='¿Qué quieres reproducir?'/>

          {/* Botón de corazón */}
          <button className='flex items-center justify-center gap-8 min-h-4 min-w-4'>
            <FaHeart size={25} className='flex items-center justify-center'/>
          </button>
          
        </div>
        
      </div>

      <div className='flex justify-end space-x-8 px-2 '>
        <button className='text-[#B3B3B3]'>
            Registrarte
        </button>
        <button className='text-[#121212] rounded-full py-3 px-7 bg-[#fff]'>
            Iniciar Sesión
        </button>
      </div>

    </div>
  )
}

export default Nav_bar
