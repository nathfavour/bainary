
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border-dim bg-bg-surface py-16 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="size-4 text-white">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Bainaryglobe Research Systems</h4>
          </div>
          <p className="text-xs text-txt-muted max-w-xs leading-relaxed font-mono">
            Institutional research and systems architecture. Operating from distributed coordinates. Non-commercial distribution of research findings is permitted with attribution.
          </p>
          <div className="text-[10px] text-txt-muted font-mono uppercase tracking-widest">
            © 2024 Bainaryglobe. Thinking in decades.
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-[10px] font-mono text-txt-muted uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold mb-2">Registry</span>
            <span className="hover:text-white transition-colors cursor-pointer">Encryption PGP</span>
            <span className="hover:text-white transition-colors cursor-pointer">Legal Protocol</span>
            <span className="hover:text-white transition-colors cursor-pointer">Site Metadata</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold mb-2">Locations</span>
            <span>London</span>
            <span>San Francisco</span>
            <span>Zurich</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold mb-2">Connect</span>
            <span className="hover:text-white transition-colors cursor-pointer">Twitter / X</span>
            <span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span>
            <span className="hover:text-white transition-colors cursor-pointer">GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
