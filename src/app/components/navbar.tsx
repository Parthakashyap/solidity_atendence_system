// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav className=" backdrop-opacity-45 p-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">Atendence</a>
        </div>
        <div>
        <w3m-button/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
