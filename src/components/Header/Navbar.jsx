import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const list = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : ""}><li className='m-3 font-semibold text-base'>Home</li></NavLink>
        <NavLink to="/apps" className={({ isActive }) => isActive ? "text-blue-400" : ""}><li className='m-3 font-semibold text-base'>Apps</li></NavLink>
        <NavLink to="/installation" className={({ isActive }) => isActive ? "text-blue-400" : ""}><li className='m-3 font-semibold text-base'>Installation</li></NavLink>
    </>
    return (
        <div className="">
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>
                    <Link to="/"
                        className="flex items-center space-x-1.5 cursor-pointer px-0"
                    >
                        <img src={logo} className="w-8" alt="Simplico logo" />
                        <span className="text-xl font-semibold">Simplico</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="https://github.com/asm-saim/simplico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn border-none text-base rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"
                    >
                        <FaGithub /> Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;