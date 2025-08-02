"use client"

import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (        
        // Navigation Bar
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center bg-black/80 backdrop-blur-sm">
        <Link href="/" passHref>
          <Image
            src="/imgnb.png" // Ensure this path is correct
            alt="Bright Yanchirah"
            width={32}
            height={32}
            className="md:w-10 md:h-10 object-cover rounded-full"
          />
        </Link>
        
        {/* Logo/Name - Hidden on small screens, visible on medium+ */}
        <div className="hidden md:block text-lg lg:text-2xl font-bold">BRIGHT.YANCHIRAH</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-xs lg:text-sm">
          <a href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT
          </a>
          <a href="/projects" className="hover:text-gray-300 transition-colors">
            PROJECTS
          </a>
          <a href="/skills" className="hover:text-gray-300 transition-colors">
            SKILLS
          </a>
          <a href="/contact" className="hover:text-gray-300 transition-colors">
            CONTACT
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-xl">
            <a 
              href="/about" 
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="/projects" 
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </a>
            <a 
              href="/skills" 
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SKILLS
            </a>
            <a 
              href="/contact" 
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        )}
      </nav>
    )
}