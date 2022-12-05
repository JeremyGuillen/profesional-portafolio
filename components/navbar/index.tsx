/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-grow-0">
        <img src="/small_logo.png" alt="Logo" className="h-40" />
      </div>
      <div className="text-white inline md:hidden text-2xl cursor-pointer" onClick={onToggleSidebar}>
        <MenuOutlined />
      </div>
      <ul className="hidden md:flex list-none flex-grow items-center justify-end text-white">
        <li className="px-2 cursor-pointer">
          <a className=" relative after:absolute after:content-[''] after:transition-all after:-translate-x-1/2 text-white hover:text-white after:bg-white after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 after:-bottom-1">Home</a>
        </li>
        <li className="px-2 cursor-pointer">
          <a className=" relative after:absolute after:content-[''] after:transition-all after:-translate-x-1/2 text-white hover:text-white after:bg-white after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 after:-bottom-1">About</a>
        </li>
        <li className="px-2 cursor-pointer">
          <a className="  relative after:absolute after:content-[''] after:transition-all after:-translate-x-1/2 text-white hover:text-white after:bg-white after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 after:-bottom-1">Services</a>
        </li>
        <li className="px-2 cursor-pointer">
          <a className=" relative after:absolute after:content-[''] after:transition-all after:-translate-x-1/2 text-white hover:text-white after:bg-white after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 after:-bottom-1">Projects</a>
        </li>
        <li className="px-2 cursor-pointer">
          <a className=" relative after:absolute after:content-[''] after:transition-all after:-translate-x-1/2 text-white hover:text-white after:bg-white after:w-0 after:h-0 after:left-1/2 hover:after:h-px hover:after:w-3/4 after:-bottom-1">Contact</a>
        </li>
      </ul>
    </div>
  );
};
