import React from 'react'
import Navlinks from '../../Data/Navlinks'

const Navbar = () => {
  return (
    <>
    
    <nav className='flex justify-between px-20 py-8'>
        <div>
            <h1 className='text-3xl'>CalQulate</h1>
        </div>
        <div className='flex gap-x-5 text-xl'>
            {
                Navlinks.map((nav)=>(
                    <h6 className='cursor-pointer hover:text-primary'>{nav.NavHeader}</h6>
                ))
            }
        </div>
    </nav>

    </>
  )
}

export default Navbar
