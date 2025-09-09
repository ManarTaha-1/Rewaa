import React from 'react';
import { Facebook, Instagram, Music } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="glass-nav fixed top-0 w-full z-50 py-4">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <div className="text-center mb-4">
          <img 
            src="https://www.canva.com/design/DAGxVuj51UY/mqGlwv-ErNcj890bFWIDag/edit?utm_content=DAGxVuj51UY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            alt="بانر رواء"
            className="w-full h-20 object-cover rounded-lg opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://drive.google.com/uc?export=view&id=1Qv__kz_JVpdRrUUzn3VWKpxdUtp23qTc"
              alt="شعار رواء"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM5MzcwZGIiLz4KPHRleHQgeD0iMjAiIHk9IjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPtixPC90ZXh0Pgo8L3N2Zz4K';
              }}
            />
            <span className="mr-3 text-xl font-bold text-purple-800">رواء</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <a href="#home" className="text-purple-800 hover:text-purple-600 transition-colors font-semibold">
              الرئيسية
            </a>
            <a href="#about" className="text-purple-800 hover:text-purple-600 transition-colors font-semibold">
              مين رواء
            </a>
            <a href="#library" className="text-purple-800 hover:text-purple-600 transition-colors font-semibold">
              مكتبتي
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-reverse space-x-4">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              <Music size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;