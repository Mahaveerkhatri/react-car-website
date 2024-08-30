import React from 'react'


export function Navbar() {
  return (
    <nav className='w-full h-14 bg-blue-500 flex justify-between px-28 items-center'>
       {/* logo */}
      <h1 className='text-3xl font-extrabold'>TESLA.</h1>


       {/* nav-items */}
       <ul className='flex gap-12 bg-slate-600 pr-10 font-bold text-gray-800'>
        <li>HOME</li>
        <li>BOOK</li>
        <li>CONTACT</li>
        <li>ADDRESS</li>
       </ul>
    </nav>
  )
}


