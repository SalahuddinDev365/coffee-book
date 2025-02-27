import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar backdrop-blur-xl z-50 bg-white/30 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink className={({isActive}) => `${isActive ? 'font-bold bg-activeBtn px-4 py-1 rounded-xl' : 'hover:bg-hover px-4 py-1 rounded-xl'}`}  to="/">Home</NavLink>
                    <NavLink className={({isActive}) => `${isActive ? 'font-bold bg-activeBtn px-4 py-1 rounded-xl' : 'hover:bg-hover px-4 py-1 rounded-xl'}`} to="/coffees">Coffees</NavLink>
                    <NavLink className={({isActive}) => `${isActive ? 'font-bold bg-activeBtn px-4 py-1 rounded-xl' : 'hover:bg-hover px-4 py-1 rounded-xl'}`} to="/dashboard">Dashboard</NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Coffee_Book</Link>
            </div>
            <div className="navbar-end hidden lg:flex gap-12">
                <ul className="menu menu-horizontal px-1 gap-8">
                    <NavLink className={({isActive}) => `${isActive ? 'font-bold bg-activeBtn px-4 py-1 rounded-xl' : 'hover:bg-hover px-4 py-1 rounded-xl'}`}  to="/">Home</NavLink>
                    <NavLink className={({isActive}) => `${isActive ? 'font-bold bg-activeBtn px-4 py-1 rounded-xl' : 'hover:bg-hover px-4 py-1 rounded-xl'}`} to="/coffees">Coffees</NavLink>
                    <NavLink className={({isActive}) => `${isActive ? 'font-bold bg-activeBtn px-4 py-1 rounded-xl' : 'hover:bg-hover px-4 py-1 rounded-xl'}`} to="/dashboard">Dashboard</NavLink>

                </ul>
            </div>

        </div>
    );
};

export default Navbar;