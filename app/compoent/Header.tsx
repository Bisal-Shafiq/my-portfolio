"use client"; // Mark this as a Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <h1 style={{textAlign:"center", paddingLeft:"60px" , paddingTop:"5px"}}>Bisal Shafiq</h1>
      <nav>
        <div className="menuIcon" onClick={toggleMenu}>
          <img src="/menu.png" alt="Menu Icon" />
        </div>
        <ul className={`navList ${menuOpen ? 'show' : ''}`}>
          <li><Link href="#about" onClick={closeMenu}>About</Link></li>
          <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link href="#services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
