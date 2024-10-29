import Image from 'next/image';
import React from 'react';


function Main_page() {
  const divs = Array(10).fill(null).map((_, index) => (
    <div className='relative w-full max-w-80 h-48 p-3 g-4 bg-red-400 text-2xl rounded-lg overflow-hidden' key={index}>
      <h1>Lista de éxitos</h1>
      <Image
        src="/images/ariana.jpg"
        width={150} // Cambia estos valores al tamaño que quieras
        height={150}
        alt="Imagen de Ariana"
        className="absolute -right-9 top-12 rounded-md transform rotate-[18deg]"
      />
    </div>

  ));
  return (
    <div className='bg-primaryColor rounded-lg p-4 max-h-[77vh] font-spotiBold'>
      <h2 className='mt-11 text-2xl font-spotiBold'>Explorar todo</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6 max-h-[61vh] overflow-y-auto overflow-x-hidden'>{divs}</div>
    </div>
  )
}

export default Main_page
