import React from 'react';
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

function Nav_bar() {
  return (

    <div className='grid grid-cols-3 h-20 items-center'>

      <FaSpotify size={40}/>

      <div className='flex items-center justify-center space-x-3'>
        <div className='bg-neutral-900 rounded-full p-2 flex items-center justify-center'>
          <button><GoHome size={30}/></button>
        </div>

        <div className='flex space-x-4 border bg-neutral-900 border-none rounded-full p-2 w-3/4 min-w-36'>
          <button><GoSearch size={26}/></button>

          <input className="flex-auto max-w-96 bg-transparent outline-none h-7 border-r border-white" type="text" placeholder='¿Qué quieres reproducir?'/>

          <button className=''><FaHeart size={27}/></button>
        </div>

      </div>

      <div>asjkdhjksad</div>

    </div>
  )
}

export default Nav_bar
