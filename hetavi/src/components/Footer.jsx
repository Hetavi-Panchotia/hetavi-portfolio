import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-earth-border relative z-10 bg-earth-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
        
        <div className="text-earth-text/50 text-sm">
          &copy; {new Date().getFullYear()} Hetavi Panchotia. All rights reserved.
        </div>

        {/* <div className="flex items-center gap-2 text-earth-text/50 text-sm">
          Made with <Heart className="text-earth-secondary animate-pulse" size={16} fill="currentColor" /> by Hetavi
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;
