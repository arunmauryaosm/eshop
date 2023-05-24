import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
            <nav className='flex justify-between w-screen py-5 px-4 bg-yellow-500 overflow-hidden'>
                <div>
                    <p className='text-5xl font-bold tracking-wider'>Eshop.</p>
                </div>
                <div className='py-4 '>
                    <form>
                    <input type='text' className='bg-yellow-50 w-96 text-lg p-1 rounded-md' placeholder='Search'/>
                    </form>
                </div>
                <div>
                <ul className='flex space-x-6 py-4 px-6 float-right font-semibold  text-center text-2xl' >
                    <li>
                        <NavLink to={'/'} >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/product'} >
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cart'} >
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'} >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
