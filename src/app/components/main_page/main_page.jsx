"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function Main_page() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Pantallas pequeñas <768px
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const divs = Array(10).fill(null).map((_, index) => (
    <div 
      className={`relative p-3 g-4 w-full bg-red-400 text-2xl rounded-lg overflow-hidden ${
        isSmallScreen 
          ? 'aspect-[5/4] max-w-[80%] min-w-[60%]' // Aspecto para pantallas pequeñas
          : 'aspect-[5/3]' // Aspecto para pantallas grandes
      }`} 
      key={index}
    >
      <h1>Lista de éxitos</h1>
      <Image
        src="/images/ariana.jpg"
        width={150} 
        height={150}
        alt="Imagen de Ariana"
        className="absolute -right-9 top-12 rounded-md transform rotate-[18deg]"
        priority
      />
    </div>
  ));

  return (
    <div className='bg-primaryColor rounded-lg p-4 max-h-[77vh] font-spotiBold'>
      <h2 className='mt-11 mb-4 text-2xl font-spotiBold'>Explorar todo</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6 max-h-[61vh] overflow-y-auto overflow-x-hidden'>
        {divs}
      </div>
    </div>
  );
}

export default Main_page;
