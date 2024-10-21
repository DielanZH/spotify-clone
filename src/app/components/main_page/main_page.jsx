import React from 'react';


function Main_page() {
  const divs = Array(10).fill(null).map((_, index) => (
    <div className='w-full h-40 p-3 m-3 g-4 bg-red-400 text-2xl rounded-lg' key={index}>
      <h1>Lista de éxitos</h1>
    </div>
    
  ));
  return (
    <div className='bg-primaryColor rounded-lg p-4'>
      <h2 className='mt-11 text-2xl'>Explorar todo</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6 '>{divs}</div>
      
    </div>
  )
}

export default Main_page
