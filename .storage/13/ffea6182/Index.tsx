import React from 'react';
import Header from '../components/sections/Header';
import HeroSection from '../components/sections/HeroSection';
import CoursesSection from '../components/sections/CoursesSection';
import IslamicPatterns from '../components/ui/islamic-patterns';

export default function Index() {
  return (
    <div className="min-h-screen animated-bg relative">
      <IslamicPatterns />
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
      </main>
      
      {/* Footer */}
      <footer className="section-card mx-4 mb-8 p-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-4 arabic-text">
            رواء - نرتوي علماً وإيماناً
          </h3>
          <p className="text-purple-600 arabic-text mb-6">
            إحنا هنا علشانك… علشان تكوني أحسن نسخة من نفسك في كل جوانب حياتك بإذن الله
          </p>
          
          <div className="flex justify-center space-x-reverse space-x-6 mb-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              فيسبوك
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              انستجرام
            </a>
            <a 
              href="https://www.tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              تيك توك
            </a>
          </div>
          
          <div className="border-t border-purple-200 pt-4">
            <p className="text-purple-500 text-sm arabic-text">
              جميع الحقوق محفوظة © 2024 رواء
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}