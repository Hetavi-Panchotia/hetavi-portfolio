import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-dark-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Hetavi Panchotia. All rights reserved.
        </div>

        <div className="flex items-center gap-2 text-white/50 text-sm">
          Made with <Heart className="text-neon-purple animate-pulse" size={16} fill="currentColor" /> by Hetavi
        </div>

        <div className="flex gap-6 text-sm">
          <a href="https://x.com/HPanchotia21633" className="text-white/50 hover:text-neon-blue transition-colors">Twitter</a>
          <a href="https://www.youtube.com/@HetaviPanchotia-2007" className="text-white/50 hover:text-neon-blue transition-colors">YouTube</a>
          <a href="https://leetcode.com/u/in_the_bluess/" className="text-white/50 hover:text-neon-blue transition-colors">LeetCode</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
