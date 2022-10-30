/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className=" sticky px-4 top-0 left-0 w-full flex justify-evenly items-center bg-primary text-white z-50">
      <div className="flex-grow-0">
        <img src="/white-logo.png" alt="Logo" className="h-36" />
      </div>
      <ul className="list-none flex-grow flex items-center justify-end text-white">
        <li className="after:transition-all after:-translate-x-1/2 px-2 relative after:content-[''] after:absolute after:bg-white after:bottom-1 after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 cursor-pointer">
          <a>Home</a>
        </li>
        <li className="after:transition-all after:-translate-x-1/2 px-2 relative after:content-[''] after:absolute after:bg-white after:bottom-1 after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 cursor-pointer">
          <a>About</a>
        </li>
        <li className="after:transition-all after:-translate-x-1/2 px-2 relative after:content-[''] after:absolute after:bg-white after:bottom-1 after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 cursor-pointer">
          <a>Services</a>
        </li>
        <li className="after:transition-all after:-translate-x-1/2 px-2 relative after:content-[''] after:absolute after:bg-white after:bottom-1 after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 cursor-pointer">
          <a>Projects</a>
        </li>
        <li className="after:transition-all after:-translate-x-1/2 px-2 relative after:content-[''] after:absolute after:bg-white after:bottom-1 after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 cursor-pointer">
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
