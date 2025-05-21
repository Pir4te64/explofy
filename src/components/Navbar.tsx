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
    <nav className="sticky top-0 w-[95rem] bg-[#004B64] h-[5.4rem] flex flex-row justify-between">
      <div className="flex items-center justify-between max-w-[1200px] h-full px-[3rem]">
        {/* Left side: Dropdown and links */}
        <div className="flex items-center gap-20 text-white text-[1.2rem]">
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
                  <ChevronDown className="size-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent border-none shadow-none p-0 ml-[13rem] mt-[1rem]">
                {renderDropdownItems(
                  navLink.dropdownItems,
                  selectedIndex,
                  setSelectedIndex
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a href="#" className="hover:underline hover:text-[#f5a623]">
            Nosotros
          </a>
          <a href="/contacto" className="hover:underline hover:text-[#f5a623]">
            Contacto
          </a>
        </div>
      </div>
      {/* Right side: Cotizar button */}
      <a
        href="#"
        className="bg-[#f5a623] text-white font-bold text-center flex items-center text-[1.1rem] justify-center w-[20rem] h-full hover:bg-[#e59820]"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Cotizar
      </a>
    </nav>
  );
}
