
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = [
    { name: 'Index', path: '/' },
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Systems', path: '/systems' },
    { name: 'Manifesto', path: '/manifesto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dim bg-bg-main/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-5 text-white">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-sm font-bold tracking-widest uppercase">Bainaryglobe</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-medium uppercase tracking-[0.2em] transition-all pb-1 border-b-2 ${
                location.pathname === link.path 
                  ? 'text-white border-white' 
                  : 'text-txt-muted border-transparent hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="text-[11px] font-bold uppercase tracking-widest border border-border-dim px-5 py-2 hover:bg-white hover:text-black transition-all">
            Contact
          </button>
        </nav>

        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 transition-colors rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border-dim bg-bg-main/95 backdrop-blur-sm">
          <div className="flex flex-col px-6 py-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium uppercase tracking-widest py-4 border-b border-border-dim transition-colors ${
                  location.pathname === link.path 
                    ? 'text-white' 
                    : 'text-txt-muted hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              className="text-sm font-bold uppercase tracking-widest border border-border-dim px-5 py-4 mt-4 hover:bg-white hover:text-black transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
