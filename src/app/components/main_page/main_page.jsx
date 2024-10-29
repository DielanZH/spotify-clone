"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function Main_page() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Actualiza el estado según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Considera pantallas menores a 768px como pequeñas
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica el tamaño inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const divs = Array(10).fill(null).map((_, index) => (
    <div 
      className={`relative p-3 g-4 ${isSmallScreen ? 'h-64' : 'h-48'} w-full bg-red-400 text-2xl rounded-lg overflow-hidden`}
      key={index}
    >
      <h1>Lista de éxitos</h1>
      <Image
        src="/images/ariana.jpg"
        width={150} 
        height={150}
        alt="Imagen de Ariana"
        className="absolute -right-9 top-12 rounded-md transform rotate-[18deg]"
      />
    </div>
  ));

  return (
    <div className='bg-primaryColor rounded-lg p-4 max-h-[77vh]'>
      <h2 className='mt-11 mb-4 text-2xl'>Explorar todo</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6 max-h-[61vh] overflow-y-auto overflow-x-hidden'>
        {divs}
      </div>
    </div>
  );
}

export default Main_page;
