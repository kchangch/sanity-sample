import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                        exact 
                        activeClassName="textColor"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover: menu text-4xl font-bold cursive tracking-widest"
                    >
                        Argenis Chang
                    </NavLink>
                    <NavLink to="/about" 
                        activeClassName="textColor"
                        className="inflex items-center py-3 px-3 my-6 rounded text-white hover: menu"
                    >
                        About
                    </NavLink>
                    <NavLink to="/work"
                        activeClassName="textColor"
                        className="inflex items-center py-3 px-3 my-6 rounded text-white hover: menu"
                    >
                        Work
                    </NavLink>
                    <NavLink to="/project"
                        activeClassName="textColor"
                        className="inflex items-center py-3 px-3 my-6 rounded text-white hover: menu"
                    >
                        Projects
                    </NavLink>
                    {/* <NavLink to="/contact"
                        activeClassName="textColor"
                        className="inflex items-center py-3 px-3 my-6 rounded text-white hover: menu"
                    >
                        Contact
                    </NavLink> */}
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/kchangch/" className="mr-4" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/kidjouchang/" className="mr-4" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 35, width: 35}} />
                    <SocialIcon url="mailto: kidjou1990@hotmail.com" className="mr-4" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}   