/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="px-4 h-44 flex justify-evenly items-center bg-blue-600">
      <div className="flex-grow-0">
        <img src="/white-logo.png" alt="Logo" />
      </div>
      <ul className="list-none flex-grow flex items-center justify-end">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
