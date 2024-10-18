import React from 'react'

function Main_page() {
  const divs = Array(10).fill(null).map((_, index) => (
    <div className='w-72 h-40 p-3 m-3 bg-red-400 rounded-lg' key={index}>
    uwu
    </div>
    
  ));
  return (
    <div className='bg-primaryColor rounded-lg p-4'>
      <h2 className='mt-11 text-2xl'>Explorar todo</h2>
      <div className='grid grid-cols-5'>{divs}</div>
    </div>
  )
}

export default Main_page
