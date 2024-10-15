import React from 'react';
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

function Nav_bar() {
  return (

    <div className='grid grid-cols-3 h-20'>

      <FaSpotify size={40}/>

      <div>
        <div><GoHome size={40}/></div>

        <div className='flex'>
          <button><GoSearch /></button>

          <input className="flex-auto max-w-96" type="text" placeholder='¿Qué quieres reproducir?'/>

          <button><FaHeart /></button>

        </div>
      </div>

      <div>asjkdhjksad</div>

    </div>
  )
}

export default Nav_bar
