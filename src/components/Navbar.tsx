'use client';

import { useState, useRef, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import navLink from '../assets/texts/navLink.json';
import { renderDropdownItems } from '@/helpers/dropdown-helper';

export function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleProductosClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/productos';
  };

  return (
    <nav className="sticky top-0 w-full container-fluid bg-[#004B64] h-[clamp(3.5rem,4.5rem,5.4rem)] flex flex-row justify-between">
      <div className="flex items-center justify-between w-full h-full px-[clamp(1rem,2vw,3rem)]">
        {/* Left side: Dropdown and links */}
        <div className="flex items-center gap-[clamp(1rem,3vw,5rem)] text-white text-[clamp(0.875rem,1.5vw,1.2rem)]">
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1 hover:underline hover:text-[#f5a623]"
                  onClick={handleProductosClick}
                >
                  {navLink.title}
                  <ChevronDown className="size-[clamp(0.75rem,1vw,1rem)]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent border-none shadow-none p-0 ml-[clamp(1rem,5vw,13rem)] mt-[1rem]">
                {renderDropdownItems(
                  navLink.dropdownItems,
                  selectedIndex,
                  setSelectedIndex
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a
            href="#"
            className="hover:underline hover:text-[#f5a623] hidden md:block"
          >
            Nosotros
          </a>
          <a
            href="/contacto"
            className="hover:underline hover:text-[#f5a623] hidden md:block"
          >
            Contacto
          </a>
        </div>
      </div>
      {/* Right side: Cotizar button */}
      <a
        href="#"
        className="bg-[#f5a623] text-white font-bold text-center flex items-center text-[clamp(0.875rem,1.2vw,1.1rem)] justify-center w-[clamp(4rem,15vw,20rem)] h-full hover:bg-[#e59820]"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        <span className="hidden md:inline">Cotizar</span>
        <span className="md:hidden">$</span>
      </a>
    </nav>
  );
}
