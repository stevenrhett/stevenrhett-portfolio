import React from 'react';
import srLogo from "./assets/srLogo.svg";

const Navigation = () => {
    return (<div className="navbar bg-blue-300">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                </label>
                <ul tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-50 rounded-box w-52">
                    <li><a>Item 1</a></li>

                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <img  src={srLogo}
                  alt={"logo"}
                className="btn btn-ghost ring-gray-900/10 hover:ring-gray-900/20"/>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  font-bold text-lg text-rose-700 px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost bg-rose-50 text-rose-700 ring-1 ring-gray-900/10 hover:ring-gray-900/20">Get started</a>
            </div>
            </div>

        );
        }

        export default Navigation;