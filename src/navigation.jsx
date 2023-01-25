import React from 'react';

const Navigation = () => {
    return (
        <header className="bg-gray-800">
            <nav className="container mx-auto flex items-center justify-between p-4 ">
                <ul className="flex space-x-6">
                    <li><a href="#home" className="text-white hover:text-gray-500">Home</a></li>
                    <li><a href="#about" className="text-white hover:text-gray-500">About</a></li>
                    <li><a href="#portfolio" className="text-white hover:text-gray-500">Portfolio</a></li>
                    <li><a href="#skills" className="text-white hover:text-gray-500">Skills</a></li>
                    <li><a href="#contact" className="text-white hover:text-gray-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;