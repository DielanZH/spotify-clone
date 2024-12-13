"use client"
import React, { useState } from 'react';
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";


function Nav_bar() {
  const [onFocus, setOnFocus] = useState(false);

  return (

    <div className='grid grid-cols-3 h-16 items-center font-spoti'>

      {/* Logo */}
      <div title="Spotify" className='flex sm:justify-start ml-7 -mt-0.5'>
        <button>
          <FaSpotify size={33} />
        </button>
      </div>

      <div title="Inicio" className='flex items-center justify-center space-x-2 px-3'>
        {/* Botón de Home */}
        <div className='bg-secondaryColor rounded-full p-2.5 flex items-center justify-center transition-transform duration-200 hover:scale-105 '>
          <button>
            <GoHome size={28} />
          </button>
        </div>

        {/* Contenedor de búsqueda */}
        <div className={`flex items-center justify-center gap-3 bg-secondaryColor rounded-full p-2.5  w-[77%] transition-all duration-300 ${onFocus ? "ring-2 ring-white border-white" : "hover:ring-1 hover:ring-[#404040] hover:border-[#404040] hover:bg-chipCheckbox"} `}>

          {/* Botón de búsqueda */}
          <button title="Buscar" className='flex items-center justify-center h-full min-h-4 min-w-4'>
            <GoSearch size={27} />
          </button>

          {/* Input de búsqueda */}
          <input className="flex bg-transparent outline-none h-6 border-r border-[#404040] w-[86%] min-w-10" type="text" placeholder='¿Qué quieres reproducir?'
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}

          />

          {/* Botón de corazón */}
          <button title="Explorar" className='flex items-center px-0.5 pr-1.5 transition-transform duration-200 hover:scale-110 min-h-4 min-w-4'>
            <FaHeart size={24} className='flex items-center justify-center'/>
          </button>

        </div>

      </div>

      <div className='flex justify-end space-x-8 px-1 font-spotiBold'>
        <button className='text-[#B3B3B3] transition-transform duration-75 hover:scale-110 hover:text-white min-h-3 min-w-3'>
          Registrarte
        </button>
        <button className='text-[#121212] rounded-full py-3 px-8 bg-white transition-transform duration-75 hover:scale-105 min-h-2 min-w-2'>
          Iniciar sesión
        </button>
      </div>

    </div>
  )
}

export default Nav_bar
