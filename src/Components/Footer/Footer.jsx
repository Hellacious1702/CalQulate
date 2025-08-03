import React from 'react'
import Navlinks from '../../Data/Navlinks'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    
    <footer className='px-20 pt-20 pb-10 bg-neutral-200 flex flex-col items-center gap-y-10'>
        <div>
            <h1 className='text-5xl'>CalQulate</h1>
        </div>

        <div className='w-3/4'>
            <p className='text-center'>CalQulate makes nutrition simple, empowering you to discover your daily needs and make informed choices. Our brand values clarity, inclusivity, and motivation—helping everyone achieve sustainable health goals with tools and guidance that fit your unique journey.</p>
        </div>


        <div className='flex gap-x-10'>
            {Navlinks.map((nav) => (
                <Link to={nav.NavLink} className='font-bold text-xl cursor-pointer hover:text-primary'>{nav.NavHeader}</Link>
            ))}
        </div>

        <div className='w-1/2 mt-10 pt-5 border-t-2 border-neutral-800'>
            <p className='text-center'>© 2025 CalQulate. Empowering you to understand your unique nutrition needs and achieve your health goals with simplicity and confidence. All rights reserved.</p>
        </div>

        
    </footer>
    
    </>
  )
}

export default Footer
