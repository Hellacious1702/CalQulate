import React from 'react'
import Navlinks from '../../Data/Navlinks'
import { Link } from 'react-router'

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
                    <Link className='cursor-pointer font-bold hover:text-primary' to={nav.NavLink}>{nav.NavHeader}</Link>
                ))
            }
        </div>
    </nav>

    </>
  )
}

export default Navbar
