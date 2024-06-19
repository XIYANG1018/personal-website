"use client"
import React, { useCallback, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';

// const navLinks = [
//     {
//         title: "About",
//         path: "#about",
//     },
//     {
//         title: "Projects",
//         path: "#projects",
//     },
//     {
//         title: "Contact",
//         path: "#contact",
//     }
// ]



const Navbar = () => {

    const [isClicked, setisClicked] = useState(false);

    const toggleNavbar = () => {
        setisClicked(!isClicked);
    }

    return (

        <nav className="bg-gradient-to-br  from-custom-pink via-custom-pink to-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                    
                            <a href="/" className="text-white font-lobster text-2xl">
                            Welcome
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <ScrollLink to='about' spy={true} smooth={true} offset={50} duration={500}
                            className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                About
                            </ScrollLink>
                            <ScrollLink to='projects' spy={true} smooth={true} offset={50} duration={500}
                            className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Projects
                            </ScrollLink>
                            <ScrollLink to='contact' spy={true} smooth={true} offset={50} duration={500}
                            className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Contact
                            </ScrollLink>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={toggleNavbar}>
                            {isClicked ? (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg  className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isClicked && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/"
                            className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                                About
                            </a>
                            <a href="/"
                            className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                                Projects
                            </a>
                            <a href="/"
                            className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                                Contact
                            </a>
                    </div>
                </div>
            )}
        </nav>
    );
    
};

export default Navbar;