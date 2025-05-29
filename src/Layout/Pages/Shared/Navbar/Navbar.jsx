import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="navbar fixed max-w-[1440px] bg-gradient-to-r from-[#0803b7] to-[#28899c] z-50 mx-auto opacity-90 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to="about" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">About Me</Link>
                        <Link to="skills" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">Skills</Link>
                        <Link to="projects" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">Projects</Link>
                        <Link to="contact" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">Contact</Link>
                    </ul>
                </div>
                <img src="https://i.imgur.com/WRGI6p1.png" className='h-12 bg-amber-500 hover:bg-amber-600 rounded-xl' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to="about" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">About Me</Link>
                    <Link to="skills" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="btn bg-amber-500 hover:bg-amber-600 rounded-xl mx-2 cursor-pointer">Contact</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-amber-500 hover:bg-amber-600 rounded-xl">GitHub</a>
            </div>
        </div>

    );
};

export default Navbar;