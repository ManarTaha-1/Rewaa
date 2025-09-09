import React, { useState } from 'react';
import CoursesSection from './CoursesSection';
import { Facebook, Instagram, Linkedin, Music } from 'lucide-react';
import logo from '../../../../../cover/logo.png';

import img2 from '../../../../../cover/2.png';
import img3 from '../../../../../cover/3.png';
import img4 from '../../../../../cover/4.png';
import img5 from '../../../../../cover/5.png';

const Header: React.FC = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

const images = [img2, img3, img4, img5];

  return (
    <header className="glass-nav fixed top-0 w-full z-50 py-4">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center bg-purple-800 p-2 rounded-full">
            <img 
              src={logo}
              alt="شعار رواء"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,...';
              }}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <a href="#home" className="text-purple-800 hover:text-purple-600 transition-colors font-semibold">
              الرئيسية
            </a>
            <button 
              onClick={() => setShowAbout(!showAbout)} 
              className="text-purple-800 hover:text-purple-600 transition-colors font-semibold"
            >
              مين رواء
            </button>
            <button 
              onClick={() => setShowCourses(!showCourses)}  
              className="text-purple-800 hover:text-purple-600 transition-colors font-semibold"
            >
              مكتبتي
            </button>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-reverse space-x-4">
            <a href="https://www.facebook.com/share/15BTZp6KvBp/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/riwaa709?igsh=MTN2b2lzOGhodHQxeg==" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@.riwaa7?_t=ZS-8zWgf86Ekbq&_r=1" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
              <Music size={24} />
            </a>
            <a href="https://www.linkedin.com/in/riwaa-%D8%B1%D9%88%D8%A7%D8%A1-b05865382/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Show About Section */}
        {showAbout && (
          <div className="w-full mt-16 fade-in-up pb-40">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">مين رواء</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={src}
                    alt={`About ${idx + 1}`}
                    className="w-full h-100 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show Courses Section */}
        {showCourses && (
          <div className="w-full mt-16 fade-in-up">
            <CoursesSection />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
